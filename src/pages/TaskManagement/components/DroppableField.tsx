import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import TaskItem from "./TaskItem";

const containerStyle = {
  background: "#dadada",
  padding: 10,
  margin: 10,
  flex: 1,
  gap: 10
};

interface DroppableFieldProps {
  id: string;
  items: string[];
}

const DroppableField = ({ id, items }: DroppableFieldProps) => {
  const { setNodeRef } = useDroppable({
    id
  });

  return (
    <SortableContext
      id={id}
      items={items}
      strategy={verticalListSortingStrategy}
    >
      <div ref={setNodeRef} style={containerStyle}>
        {items.map((id) => (
          <TaskItem key={id} id={id} />
        ))}
      </div>
    </SortableContext>
  );
};

export default DroppableField;
