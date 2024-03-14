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
import { BackTop } from './Components/Public/Document/BackTop.js';
import { FilterParkAndUnivers } from './Components/Public/Filters/FilterParkAndUnivers.js';
import { FilterCategory } from './Components/Public/Filters/FilterCategory.js';
/* public routes */
import { Home } from './Pages/Public/Home.js';
import { Park } from './Pages/Public/Park.js';
import { Univers } from './Pages/Public/Univers.js';
import { Attraction } from './Pages/Public/Attraction.js';
import { FindAttractions } from './Pages/Public/FindAttractions.js';
import { Categories } from './Pages/Public/Categories.js';
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
    const categories = FilterCategory('home', navigation);
    const allAttractions = navigation;
    const entities = Entities();
    const attributes = Attributes();
    return (
        <div className={main}>
            <BrowserRouter>
                <Header />
                <Navigation datas={parkAndUnivers} admin={[entities, attributes]} />
                <LinkToFinder />
                <Routes>

                    {/* public ******************************************************** */}

                    <Route path="/" element={
                        <Home navigation={navigation} categories={categories} />
                    } />
                    {categories.map((c,i) => {
                        return (
                            <Route key={i} path={c.croute} element={
                                <Categories id={c.cid} name={c.cname} />
                            } />
                        )
                    })}
                    {parkAndUnivers.map((p,i) => {
                        return (
                            <Route key={i} path={p.proute} element={
                                <Park id={p.pid} navigation={navigation} name={p.pname} />
                            } />
                        )
                    })}
                    {parkAndUnivers.map((pu) => {
                        return (
                            pu.univers.map((u,i) => {
                                return (
                                    <Route key={i} path={u.uroute} element={
                                        <Univers id={u.uid} navigation={navigation} pname={pu.pname} uname={u.uname} />
                                    } />
                                )
                            })
                        )
                    })}
                    {allAttractions.map((a,i) => {
                        return (
                            <Route key={i} path={a.aroute} element={
                                <Attraction id={a.aid} pname={a.pname} uname={a.uname} name={a.aname} />
                            } />
                        )
                    })}
                    <Route path={'/find/attractions'} element={
                        <FindAttractions />
                    } />

                    {/* admin ******************************************************** */}

                    <Route path={'/admin/connexion'} element={
                        <AdminConnexion uri={'connexion'} />
                    } />
                    {entities.map((name,i) => {
                        return (
                            <>
                                <Route key={i} path={'/admin/entity/collection/' + name} element={
                                    <AdminCollection uri={name} />
                                } />
                                <Route key={i} path={'/admin/entity/update/' + name} element={
                                    <AdminUpdate uri={name} />
                                } />
                                <Route key={i} path={'/admin/entity/insert/' + name} element={
                                    <AdminInsert uri={name} />
                                } />
                            </>
                        )
                    })}
                    {attributes.map((name,i) => {
                        return (
                            <>
                                <Route key={i} path={'/admin/entity/collection/' + name} element={
                                    <AdminCollection uri={name} />
                                } />
                                <Route key={i} path={'/admin/entity/update/' + name} element={
                                    <AdminUpdate uri={name} />
                                } />
                                <Route key={i} path={'/admin/entity/insert/' + name} element={
                                    <AdminInsert uri={name} />
                                } />
                            </>
                        )
                    })}
                </Routes>
                <BackTop />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
