import { useState } from "react";
import extension from "../data/extensions";
import HeaderBody from "./headerBody";

const Extensions = () => {
  const [receiveID, setReceive] = useState<string[]>([])
  const [view, setView] = useState<'all' | 'active' | 'inactive'>('all')
  function receive(e: boolean, key: string) {

    if (e === true) (
      setReceive(prev => [...prev, key])
    )
    else (
      setReceive(receiveID.filter((e) => e != key)
      )
    )
  }

  interface Extension {
    id: string;
    img: string;
    name: string;
    description: string;
  }

  let filteredExtensions;

  if (view === 'all') {
    filteredExtensions = extension;
  } else if (view === 'active') {
    filteredExtensions = extension.filter(
      ext => receiveID.includes(ext.id)
    );
  } else {
    filteredExtensions = extension.filter(
      ext => !receiveID.includes(ext.id)
    );
  }
  const renderExtension = filteredExtensions.map(
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
              <input type="checkbox" checked= {receiveID.includes(id)} onChange={(e) => receive(e.target.checked, id)} />
              <span className="slider"></span>
            </label>
          </div>
        </div>

      </article>
    ),
  );

  return (
    <>
      <HeaderBody setView={setView}/>

      <div className="extensoes">
        {renderExtension}
      </div>

    </>
  )
};

export default Extensions;
