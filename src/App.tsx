import { useState, useEffect } from "react";
import TaskInput from "./Components/Input";
import ClearAll from "./Components/ClearAll";

export type Task = {
  text: string;
  enabled: boolean;
};

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const saveTasks = (newTasks: Task[]) => {
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const showTasks = () => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  };

  useEffect(() => {
    showTasks();
  }, []);

  const addTask = (taskText: string) => {
    if (!taskText) return;
    setTasks(prevTasks => {
      const newTasks = [...prevTasks, { text: taskText, enabled: true }];
      saveTasks(newTasks);
      return newTasks;
    });
  };

  const removeTask = (index: number) => {
    setTasks(prevTasks => {
      const newTasks = prevTasks.filter((_, i) => i !== index);
      saveTasks(newTasks);
      return newTasks;
    });
  };

  const toggleTask = (index: number) => {
    setTasks(prevTasks => {
      const newTasks = prevTasks.map((task, i) => {
        if (i === index) {
          return { ...task, enabled: !task.enabled };
        }
        return task;
      });
      saveTasks(newTasks);
      return newTasks;
    });
  };

  return (
    <div>
      <ClearAll setTasks={setTasks} saveTasks={saveTasks} />
      <h1 className="p-12 font-ibm text-5xl font-extrabold flex items-start justify-start text-left text-[#cacaca]">Simple To-Do</h1>
      <TaskInput addTask={addTask} />
      <div className="flex items-center justify-center m-10">
        <div id="container" className="rounded-4xl bg-[#282c34] min-h-150 w-200 p-5">
          {tasks.map((task, index) => (
            <div key={index} className="flex items-start">
              <h1 className="font-ibm text-3xl text-[#008cff] pb-5 pt-3 w-12 text-right">
                {index + 1}.
              </h1>
              <h1
                onClick={() => toggleTask(index)}
                className={`font-ibm text-3xl select-none pl-8 pb-5 pt-3 break-words whitespace-normal w-150 hover:cursor-pointer ${
                  task.enabled ? "text-[#cacaca]" : "line-through text-[#989898]"
                }`}
              >
                {task.text}
              </h1>
              <button
                onClick={() => removeTask(index)}
                className="
                  relative text-white outline-[#c36c6d] bg-[#c36c6d]
                  font-ibm outline-1 mt-4 p-1 -right-10 w-10 h-10 rounded-full flex items-center justify-center
                  hover:outline-[#8f4f4f] hover:bg-[#8f4f4f] hover:cursor-pointer
                  transition-transform duration-100 ease-in-out hover:scale-105 fa fa-trash custom-trash-icon"
              />
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}


