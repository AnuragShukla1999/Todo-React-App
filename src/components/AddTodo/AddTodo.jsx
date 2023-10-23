import { useState } from "react";

function AddTodo({updateList}) {
    // {updateList} props coming from App.jsx  <AddTodo updateList={(todo) => setList([
     //       ...list, {id: (list.length + 1), todoData: todo, finished: false}
      //  ])} />


    const [inputText, setInputText] = useState("");

    return (
        <div>
            <input 
                type="text"
                value={inputText}
                placeholder="Add Your next Todo"
                onChange={e => setInputText(e.target.value)}
            />
            <button onClick={() => updateList(inputText)}>Add</button>
        </div>
    )
}

export default AddTodo;