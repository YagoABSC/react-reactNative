import React from "react";
import './ToDoList.css';

function ToDoList() {
    return (
        <>
            <h1>Meu tarefador</h1>
            <form action="">
                <input type="text" placeholder="O que tu quer fazer?" />
                <button className="add">add</button>
            </form>
            <div className="listaTarefas">
                <div className="item">
                    <span>Faça isso</span>
                    <button>Deletar</button>
                </div>
                <div className="item completo">
                    <span>Faça isso</span>
                    <button>Deletar</button>
                </div>
            </div>
        </>
    )
}

export default ToDoList;