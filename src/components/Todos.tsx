import TodoCard from "./TodoCard";

interface Todo {
  id: string;
  title: string;
  description: string;
  time: string;
}

interface TodosProps {
  todos: Todo[];
  onComplete: (id: string) => void;
}

const Todos = ({ todos, onComplete }: TodosProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-10 py-10">
      {todos.map((todo) => (
        <TodoCard data={todo} onComplete={onComplete} />
      ))}
    </div>
  );
};
export default Todos;
