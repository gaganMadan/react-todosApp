import React, {useState} from "react";
import "./style.css";
import Form from './Form';

const App = () => {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);

    return (
      <>
       <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
      </>
    )
}

export default App
