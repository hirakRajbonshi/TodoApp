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
      {/* <TodoCard
        title="Shoes"
        description="If a dog chews shoes whose shoes does he choose?"
        time="1"
      />
      <TodoCard
        title="Shoes"
        description="If a dog chews shoes whose shoes does he choose?"
        time="1"
      />
      <TodoCard
        title="Shoes"
        description="If a dog chews shoes whose shoes does he choose?"
        time="1"
      />
      <TodoCard
        title="Shoes"
        description="If a dog chews shoes whose shoes does he choose?"
        time="1"
      />
      <TodoCard
        title="Shoes"
        description="If a dog chews shoes whose shoes does he choose?"
        time="1"
      />
      <TodoCard
        title="Shoes"
        description="If a dog chews shoes whose shoes does he choose?"
        time="1"
      />
      <TodoCard
        title="Shoes"
        description="If a dog chews shoes whose shoes does he choose?"
        time="1"
      />
      <TodoCard
        title="Shoes"
        description="If a dog chews shoes whose shoes does he choose?"
        time="1"
      />
      <TodoCard
        title="Shoes"
        description="If a dog chews shoes whose shoes does he choose?"
        time="1"
      />
      <TodoCard
        title="Shoes"
        description="If a dog chews shoes whose shoes does he choose?"
        time="1"
      />
      <TodoCard
        title="Shoes"
        description="If a dog chews shoes whose shoes does he choose?"
        time="1"
      /> */}
    </div>
  );
};
export default Todos;
