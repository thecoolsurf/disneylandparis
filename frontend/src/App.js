import './assets/css/public/app.css';
import './assets/css/public/fonts.css'
import './assets/css/public/bkg-headers.css';
import './assets/css/public/park-disneyland.css';
import './assets/css/public/walt-disney-studios.css';

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* admin */
import { Entities } from './Components/Admin/Tables/Entities.js';
import { Attributes } from './Components/Admin/Tables/Attributes.js';
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
    const uri = window.location.href;
    const main = uri.includes('admin') ? 'main administration' : 'main public';
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
    const entities = Entities();
    const attributes = Attributes();
    return (
        <div className={main}>
            <BrowserRouter>
                <Header />
                <Navigation datas={parkAndUnivers} admin={[entities,attributes]} />
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
                                        <Univers key={'u' + u.uid} id={u.uid} pname={m.pname} uname={u.uname} navigation={navigation} />
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

                    {/* admin ******************************************************** */}

                    <Route path={'/admin/connexion'} element={
                        <AdminConnexion uri={'connexion'} />
                    } />
                    {entities.map((name) => {
                        return (
                            <>
                                <Route key={name} path={'/admin/entity/collection/' + name} element={
                                    <AdminCollection key={'c' + name} nav={entities} uri={name} />
                                } />
                                <Route key={name} path={'/admin/entity/update/' + name} element={
                                    <AdminUpdate key={'u' + name} nav={entities} uri={name} />
                                } />
                                <Route key={name} path={'/admin/entity/insert/' + name} element={
                                    <AdminInsert key={'i' + name} nav={entities} uri={name} />
                                } />
                            </>
                        )
                    })}
                    {attributes.map((name) => {
                        return (
                            <>
                                <Route key={name} path={'/admin/entity/collection/' + name} element={
                                    <AdminCollection key={'c' + name} nav={attributes} uri={name} />
                                } />
                                <Route key={name} path={'/admin/entity/update/' + name} element={
                                    <AdminUpdate key={'u' + name} nav={attributes} uri={name} />
                                } />
                                <Route key={name} path={'/admin/entity/insert/' + name} element={
                                    <AdminInsert key={'i' + name} nav={attributes} uri={name} />
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
