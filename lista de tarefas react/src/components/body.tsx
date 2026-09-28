import { useState } from "react"
function Body() {
    console.log('renderizou')
    const [itens, setItens] = useState([''])
    const [inputValue, setInput] = useState('')
    function getInput(e: React.SubmitEvent<HTMLInputElement>) {
      setInput(e.target.value)
    }

    function addItem(){
        setItens([...itens, inputValue])
    }
        const listItem = itens.map((item, id: number) => (
            <li key={(id + 1).toString()}>
                {item}
            </li>
        ))


    return (

            <main>
                    <input type="text" onSubmit={(e) => getInput(e)} />
                    <button onClick={() => addItem}>Add</button>
                    <ul>
                        {listItem}
                    </ul>

            </main>
    )
}

export default Body