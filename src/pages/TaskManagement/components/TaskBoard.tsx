import {
  closestCorners,
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  Over,
  PointerSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import { useState } from "react";
import TaskItem from "./TaskItem";
import Grid from "@mui/material/Grid2";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useProjectContext } from "../../../contexts/ProjectContext";
import milestoneApi from "../../../apis/milestone/milestone.api";
import DroppableField from "./DroppableField";
import CreateMilestone from "./CreateMilestone";
import { IMilestoneTask } from "../../../types/milestoneTask";
import milestoneTaskApi from "../../../apis/milestoneTask/milestoneTask.api";
import { UpdateMilestoneTaskReqType } from "../../../apis/milestoneTask/milestoneTask-req.type";

const TaskBoard = () => {
  const { project } = useProjectContext();

  const { data: milestoneData } = useQuery({
    queryKey: ["milestones", project?.id],
    queryFn: () => milestoneApi.getMilestones(project?.id as string)
  });

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  const [activeItem, setActiveItem] = useState<IMilestoneTask | null>();

  const updateMilestoneTask = useMutation({
    mutationFn: (data: UpdateMilestoneTaskReqType) =>
      milestoneTaskApi.updateMilestoneTask(data)
  });

  const findContainer = (id: string) => {
    return milestoneData?.data.data.find((milestone) => milestone.id === id);

    // return Object.keys(items).find((key) => items[key].includes(id));
  };

  const handleDragStart = (event: DragStartEvent) => {
    const { id } = event.active;
    setActiveItem(findTask(id as string) as IMilestoneTask);
  };

  const findTask = (id: string): IMilestoneTask => {
    let task: IMilestoneTask = {} as IMilestoneTask;
    milestoneData?.data.data.map((milestone) => {
      task = milestone.milestoneTasks.find(
        (item) => item.id === id
      ) as IMilestoneTask;
    });

    return task;
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over, delta } = event;
    const { id } = active;
    const { id: overId } = over as Over;
    // Find the containers
    const activeContainer = findContainer(id.toString());
    const overContainer = findContainer(overId.toString());
    if (
      !activeContainer ||
      !overContainer ||
      activeContainer === overContainer
    ) {
      return;
    }

    // updateMilestoneTask.mutate({
    //   milestoneTaskId: id.toString(),
    //   milestoneId: overContainer.id
    // });
    // setItems((prev) => {
    //   const activeItems = prev[activeContainer];
    //   const overItems = prev[overContainer];
    //   // Find the indexes for the items
    //   const activeIndex = activeItems.indexOf(id);
    //   const overIndex = overItems.indexOf(overId);
    //   let newIndex;
    //   if (overId in prev) {
    //     // We're at the root droppable of a container
    //     newIndex = overItems.length + 1;
    //   } else {
    //     const isBelowLastItem =
    //       over &&
    //       overIndex === overItems.length - 1 &&
    //       delta.y > over.rect.top + over.rect.height;
    //     const modifier = isBelowLastItem ? 1 : 0;
    //     newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
    //   }
    //   return {
    //     ...prev,
    //     [activeContainer]: [
    //       ...prev[activeContainer].filter((item) => item !== active.id)
    //     ],
    //     [overContainer]: [
    //       ...prev[overContainer].slice(0, newIndex),
    //       items[activeContainer][activeIndex],
    //       ...prev[overContainer].slice(newIndex, prev[overContainer].length)
    //     ]
    //   };
    // });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    // const { active, over } = event;
    // const { id } = active;
    // const { id: overId } = over as Over;
    // const activeContainer = findContainer(id.toString());
    // const overContainer = findContainer(overId.toString());
    // if (
    //   !activeContainer ||
    //   !overContainer ||
    //   activeContainer !== overContainer
    // ) {
    //   return;
    // }
    // const activeIndex = items[activeContainer].indexOf(active.id);
    // const overIndex = items[overContainer].indexOf(overId);
    // if (activeIndex !== overIndex) {
    //   setItems((items) => ({
    //     ...items,
    //     [overContainer]: arrayMove(items[overContainer], activeIndex, overIndex)
    //   }));
    // }
    // setActiveId(null);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <Grid
        // container
        display={"flex"}
        gap={3}
        sx={{
          height: "calc(100vh - 110px)"
        }}
        overflow={"auto"}
      >
        {milestoneData?.data.data.map((milestone) => (
          <DroppableField
            milestoneId={milestone.id}
            title={milestone.name}
            sx={{
              minWidth: "350px",
              height: "fit-content",
              maxHeight: "95%"
            }}
            key={milestone.id}
            id={milestone.id}
            items={milestone.milestoneTasks}
          />
        ))}

        <CreateMilestone />
        <DragOverlay>
          {activeItem ? <TaskItem taskDetail={activeItem} /> : null}
        </DragOverlay>
      </Grid>
    </DndContext>
  );
};

export default TaskBoard;
