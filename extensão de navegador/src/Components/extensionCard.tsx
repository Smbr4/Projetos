import { useState } from "react";
import extension from "../data/extensions";
import HeaderBody from "./headerBody";

const Extensions = () => {
  const [receiveID, setReceive] = useState<string[]>([])
  const [view, setView] = useState<'all' | 'active' | 'inactive'>('all')
  let [exclude, setExclude] = useState([...extension]);


  interface Extension {
    id: string;
    img: string;
    name: string;
    description: string;
  }

  function receive(e: boolean, key: string) {
    if (e === true) (
      setReceive(prev => [...prev, key])
    )
    else (
      setReceive(receiveID.filter((e) => e != key)
      )
    )
  }


  let filteredExtensions;

  if (view === 'all') {
    filteredExtensions = exclude;
  } else if (view === 'active') {
    filteredExtensions = exclude.filter(
      ext => receiveID.includes(ext.id)
    );
  } else {
    filteredExtensions = exclude.filter(
      ext => !receiveID.includes(ext.id)
    );
  }


  function remove(id: string) {
    setExclude(exclude.filter(
      element =>  element.id !== id 
    ))
  }

  const renderExtension = filteredExtensions.map(
    ({ id, img, name, description, }: Extension) => (

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
            <button className="remover" onClick={() => remove(id)}>Remove</button>
            <label className="switch">
              <input type="checkbox" checked={receiveID.includes(id)} onChange={(e) => receive(e.target.checked, id)} />
              <span className="slider"></span>
            </label>
          </div>
        </div>

      </article>
    ),
  );

  return (
    <>
      <HeaderBody setView={setView} />

      <div className="extensoes">
        {renderExtension}
      </div>

    </>
  )
};

export default Extensions;
