import React, { useState } from "react";
import './ToDoList.css';

function ToDoList() {

    const [lista, setLista] = useState([]);
    const [novoItem, setNovoItem] = useState("");

    function addItem(form) {
        form.preventDefault();
        if (!novoItem) {
            return;
        }
        setLista([...lista, { text: novoItem, isCompleted: false }]);
        setNovoItem("");
        document.getElementById('input-entrada').focus();
    }

    return (
        <>
            <h1>Meu tarefador</h1>
            <form onSubmit={addItem}>
                <input
                    id="input-entrada"
                    type="text" value={novoItem} onChange={(e) => { setNovoItem(e.target.value) }} placeholder="O que tu quer fazer?" />
                <button className="add">add</button>
            </form>
            <div className="listaTarefas">
                <div>
                    {
                        lista.length < 1
                            ?
                            "Sem tarefas pendentes"
                            :

                            lista.map((item, index) => (
                                <div className="item">
                                    <span>{item.text}</span>
                                    <button className="del">Deletar</button>
                                </div>
                            ))

                    }
                </div>

                <div className="item completo">
                    <span>Faça isso</span>
                    <button className="del">Deletar</button>
                </div>
            </div>
            <button className="delAll">Apagar tudo</button>
        </>
    )
}

export default ToDoList;