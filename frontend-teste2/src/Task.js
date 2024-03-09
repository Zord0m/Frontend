import React from "react";

function Task({ task, removeTask}) {
    return (
        <div>
            {task}
            <button onClick={() => removeTask(task)}> Remover</button>
        </div>
    );
}

export default Task;