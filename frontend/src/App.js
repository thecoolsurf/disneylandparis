import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header/Header.js';
import { Footer } from './Components/Footer/Footer.js';
import { Navigation } from './Components/Navigation/Navigation.js';
import { Home } from './Containers/Home/Home.js';
import { Attractions } from './Containers/Attractions/Attractions.js';
import { Attraction } from './Containers/Attraction/Attraction.js';
import "./App.css";

function App() {
  const arrMenus = [
    { name: 'Adventureland', url: 'adventureland' },
    { name: 'Discoveryland', url: 'discoveryland' },
    { name: 'Fantasyland', url: 'fantasyland' },
    { name: 'Frontierland', url: 'frontierland' },
    { name: 'Main Street', url: 'main-street' }
  ];
  const [menus, setMenus] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const datasMenus = await fetch('http://localhost:80');
      const menus = await datasMenus.json();
      setMenus(menus);
    };
    fetchData();
  }, []);
  return (
    <div className="main">
      <pre>{JSON.stringify(menus)}</pre>
      <BrowserRouter>
        <Navigation menus={arrMenus} />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {arrMenus.map((item) => {
            return (
              <Route path={item.name} element={<Attractions url={item.url} />} />
            )
          })}
          <Route path="/Attraction/:id" element={<Attraction />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
