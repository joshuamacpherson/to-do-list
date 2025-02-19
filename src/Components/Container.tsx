import { useState, useEffect } from "react";
import TaskInput from "./Input";

function Container() {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (task: string) => {
    if (!task) return;
    setTasks(prevTasks => {
      const newTasks = [...prevTasks, task];
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

  function saveTasks(newTasks: string[]) {
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

  function showTasks() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }

  useEffect(() => {
    showTasks();
  }, []);

  return (
    <div>
      <div>
        <TaskInput addTask={addTask} />
      </div>
      <div className="flex items-center justify-center m-10">
        <div id="container" className="rounded-4xl bg-[#282c34] min-h-150 w-200 p-5">
          {tasks.map((task, index) => (
            <div key={index} className="flex items-start">
              <h1 className="font-[JetBrains_Mono] text-3xl text-[#008cff] pb-5 pt-3 w-12 text-right">
                {index + 1}.
              </h1>
              <h1 className="font-[JetBrains_Mono] text-3xl text-[#cacaca] pl-8 pb-5 pt-3 break-words whitespace-normal w-150">
                {task}
              </h1>
              <button
                onClick={() => removeTask(index)}
                className="
                  relative text-white outline-[#c36c6d] bg-[#c36c6d]
                  font-[JetBrains_Mono] outline-1 mt-4 p-1 -right-10 w-10 h-10 rounded-full flex items-center justify-center
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

export default Container;
