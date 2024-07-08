import React, {useState} from 'react'

function TodoList(){
    
    const [tasks, setTasks] = useState(["Do laundry", "Clean house", "Make coffee"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value)
    }
    function addTask(){

    }
    function deleteTask(index){

    }
    function moveTaskUp(index){

    }
    function moveTaskDown(index){

    }

    return(
        <div className='todo-list'>
            <h1>To-Do-List</h1>
            
            <div>
                <input 
                type="text"
                placeholder='Enter a task...'
                value={newTask}
                onChange={handleInputChange}/>
            </div>
            <button 
                className='add-button'
                onClick={addTask}>
                Add
            </button>

            <ul>
                {tasks.map((task, index) => 
                <li key={index}>
                    {task}
                </li>)}
            </ul>
        </div>
    );
}
export default TodoList