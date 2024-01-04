import "./App.css";
import "./Containers/Parks/parks.css";
import "./Containers/Univers/univers.css";
import "./Containers/Attraction/park-disneyland.css";
import "./Containers/Attraction/walt-disney-studios.css";

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './Components/Header/Header.js';
import { Footer } from './Components/Footer/Footer.js';
import { Navigation } from './Components/Navigation/Navigation.js';
import { Home } from './Containers/Home/Home.js';
import { Parks } from './Containers/Parks/Parks.js';
import { Univers } from './Containers/Univers/Univers.js';
import { Attraction } from './Containers/Attraction/Attraction.js';

function App() {
  const [parks, setParks] = useState([]);
  const [universPark, setUniversPark] = useState([]);
  const [universStudio, setUniversStudio] = useState([]);
  const [attractionsPark, setAttractionsPark] = useState([]);
  const [attractionsStudio, setAttractionsStudio] = useState([]);

  const queryString = window.location.pathname;
  const params = queryString.split('/');
  const bkgHeader = params[4] ? params[4] : params[1] ? params[1] : 'default-header';
  const bkgNav = queryString.includes('walt') ? 'bkg-nav-studio' : 'bkg-nav-park';

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
        <Navigation bkgNav={bkgNav} parks={parks} universPark={universPark} universStudio={universStudio} />
        <Routes>
          <Route path="/" element={
            <Home parks={parks} universPark={universPark} universStudio={universStudio} attractionsPark={attractionsPark} attractionsStudio={attractionsStudio} />
          } />
          {parks.map((p) => {
            let univers = (p.slug === 'park-disneyland') ? universPark : universStudio;
            return (
              <Route path={'/park-' + p.slug} element=
                {<Parks id={p.id} slugs={params} slug={p.slug} univers={univers} bkgNav={bkgNav} />} />
            )
          })}
          {universPark.map((up) => {
            return (
              <Route path={'/park/' + up.pslug + '/univers/' + up.slug} element={
                <Univers id={up.id} slugs={params} slug={up.slug} pname={up.pname} bkgNav={bkgNav} />
              } />
            )
          })}
          {universStudio.map((us) => {
            return (
              <Route path={'/park/' + us.pslug + '/univers/' + us.slug} element={
                <Univers id={us.id} slugs={params} slug={us.slug} pname={us.pname} bkgNav={bkgNav} />
              } />
            )
          })}
          {attractionsPark.map((ap) => {
            return (
              <Route path={'/park/' + ap.pslug + '/univers/' + ap.uslug + '/attraction/' + ap.slug} element={
                <Attraction id={ap.id} slugs={params} pname={ap.pname} uname={ap.uname} bkgNav={bkgNav} />
              } />
            )
          })}
          {attractionsStudio.map((as) => {
            return (
              <Route path={'/park/' + as.pslug + '/univers/' + as.uslug + '/attraction/' + as.slug} element={
                <Attraction id={as.id} slugs={params} pname={as.pname} uname={as.uname} bkgNav={bkgNav} />
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
