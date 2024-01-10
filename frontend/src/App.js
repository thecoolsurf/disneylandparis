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
import { FindAttractions } from './Containers/Attractions/FindAttractions.js';

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
  }, []);
  const allUnivers = [universPark, universStudio];
  const allAttractions = [attractionsPark, attractionsStudio];
  return (
    <div className="main">
      <BrowserRouter>
        <Header bkgHeader={bkgHeader} />
        <Navigation bkgNav={bkgNav} parks={parks} allUnivers={allUnivers} />
        <Routes>
          <Route path="/" element={
            <Home parks={parks} allUnivers={allUnivers} allAttractions={allAttractions} />
          } />
          {parks.map((p) => {
            let univers = (p.id === '1') ? universPark : universStudio;
            return (
              <Route key={p.id} path={'/park-' + p.slug} element={
                <Parks key={p.slug} id={p.id} slugs={params} slug={p.slug} univers={univers} bkgNav={bkgNav} />
              } />
            )
          })}
          {allUnivers.map((all) => {
            return (
              all.map((u) => {
                return (
                  <Route key={u.id} path={'/park/' + u.pslug + '/univers/' + u.slug} element={
                    <Univers key={u.slug} id={u.id} slugs={params} slug={u.slug} pname={u.pname} bkgNav={bkgNav} />
                  } />
                )
              })
            )
          })}
          {allAttractions.map((all) => {
            return (
              all.map((a) => {
                return (
                  <Route key={a.id} path={'/park/' + a.pslug + '/univers/' + a.uslug + '/attraction/' + a.slug} element={
                    <Attraction key={a.slug} id={a.id} slugs={params} pname={a.pname} uname={a.uname} bkgNav={bkgNav} />
                  } />
                )
              })
            )
          })}
          <Route key={'findAttractions'} path={'/find/attractions'} element={
            <FindAttractions slugs={params} bkgNav={bkgNav} />
          } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
