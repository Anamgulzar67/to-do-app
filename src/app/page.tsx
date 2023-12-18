

"use client"

import React from 'react'
import { useState } from 'react';


const Page : React.FC = () => {
   // State to manage the list of tasks
   const [tasks, setTasks] = useState<string[]>([]);
   const [taskInput, setTaskInput] = useState<string>('');

   // Function to add a task to the list
  const addTask = (): void => {
    if (taskInput.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, taskInput]);
      setTaskInput('');
    }
  };
 
   // Function to delete a task from the list
   const deleteTask = (task: string): void => {
     setTasks((prevTasks) => prevTasks.filter((t) => t !== task));
   };
  // Function to update a task in the list
  const updateTask = (oldTask: string, newTask: string): void => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task === oldTask ? newTask : task))
    );
  };
// Function to clear all tasks from the list
const clearTasks = (): void => {
  setTasks([]);
};



   return (
     <div className=' flex justify-center border  border-slate-500 rounded-lg w-[30%] mx-auto py-4 my-8'>
      <div>

       <h1 className='text-3xl text-center text-gray-700 my-2 border-slate-300'>To-Do List</h1>
       
       {/* Input form to add tasks */}
       <form
       className='my-2'
         onSubmit={(e) => {
           e.preventDefault();
           addTask();
  
         }}
       >
         <input 
         className='bg-transparent border rounded-lg border-gray-500 m-2 p-2'
         type="text" 
         value={taskInput}  
         onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add or update a task"
          />
        <button type="submit">Add / Update Task</button>
       </form>
 
       {/* Display the list of tasks */}
        <ul className="list-decimal ml-4">
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button
              className=' bg-transparent border rounded border-gray-500 ml-2 px-2 my-2'
                onClick={() => deleteTask(task)}>Delete</button>
                <button
                className=' bg-transparent border rounded border-gray-500 ml-2 px-2'
                    onClick={() => {
                  const updatedTask = prompt('Update task:', task);
                  if (updatedTask !== null) {
                    updateTask(task, updatedTask);
                  }
                }}
              >
                Update
              </button>
                
            </li>
          ))}
        </ul>
       {/* Button to clear all tasks */}
      <button onClick={clearTasks} className=' bg-transparent border rounded border-gray-500 m-2 px-2'>Clear All Tasks</button>
     </div>
      </div>
   );
 };
 

export default Page

