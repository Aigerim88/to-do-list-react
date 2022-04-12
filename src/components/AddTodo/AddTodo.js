import React, {useState} from 'react';
import {v4 as uuid} from 'uuid'


function AddTodo({todo, setTodo}) {

    const [value, setValue] = useState('')

    function saveTodo() {
        setTodo (
            [...todo, {
                id: uuid.v4,
                title: value,
                status: true
            }]
        )
        setValue('')
    }

    return (
        <div>
            <input placeholder = 'Введите новую задачу' value = {value} onChange = { (e) => setValue(e.target.value)} />
            <button onClick={saveTodo}>Сохранить</button>
        </div>
    )
}

export default AddTodo;
