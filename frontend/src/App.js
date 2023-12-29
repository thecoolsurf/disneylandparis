import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Header } from './Components/Header/Header.js';
import { Footer } from './Components/Footer/Footer.js';
import { Navigation } from './Components/Navigation/Navigation.js';
import { Home } from './Containers/Home/Home.js';
import { Park } from './Containers/Park/Park.js';
import { Univers } from './Containers/Univers/Univers.js';
import "./App.css";

function App() {
  const [parks, setParks] = useState([]);
  const [universPark, setUniversPark] = useState([]);
  const [universStudio, setUniversStudio] = useState([]);

  const queryString = window.location.pathname;
  const params = queryString.split('/');
  const bkgHeader = params[3] ? params[3].toLowerCase() : params[1] ? params[1].toLowerCase() : 'park-disneyland';

  useEffect(() => {
    const fetchData = async () => {
      const dataParks = await fetch('http://localhost:80/nav_parks');
      const parks = await dataParks.json();
      setParks(parks);
      const dataUniversPark = await fetch('http://localhost:80/nav_univers_park');
      const universPark = await dataUniversPark.json();
      setUniversPark(universPark);
      const dataUniversStudio = await fetch('http://localhost:80/nav_univers_studio');
      const universStudio = await dataUniversStudio.json();
      setUniversStudio(universStudio);
    };
    fetchData();
  }, []); return (
    <div className="main">
      <BrowserRouter>
        <Navigation parks={parks} universPark={universPark} universStudio={universStudio} />
        <Header bkgHeader={bkgHeader} />
        <Routes>
          <Route path="/" element={<Home parks={parks} />} />
          {parks.map((el) => {
            return (
              <Route path={'park/'+el.slug} element={<Park id={el.id} />} />
            )
          })}
          {universPark.map((el) => {
            return (
              <Route path={el.pslug + '/univers/' + el.slug} element={<Univers name={el.name} slug={el.slug} id_univ={el.id} pname={el.pname} />} />
            )
          })}
          {universStudio.map((el) => {
            return (
              <Route path={el.pslug + '/univers/' + el.slug} element={<Univers name={el.name} slug={el.slug} id_univ={el.id} pname={el.pname} />} />
            )
          })}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
