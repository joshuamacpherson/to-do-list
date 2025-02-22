import { useState } from "react";

type TaskInputProps = {
  addTask: (task: string) => void;
};

function TaskInput({ addTask }: TaskInputProps) {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="flex items-center justify-center m-10">
      <div className="relative w-150">
        <input
          className="w-full h-11 rounded-3xl bg-[#DDDDDD] font-ibm font-medium text-black placeholder-black pl-4 pr-16 outline-0"
          type="text"
          id="task"
          placeholder="Enter task here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={() => {
            addTask(inputValue);
          }}
          className="absolute right-0 top-0 h-11 w-16 rounded-3xl font-ibm font-medium text-white bg-[#c36c6d] outline-[bg-[#c36c6d]
          hover:bg-[#955354] transform transition-transform duration-100 ease-in-out hover:scale-105 hover:cursor-pointer active:scale-100"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default TaskInput;
