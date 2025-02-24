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
import { useQuery } from "@tanstack/react-query";
import { useProjectContext } from "../../../contexts/ProjectContext";
import milestoneApi from "../../../apis/milestone/milestone.api";
import DroppableField from "./DroppableField";
import { Typography } from "@mui/material";
import CreateMilestone from "./CreateMilestone";

const TaskBoard = () => {
  const { project } = useProjectContext();

  const [items, setItems] = useState({
    todo: ["4", "5", "6"],
    doing: ["7", "8", "9"],
    completed: ["1", "2", "3"]
  });

  const { data: milestoneData } = useQuery({
    queryKey: ["milestones", project?.id],
    queryFn: () => milestoneApi.getMilestones(project?.id as string)
  });

  console.log(milestoneData?.data.data);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  const [activeId, setActiveId] = useState<string | null>();

  const findContainer = (id: string) => {
    if (id in items) {
      return id;
    }

    return Object.keys(items).find((key) => items[key].includes(id));
  };

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const { id } = active;

    setActiveId(id);
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

    setItems((prev) => {
      const activeItems = prev[activeContainer];
      const overItems = prev[overContainer];

      // Find the indexes for the items
      const activeIndex = activeItems.indexOf(id);
      const overIndex = overItems.indexOf(overId);

      let newIndex;
      if (overId in prev) {
        // We're at the root droppable of a container
        newIndex = overItems.length + 1;
      } else {
        const isBelowLastItem =
          over &&
          overIndex === overItems.length - 1 &&
          delta.y > over.rect.top + over.rect.height;

        const modifier = isBelowLastItem ? 1 : 0;

        newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
      }

      return {
        ...prev,
        [activeContainer]: [
          ...prev[activeContainer].filter((item) => item !== active.id)
        ],
        [overContainer]: [
          ...prev[overContainer].slice(0, newIndex),
          items[activeContainer][activeIndex],
          ...prev[overContainer].slice(newIndex, prev[overContainer].length)
        ]
      };
    });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    const { id } = active;
    const { id: overId } = over as Over;

    const activeContainer = findContainer(id.toString());
    const overContainer = findContainer(overId.toString());

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer !== overContainer
    ) {
      return;
    }

    const activeIndex = items[activeContainer].indexOf(active.id);
    const overIndex = items[overContainer].indexOf(overId);

    if (activeIndex !== overIndex) {
      setItems((items) => ({
        ...items,
        [overContainer]: arrayMove(items[overContainer], activeIndex, overIndex)
      }));
    }

    setActiveId(null);
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
            milestoneId={milestone.milestoneId}
            title={milestone.milestoneName}
            sx={{
              minWidth: "350px",
              height: "fit-content",
              maxHeight: "95%"
            }}
            key={milestone.milestoneId}
            id={milestone.milestoneId}
            items={milestone.milestoneTasks}
          />
        ))}

        <CreateMilestone />
        <DragOverlay>
          {activeId ? <TaskItem id={activeId} /> : null}
        </DragOverlay>
      </Grid>
    </DndContext>
  );
};

export default TaskBoard;
