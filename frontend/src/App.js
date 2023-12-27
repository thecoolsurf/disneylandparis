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
  const [parks, setParks] = useState([]);
  const [universPark, setUniversPark] = useState([]);
  const [universStudio, setUniversStudio] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const dataParks = await fetch('http://localhost:80/parks');
      const parks = await dataParks.json();
      setParks(parks);
      const dataUniversPark = await fetch('http://localhost:80/univers_park');
      const universPark = await dataUniversPark.json();
      setUniversPark(universPark);
      const dataUniversStudio = await fetch('http://localhost:80/univers_studio');
      const universStudio = await dataUniversStudio.json();
      setUniversStudio(universStudio);
    };
    fetchData();
  }, []); return (
    <div className="main">
      <BrowserRouter>
        <Navigation parks={parks} universPark={universPark} universStudio={universStudio} />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {parks.map((item) => {
            return (
              <Route path={'/'+item.slug} element={<Attractions url={item.slug} />} />
            )
          })}
          <Route path="/attraction/:url" element={<Attraction />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
