import { useState } from "react";
interface AddTodoProps {
  addTodo: (title: string, description: string, time: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");

  const addNewTodo = () => {
    addTodo(title, description, time);
    setTitle("");
    setDescription("");
    setTime("");
  };

  return (
    <div className="flex flex-col gap-2 w-[60%]">
      <input
        type="text"
        placeholder="Todo"
        className="input input-bordered rounded-2xl border border-1 border-neutral  focus:outline-none w-full"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <textarea
        className="textarea textarea-bordered rounded-2xl border border-1 border-neutral focus:outline-none "
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        placeholder="Description"
      ></textarea>

      <button onClick={addNewTodo} className="btn btn-neutral rounded-xl">
        Add
      </button>
    </div>
  );
};
export default AddTodo;
