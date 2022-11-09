import "../styles/Body.css";

let Body = () => {
  return (
    <div className="container">
      <div className="grid-separator">
        <div className="detail-info">
          <h3>
            ¡Hola! mi nombre es <b>Gastón Bernardez</b> <br />
            Desarrolador Front-End
          </h3>
          <span></span>
          <button>Descargar CV</button>
        </div>
        <div>Foto loco</div>
      </div>
    </div>
  );
};

export default Body;
