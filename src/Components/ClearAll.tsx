import { Task } from "../App";

type ClearAllProps = {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  saveTasks: (newTasks: Task[]) => void;
};

export default function ClearAll({ setTasks, saveTasks }: ClearAllProps) {


  const removeCompletedTasks = () => {
    setTasks(tasks => {
      const newTasks = tasks.filter(task => task.enabled);
      saveTasks(newTasks);
      return newTasks;
    });
  };

  return (
    <button
    onClick={removeCompletedTasks}
    className="mt-5 bg-[#c36c6d] hover:bg-[#8f4f4f] text-white font-medium py-2 px-4 rounded-3xl hover:cursor-pointer"
    >
      Clear Completed
    </button>
  );
}
