import '../layouts/css/turism_intern.css'

import axios from "axios";
import { useEffect, useState } from "react";

const TourismI = () => {
  const [error, setError] = useState(null);
  const [itourisms, setItourisms] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/turismuri-internes?populate=Poza")
      .then(({ data }) => setItourisms(data.data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }

  return (<>
      <section id="tiheader">
        <header>
            <p>Turismul din Moldova ce ți-l poate oferi <span>Jauntie</span></p>
            <hr/>
        </header>
      </section>
      <section id="timain">
        {itourisms.map(({ id, attributes }) => (
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

export default TourismI;
