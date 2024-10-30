interface Todo {
  id: string;
  title: string;
  description: string;
  time: string;
}

interface TodoCardProps {
  data: Todo;
  onComplete: (id: string) => void;
}
export default function TodoCard({ data, onComplete }: TodoCardProps) {
  return (
    <div className="card bg-base-100 image-full w-80 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{data.title}</h2>
        <p>{data.description}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => onComplete(data.id)}
            className="btn btn-primary"
          >
            Complete
          </button>
        </div>
      </div>
    </div>
  );
}
