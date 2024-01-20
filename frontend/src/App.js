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
  const [navigation, setNavigation] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const dataNavigation = await fetch('http://localhost:80/navigation');
      const navigation = await dataNavigation.json();
      setNavigation(navigation);
    };
    fetchData();
  }, []);

  function filterParkAndUnivers() {
    const park = [];
    const univers = [[], []];
    const map = new Map();
    for (const el of navigation) {
      if (!map.has(el.pid)) {
        map.set(el.pid, true);
        park.push({ pid: el.pid, pslug: el.pslug, pname: el.pname });
      }
      for (let i = 0; i < park.length; i++) {
        if (!map.has(el.uslug) && el.pid === i + 1) {
          map.set(el.uslug, true);
          univers[i].push({ uid: el.uid, uslug: el.uslug, uname: el.uname });
        }
      }
    }
    for (let i = 0; i < park.length; i++) park[i].univers = univers[i];
    return park;
  }
  const parkAndUnivers = filterParkAndUnivers();
  const allAttractions = navigation;
  const queryString = window.location.pathname;
  const params = queryString.split('/');
  const bkgHeader = params[4] ? params[4] : params[1] ? params[1] : 'default-header';
  const bkgNav = queryString.includes('walt') ? 'bkg-nav-studio' : 'bkg-nav-park';

  const entities = ['admin', 'attraction', 'park', 'univers', 'user'];
  return (
    <div className="main">
      <BrowserRouter>
        <Header bkgHeader={bkgHeader} />
        <Navigation datas={parkAndUnivers} bkgNav={bkgNav} />
        <Routes>
          <Route path="/" element={
            <Home />
          } />
          {parkAndUnivers.map((p) => {
            let univers = (p.pid === 1) ? parkAndUnivers[0].univers : parkAndUnivers[1].univers;
            return (
              <Route key={p.pid} path={'/park-' + p.pslug} element={
                <Parks key={p.pid} id={p.pid} slugs={params} slug={p.pslug} name={p.pname} univers={univers} bkgNav={bkgNav} />
              } />
            )
          })}
          {parkAndUnivers.map((m) => {
            return (
              m.univers.map((u) => {
                let route = '/park/' + m.pslug + '/univers/' + u.uslug;
                return (
                  <Route key={u.uid} path={route} element={
                    <Univers key={u.uid} id={u.uid} slugs={params} slug={u.uslug} pname={u.pname} uname={u.uname} bkgNav={bkgNav} />
                  } />
                )
              })
            )
          })}
          {allAttractions.map((a) => {
            let route = '/park/' + a.pslug + '/univers/' + a.uslug + '/attraction/' + a.aslug;
            return (
              <Route key={a.aid} path={route} element={
                <Attraction key={a.aid} id={a.aid} slugs={params} pname={a.pname} uname={a.uname} name={a.aname} bkgNav={bkgNav} />
              } />
            )
          })}

          <Route key={'findAttractions'} path={'/find/attractions'} element={
            <FindAttractions slugs={params} bkgNav={bkgNav} />
          } />

          {/* ADMIN */}
          {entities.map((e) => {
            return (
              <>
              <Route key={'collection-' + e} path={'/admin/collection/' + e} element={
                <AdminCollection key={'c'+e} entities={entities} uri={e} />
              } />
              <Route key={'form-update-' + e} path={'/admin/update/' + e} element={
                <AdminUpdate key={'f'+e} entities={entities} uri={e} />
              } />
              <Route key={'entity-update-' + e} path={'/admin/update/entity/' + e} element={
                <AdminUpdate key={'u'+e} entities={entities} uri={e} />
              } />
              </>
            )
          })}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
