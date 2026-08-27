import extension from "../data/extensions";

const Extensions = () => {
  const input = document.querySelector('#check') as HTMLInputElement;
  function hideCard(id){
    if(input.checked === true){
      id ==
    }
  }


  interface Extension {
    id: string | number;
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
              <input type="checkbox"  id="check"/>
              <span className="slider"></span>
            </label>
          </div>
        </div>

      </article>  
    ),
  );

  return (
    <>

        <div className="extensoes">
          {renderExtension}
        </div>

    </>
  )
};

export default Extensions;
