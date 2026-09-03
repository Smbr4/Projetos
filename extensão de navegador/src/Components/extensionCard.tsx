import { useState } from "react";
import extension from "../data/extensions";
import HeaderBody from "./headerBody";

const Extensions = () => {
  const [receiveID, setReceive] = useState([''])

  function receive(e:boolean, key: string) {

    if (e === true) (
      setReceive([...receiveID,  key])
    )
    else (
      setReceive(receiveID.filter((e)=> e != key)
    )
    )
  }

  interface Extension {
    id: string;
    img: string;
    name: string;
    description: string;
  }

  const renderExtension = extension.map(
    ({ id, img, name, description }: Extension) => (

      <article key={id}>
        <div className="cabecalho-card">
          <div className="card-info">
            <img src={img} alt={name} />
            <div className="texto">
              <h2>{name}</h2>
              <p><small>{description}</small></p>
            </div>
          </div>
          <div className="card-botoes">
            <button className="remover">Remove</button>
            <label className="switch">
              <input type="checkbox"  onChange={(e)=> receive(e.target.checked, id)}/>
              <span className="slider"></span>
            </label>
          </div>
        </div>

      </article>
    ),
  );

  return (
    <>
    <div>
      <HeaderBody receiveID ={receiveID}/>

    </div>
      <div className="extensoes">
        {renderExtension}

      </div>

    </>
  )
};

export default Extensions;
