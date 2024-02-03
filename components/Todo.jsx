import React from 'react'

const todo = ({todo, removeTodo, completeTodo}) => {
    return (
        <div>
            <div className="todo">
                <div className="content" style={{textDecoration: todo.isCompleted ? "line-through": ""}}>
                    <p>{todo.text}</p>
                    <p className="category">({todo.category})</p>
                </div>
                <div>
                    <button className='complete' onClick={()=> completeTodo(todo.id)}>Completar</button>
                    <button className='remove' onClick={()=>removeTodo(todo.id)}>X</button>
                </div>
            </div>
        </div>
    )
}

export default todo