import "./App.css";
import "./Pages/Parks/parks.css";
import "./Pages/Univers/univers.css";
import "./Pages/Attraction/park-disneyland.css";
import "./Pages/Attraction/walt-disney-studios.css";

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

/* components */
import { Header } from './Components/Header/Header.js';
import { Footer } from './Components/Footer/Footer.js';
import { Navigation } from './Components/Navigation/Navigation.js';
/* public routes */
import { Home } from './Pages/Home/Home.js';
import { Parks } from './Pages/Parks/Parks.js';
import { Univers } from './Pages/Univers/Univers.js';
import { Attraction } from './Pages/Attraction/Attraction.js';
import { FindAttractions } from './Pages/Attractions/FindAttractions.js';
/* admin routes */
import { AdminCollection } from "./Pages/Admin/Collection.js";
import { AdminUpdate } from "./Pages/Admin/Update.js";

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
      const dataUniversPark = await fetch('http://localhost:80/nav_univers?id=1');
      const universPark = await dataUniversPark.json();
      setUniversPark(universPark);
      const dataUniversStudio = await fetch('http://localhost:80/nav_univers?id=2');
      const universStudio = await dataUniversStudio.json();
      setUniversStudio(universStudio);
      const dataAttractionsPark = await fetch('http://localhost:80/nav_attractions?id=1');
      const attractionsPark = await dataAttractionsPark.json();
      setAttractionsPark(attractionsPark);
      const dataAttractionsStudio = await fetch('http://localhost:80/nav_attractions?id=2');
      const attractionsStudio = await dataAttractionsStudio.json();
      setAttractionsStudio(attractionsStudio);
    };
    fetchData();
  }, []);
  const allUnivers = [universPark, universStudio];
  const allAttractions = [attractionsPark, attractionsStudio];

  /* *************************************************************************************** */
  /* ADMIN */
  const entities = ['admin', 'attraction', 'park', 'univers', 'user'];
  const [adminCollection, setAdminCollection] = useState([]);
  const [adminUpdate, setAdminUpdate] = useState([]);
  const url = window.location.href;
  const uri = url.includes('admin') ? queryString.split('/')[3] : 'park';
  const id = url.includes('?') ? url.split('?')[1].slice(3,) : 0;
  // console.log('app:',uri,id);
  useEffect(() => {
    const fetchData = async () => {
      const dataAdmin = await fetch(`http://localhost:80/admin/collection/${uri}`);
      const adminCollection = await dataAdmin.json();
      setAdminCollection(adminCollection);
      const dataUpdate = await fetch(`http://localhost:80/admin/update/${uri}?id=${id}`);
      const adminUpdate = await dataUpdate.json();
      setAdminUpdate(adminUpdate);
    };
    fetchData();
  }, []);
  return (
    <div className="main">
      <BrowserRouter>
        <Header bkgHeader={bkgHeader} />
        <Navigation bkgNav={bkgNav} />
        <Routes>
          <Route path="/" element={
            <Home parks={parks} allUnivers={allUnivers} allAttractions={allAttractions} />
          } />
          {parks.map((p) => {
            let univers = (p.id === 1) ? universPark : universStudio;
            return (
              <Route key={p.id} path={'/park-' + p.slug} element={
                <Parks key={p.slug} id={p.id} slugs={params} slug={p.slug} name={p.name} univers={univers} bkgNav={bkgNav} />
              } />
            )
          })}
          {allUnivers.map((all) => {
            return (
              all.map((u) => {
                let route = '/park/' + u.pslug + '/univers/' + u.slug;
                return (
                  <Route key={u.id} path={route} element={
                    <Univers key={u.slug} id={u.id} slugs={params} slug={u.slug} pname={u.pname} uname={u.name} bkgNav={bkgNav} />
                  } />
                )
              })
            )
          })}
          {attractionsPark.map((a) => {
            // console.log(a.pslug,a.uslug,a.slug);
            let route = '/park/' + a.pslug + '/univers/' + a.uslug + '/attraction/' + a.slug;
            return (
              <Route key={a.id} path={route} element={
                <Attraction key={a.slug} id={a.id} slugs={params} pname={a.pname} uname={a.uname} name={a.name} bkgNav={bkgNav} />
              } />
            )
          })}
          {attractionsStudio.map((a) => {
            // console.log(a.pslug,a.uslug,a.slug);
            let route = '/park/' + a.pslug + '/univers/' + a.uslug + '/attraction/' + a.slug;
            return (
              <Route key={a.id} path={route} element={
                <Attraction key={a.slug} id={a.id} slugs={params} pname={a.pname} uname={a.uname} name={a.name} bkgNav={bkgNav} />
              } />
            )
          })}
          <Route key={'findAttractions'} path={'/find/attractions'} element={
            <FindAttractions slugs={params} bkgNav={bkgNav} />
          } />
          {/* ADMIN */}
          {entities.map((e) => {
            return (
              <Route key={'collection-' + e} path={'/admin/collection/' + e} element={
                <AdminCollection entities={entities} datas={adminCollection} uri={e} />
              } />
            )
          })}
          {/* ADMIN */}
          {entities.map((e) => {
            return (
              <Route key={'form-update-' + e} path={'/admin/update/' + e} element={
                <AdminUpdate entities={entities} datas={adminUpdate} uri={e} />
              } />
            )
          })}
          {/* ADMIN */}
          {entities.map((e) => {
            return (
              <Route key={'entity-update-' + e} path={'/admin/update/entity/' + e} element={
                <AdminUpdate entities={entities} datas={adminUpdate} uri={e} />
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
