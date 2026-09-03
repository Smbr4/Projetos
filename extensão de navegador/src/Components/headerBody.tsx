import extension from "../data/extensions";
import {useState } from "react"

const HeaderBody = (receive) => {
    const [view, setView] = useState('')


    const id = receive;

    function addClass(e) {
        setView(e);
        const filtredAct = extension.filter((receive.includes(id)))
        const filtredInact = extension.filter(((id) => !receive.includes(id)))

        if (view == 'all') {
            return
        } else if (view == 'active') {
        } else if (view == 'inactive') {

        }
    }

    return (
        <>
            <main>
                <div className="all">
                    <div className="cabecalho">
                        <nav>
                            <img src="src/src/assets/img/logo.svg" alt="" />
                            <div className="botoes">
                                <button className="all" onClick={(e) => addClass(e.target)}>All</button>
                                <button className="active" onClick={(e) => addClass(e.target)}>Active</button>
                                <button className="inactive" onClick={(e) => addClass(e.target)}>Inactive</button>
                            </div>
                        </nav>
                    </div>
                </div>
            </main>
        </>
    )
}

export default HeaderBody;