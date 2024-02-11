import './assets/css/public/app.css';
import './assets/css/public/fonts.css'
import './assets/css/public/bkg-headers.css';
import './assets/css/public/park-disneyland.css';
import './assets/css/public/walt-disney-studios.css';

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* components */
import { Header } from './Components/Public/Document/Header.js';
import { Footer } from './Components/Public/Document/Footer.js';
import { Navigation } from './Components/Public/Document/Navigation.js';
import { LinkToFinder } from './Components/Public/Document/LinkToFinder.js';
import { FilterParkAndUnivers } from './Components/Public/Filters/FilterParkAndUnivers.js';

/* public routes */
import { Home } from './Pages/Public/Home.js';
import { Park } from './Pages/Public/Park.js';
import { Univers } from './Pages/Public/Univers.js';
import { Attraction } from './Pages/Public/Attraction.js';
import { FindAttractions } from './Pages/Public/FindAttractions.js';

/* admin routes */
import { AdminConnexion } from './Pages/Admin/Connexion.js';
import { AdminCollection } from "./Pages/Admin/Collection.js";
import { AdminUpdate } from "./Pages/Admin/Update.js";
import { AdminInsert } from "./Pages/Admin/Insert.js";

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
    const parkAndUnivers = FilterParkAndUnivers(navigation);
    const allAttractions = navigation;
    const entities = ['administrator', 'attraction', 'category', 'evacuation', 'handicap', 'height', 'interest', 'park', 'sensory', 'univers', 'user'];
    return (
        <div className="main">
            <BrowserRouter>
                <Header />
                <Navigation datas={parkAndUnivers} entities={entities} />
                <LinkToFinder />
                <Routes>
                    <Route path="/" element={
                        <Home navigation={navigation} />
                    } />
                    {parkAndUnivers.map((p) => {
                        return (
                            <Route key={'rp' + p.pid} path={p.proute} element={
                                <Park key={'p' + p.pid} id={p.pid} navigation={navigation} name={p.pname} />
                            } />
                        )
                    })}
                    {parkAndUnivers.map((m) => {
                        return (
                            m.univers.map((u) => {
                                return (
                                    <Route key={'ru' + u.uid} path={u.uroute} element={
                                        <Univers key={'u' + u.uid} id={u.uid} pname={m.pname} uname={u.uname} />
                                    } />
                                )
                            })
                        )
                    })}
                    {allAttractions.map((a) => {
                        return (
                            <Route key={'ra' + a.aid} path={a.aroute} element={
                                <Attraction key={'a' + a.aid} id={a.aid} pname={a.pname} uname={a.uname} name={a.aname} />
                            } />
                        )
                    })}
                    <Route key="rf" path={'/find/attractions'} element={
                        <FindAttractions key="f" />
                    } />
                    <Route path={'/admin/connexion'} element={
                        <AdminConnexion uri={'connexion'} />
                    } />
                    {entities.map((slug) => {
                        return (
                            <>
                                <Route key={slug} path={'/admin/entity/collection/' + slug} element={
                                    <AdminCollection key={'c' + slug} nav={entities} uri={slug} />
                                } />
                                <Route key={slug} path={'/admin/entity/update/' + slug} element={
                                    <AdminUpdate key={'u' + slug} nav={entities} uri={slug} />
                                } />
                                <Route key={slug} path={'/admin/entity/insert/' + slug} element={
                                    <AdminInsert key={'i' + slug} nav={entities} uri={slug} />
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
