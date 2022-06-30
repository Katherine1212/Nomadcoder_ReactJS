import { useState, useEffect } from 'react';
function TODO_1() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return;
        }
        setToDos((currentArray) => [toDo, ...currentArray]);
        setToDo("");
    }
    console.log(toDos);
    return (
        <div>
            <h1>My TODOS ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder='Write your to  do!'
                    value={toDo}
                    onChange={onChange}
                />
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
}

export default TODO_1;
