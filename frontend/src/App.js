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
  const [menus, setMenus] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const datasMenus = await fetch('http://localhost:80/park');
      const menus = await datasMenus.json();
      setMenus(menus);
      const datasCategory = await fetch('http://localhost:80/category');
      const category = await datasCategory.json();
      setCategory(category);
    };
    fetchData();
  }, []);
  return (
    <div className="main">
      <pre>{JSON.stringify(category)}</pre>
      <BrowserRouter>
        <Navigation menus={menus} />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {menus.map((item) => {
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
