import React, {useState} from 'react'

function TodoList(){
    
    const [tasks, setTasks] = useState(["Do laundry", "Clean house", "Make coffee"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value)
    }
    function addTask(){
        if(newTask.trim() !== ""){
            const newTask = document.getElementById("taskInput").value;
            document.getElementById("taskInput").value = "";

            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }
    function deleteTask(index){
        setTasks(tasks.filter((_, i) => i !== index));
    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index){
        if(index < tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <div className='todo-list'>
            <h1>To-Do-List</h1>
            
            <div>
                <input 
                type="text"
                id='taskInput'
                placeholder='Enter a task...'
                value={newTask}
                onChange={handleInputChange}/>
                <button 
                    className='add-button'
                    onClick={addTask}>
                    Add
                </button>
            </div>
            

            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button className='delete-button' onClick={() => deleteTask(index)}>
                            delete
                        </button>
                        <button className='move-button' onClick={() => moveTaskUp(index)}>
                            ⬆
                        </button>
                        <button className='move-button' onClick={() => moveTaskDown(index)}>
                            ⬇
                        </button>
                    </li>
                )}
            </ol>
        </div>
    );
}
export default TodoList