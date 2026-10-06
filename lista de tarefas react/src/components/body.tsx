import React, { useState } from "react"
function Body() {
    const [itens, setItens] = useState([''])
    const [inputValue, setInput] = useState('')
    const [key, setKey] = useState()

    function addItem(){
        setItens([...itens, inputValue])
    }

    const listItem = itens.map((item, id) => (
            <li key={(itens.id)}>
                {item}
                <button type="button" onClick={}>Remover</button>
            </li>
    ))

    function hideItem(id){
    
    }
    const formList = (event: React.ChangeEvent<HTMLInputElement>) =>{
        event.preventDefault();
        setInput(event.target.value)
    }

    return (
            <form action="" onSubmit={() => formList}>
                <input type="text"/>
                <button onClick={addItem} type="button">Add</button>
                <ul>
                    {listItem}
                </ul>
            </form>
    )
}

export default Body