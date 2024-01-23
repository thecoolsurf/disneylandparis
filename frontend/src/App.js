import "./App.css";
import "./assets/css/public/parks.css";
import "./assets/css/public/univers.css";
import "./assets/css/public/park-disneyland.css";
import "./assets/css/public/walt-disney-studios.css";

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* components */
import { Header } from './Components/Public/Header.js';
import { Footer } from './Components/Public/Footer.js';
import { Navigation } from './Components/Public/Navigation.js';
/* public routes */
import { Home } from './Pages/Public/Home.js';
import { Parks } from './Pages/Public/Parks.js';
import { Univers } from './Pages/Public/Univers.js';
import { Attraction } from './Pages/Public/Attraction.js';
import { FindAttractions } from './Pages/Public/FindAttractions.js';
/* admin routes */
import { AdminConnexion } from './Pages/Admin/Connexion.js';
import { AdminCollection } from "./Pages/Admin/Collection.js";
import { AdminUpdate } from "./Pages/Admin/Update.js";
import { AdminDelete } from "./Pages/Admin/Delete.js";

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
    const parks = [];
    const univers = [[], []];
    const map = new Map();
    for (const el of navigation) {
      /* park */
      if (!map.has(el.pid)) {
        map.set(el.pid, true);
        parks.push({ pid: el.pid, pslug: el.pslug, pname: el.pname });
      }
      /* univers */
      for (let i = 0; i < parks.length; i++) {
        if (!map.has(el.uslug) && el.pid === i + 1) {
          map.set(el.uslug, true);
          univers[i].push({ uid: el.uid, uslug: el.uslug, uname: el.uname });
        }
      }
    }
    for (let i = 0; i < parks.length; i++) parks[i].univers = univers[i];
    return parks;
  }
  const parkAndUnivers = filterParkAndUnivers();
  const allAttractions = navigation;
  const queryString = window.location.pathname;
  const params = queryString.split('/');
  const bkgHeader = params[4] ? params[4] : params[1] ? params[1] : 'default-header';
  const bkgNav = queryString.includes('walt') ? 'bkg-nav-studio' : 'bkg-nav-park';

  const Admin = ['administrator','attraction','park','univers','user'];
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
            return (
              <Route key={'rp'+p.pid} path={'/park-' + p.pslug} element={
                <Parks key={'p'+p.pid} id={p.pid} slugs={params} name={p.pname} bkgNav={bkgNav} />
              } />
            )
          })}
          {parkAndUnivers.map((m) => {
            return (
              m.univers.map((u) => {
                let route = '/park/' + m.pslug + '/univers/' + u.uslug;
                return (
                  <Route key={'ru'+u.uid} path={route} element={
                    <Univers key={'u'+u.uid} id={u.uid} slugs={params} pname={m.pname} uname={u.uname} bkgNav={bkgNav} />
                  } />
                )
              })
            )
          })}
          {allAttractions.map((a) => {
            let route = '/park/' + a.pslug + '/univers/' + a.uslug + '/attraction/' + a.aslug;
            return (
              <Route key={'ra'+a.aid} path={route} element={
                <Attraction key={'a'+a.aid} id={a.aid} slugs={params} pname={a.pname} uname={a.uname} name={a.aname} bkgNav={bkgNav} />
              } />
            )
          })}

          <Route key="rf" path={'/find/attractions'} element={
            <FindAttractions key="f" slugs={params} bkgNav={bkgNav} />
          } />

          {/* ADMIN */}
          <Route key="connexion" path={'/admin/connexion'} element={
            <AdminConnexion uri={'connexion'} />
          } />
          {Admin.map((slug) => {
              return (
              <>
              <Route key={slug} path={'/admin/entity/collection/' + slug} element={
                <AdminCollection key={'c'+slug} nav={Admin} uri={slug} />
              } />
              <Route key={slug} path={'/admin/entity/form/' + slug} element={
                <AdminUpdate key={'f'+slug} nav={Admin} uri={slug} />
              } />
              <Route key={slug} path={'/admin/entity/update/' + slug} element={
                <AdminUpdate key={'u'+slug} nav={Admin} uri={slug} />
              } />
              <Route key={slug} path={'/admin/entity/delete/' + slug} element={
                <AdminDelete key={'u'+slug} nav={Admin} uri={slug} />
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
