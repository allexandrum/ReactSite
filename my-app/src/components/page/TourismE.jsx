import '../layouts/css/turism_extern.css'

import axios from "axios";
import { useEffect, useState } from "react";

const TourismE = () => {
  const [error, setError] = useState(null);
  const [etourisms, setEtourisms] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/turismuri-externes?populate=Poza")
      .then(({ data }) => setEtourisms(data.data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }

  return (<>
      <section id="teheader">
        <header>
            <p>Călătoriile internaționale ce le poate oferi <span>Jauntie</span></p>
            <hr/>
        </header>
      </section>
      <section id="temain">
        {etourisms.map(({ id, attributes }) => (
          <a href="#" id="a-container" key={id}>
            <div className="div-container">
            <img id='a-img' src={`http://localhost:1337${attributes.Poza.data[0].attributes.url}`} alt=""/>
              <p>{attributes.Denumire}</p>
            </div>
          </a>
        ))}
      </section>
  </>);
};

export default TourismE;
