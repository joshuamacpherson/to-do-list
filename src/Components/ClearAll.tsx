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
    className="absolute right-12 top-8 bg-[#c36c6d] hover:bg-[#8f4f4f] text-white font-medium py-2 px-3 rounded-3xl hover:cursor-pointer transform transition-transform duration-100 ease-in-out hover:scale-105 active:scale-100"
    >
      Clear Completed
    </button>
  );
}
