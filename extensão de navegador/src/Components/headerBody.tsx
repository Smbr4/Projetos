
//Quando alguém usar o componente HeaderBody, ele precisa receber uma prop chamada setView, e essa prop precisa ser uma função com determinado formato.
interface HeaderBodyProps {
    //uma função do React capaz de atualizar um estado cujo valor é 'all' | 'active' | 'inactive'.
    setView: React.Dispatch<
    //tipo do valor que pode ser passado para setView
        React.SetStateAction<'all' | 'active' | 'inactive'>
    >
}

const HeaderBody = ({ setView }: HeaderBodyProps) => {

    return (
        <main>
            <div className="all">
                <div className="cabecalho">
                    <nav>

                        <div className="botoes">

                            <button
                                onClick={() => setView('all')}
                            >
                                All
                            </button>

                            <button
                                onClick={() => setView('active')}
                            >
                                Active
                            </button>

                            <button
                                onClick={() => setView('inactive')}
                            >
                                Inactive
                            </button>

                        </div>

                    </nav>
                </div>
            </div>
        </main>
    )
}


export default HeaderBody;