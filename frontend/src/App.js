import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header/Header.js';
import { Footer } from './Components/Footer/Footer.js';
import { Navigation } from './Components/Navigation/Navigation.js';
import { Home } from './Containers/Home/Home.js';
import { Parks } from './Containers/Parks/Parks.js';
import { Univers } from './Containers/Univers/Univers.js';
import { Attraction } from './Containers/Attraction/Attraction.js';
import "./App.css";

function App() {
  const [parks, setParks] = useState([]);
  const [universPark, setUniversPark] = useState([]);
  const [universStudio, setUniversStudio] = useState([]);
  const [attractionsPark, setAttractionsPark] = useState([]);
  const [attractionsStudio, setAttractionsStudio] = useState([]);

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
      const dataAttractionsPark = await fetch('http://localhost:80/nav_attractions_park');
      const attractionsPark = await dataAttractionsPark.json();
      setAttractionsPark(attractionsPark);
      const dataAttractionsStudio = await fetch('http://localhost:80/nav_attractions_studio');
      const attractionsStudio = await dataAttractionsStudio.json();
      setAttractionsStudio(attractionsStudio);
    };
    fetchData();
  }, []); return (
    <div className="main">
      <BrowserRouter>
        <Header bkgHeader={bkgHeader} />
        <Navigation parks={parks} universPark={universPark} universStudio={universStudio} />
        <Routes>
          <Route path="/" element={<Home parks={parks} />} />
          {parks.map((p) => {
            let univers = (p.slug === 'park-disneyland') ? universPark : universStudio;
            return (
              <Route path={'/park-' + p.slug} element=
                {<Parks id={p.id} slug={p.slug} univers={univers} />} />
            )
          })}
          {universPark.map((up) => {
            return (
              <Route path={'/park/' + up.pslug + '/univers/' + up.slug} element={
                <Univers id={up.id} uslug={up.slug} pslug={up.pslug} name={up.name} pname={up.pname} />
              } />
            )
          })}
          {universStudio.map((us) => {
            return (
              <Route path={'/park/' + us.pslug + '/univers/' + us.slug} element={
                <Univers id={us.id} slug={us.slug} pslug={us.pslug} name={us.name} pname={us.pname} />
              } />
            )
          })}
          {attractionsPark.map((ap) => {
            return (
              <Route path={'/park/' + ap.pslug + '/univers/' + ap.uslug + '/attraction/' + ap.slug} element={
                <Attraction id={ap.id} slug={ap.slug} uslug={ap.uslug} pslug={ap.pslug} name={ap.name} uname={ap.uname} pname={ap.pname} />
              } />
            )
          })}
          {attractionsStudio.map((as) => {
            return (
              <Route path={'/park/' + as.pslug + '/univers/' + as.uslug + '/attraction/' + as.slug} element={
                <Attraction id={as.id} slug={as.slug} uslug={as.uslug} pslug={as.pslug} name={as.name} uname={as.uname} pname={as.pname} />
              } />
            )
          })}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
