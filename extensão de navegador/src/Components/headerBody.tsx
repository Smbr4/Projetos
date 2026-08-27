import extension from "../data/extensions";
import Extension from "./extensionCard";
const headerBody = () => {
    const state = Extension.stateCard();

   return(
   <>
    <main>
        <div className="all">
            <div className="cabecalho">
                <nav>
                    <img src="src/src/assets/img/logo.svg" alt="" />
                    <div className="botoes">
                        <button className="all">All</button>
                        <button className="active">Active</button>
                        <button className="inactive">Inactive</button>
                    </div>
                </nav>
            </div>
        </div>
    </main>
    </>
   )
}

export default headerBody;