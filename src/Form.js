import React from 'react';

const Form = ({inputText, setInputText, todos, setTodos}) => {
 

  return (
     <form>
        <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} className="todo-input" />
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
  )
}

export default Form