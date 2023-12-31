import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Header } from './Components/Header/Header.js';
import { Footer } from './Components/Footer/Footer.js';
import { Navigation } from './Components/Navigation/Navigation.js';
import { Home } from './Containers/Home/Home.js';
import { Parks } from './Containers/Parks/Parks.js';
import { Univers } from './Containers/Univers/Univers.js';
import "./App.css";

function App() {
  const [parks, setParks] = useState([]);
  const [universPark, setUniversPark] = useState([]);
  const [universStudio, setUniversStudio] = useState([]);

  const queryString = window.location.pathname;
  const params = queryString.split('/');
  const bkgHeader = params[4] ? params[4].toLowerCase() : params[1] ? params[1].toLowerCase() : 'bkg-default-header';

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
        <Header bkgHeader={bkgHeader} />
        <Navigation parks={parks} universPark={universPark} universStudio={universStudio} />
        <Routes>
          <Route path="/" element={<Home parks={parks} />} />
          {parks.map((el) => {
            return (
              <Route path={'/park-'+el.slug} element={<Parks id={el.id} slug={el.slug} />} />
            )
          })}
          {universPark.map((el) => {
            return (
              <Route path={'/park/'+el.pslug + '/univers/' + el.slug} element={<Univers name={el.name} slug={el.slug} id={el.id} pname={el.pname} />} />
            )
          })}
          {universStudio.map((el) => {
            return (
              <Route path={'/park/'+el.pslug + '/univers/' + el.slug} element={<Univers name={el.name} slug={el.slug} id={el.id} pname={el.pname} />} />
            )
          })}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
