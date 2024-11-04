import React, { useState, useEffect} from "react";
import './ToDoList.css';

function ToDoList() {

    const listaStorage = localStorage.getItem('Lista');

    const [lista, setLista] = useState(listaStorage ? JSON.parse(listaStorage) : []);
    const [novoItem, setNovoItem] = useState("");

    useEffect(() => {
        localStorage.setItem('Lista', JSON.stringify(lista));
    },[lista]);

    function addItem(form) {
        form.preventDefault();
        if (!novoItem) {
            return;
        }
        setLista([...lista, { text: novoItem, isCompleted: false }]);
        setNovoItem("");
        document.getElementById('input-entrada').focus();
    }

    function clicou (index){
        const listaAux = [...lista];
        listaAux[index].isCompleted = !listaAux[index].isCompleted;
        setLista(listaAux)
    }

    function deleta (index){
        const listaAux = [...lista];
        listaAux.splice(index, 1);
        setLista(listaAux);
    }

    function deletaTudo(){
        setLista([]);
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
                <div style={{ textAlign: 'center' }}>
                    {
                        lista.length < 1
                            ?
                            <p style={{ color: 'white'}}>Sem tarefas pendentes. Comece agora</p>
                            :

                            lista.map((item, index) => (
                                <div 
                                key={index}
                                className={item.isCompleted ? "item completo" : "item"}>
                                    <span onClick={()=>{clicou(index)}}>{item.text}</span>
                                    <button onClick={()=>{deleta(index)}} className="del" >Deletar</button>
                                </div>
                            ))

                    }

                    {
                        lista.length > 1 &&
                        <button className="delAll" onClick={()=> {deletaTudo()}}>Apagar tudo</button>
                    }
                </div>
                
            </div>
        </>
    )
}

export default ToDoList;