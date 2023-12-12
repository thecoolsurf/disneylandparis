import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header/Header.js';
import { Footer } from './Components/Footer/Footer.js';
import { Navigation } from './Components/Navigation/Navigation.js';
import { Home } from './Containers/Home/Home.js';
import { Attractions } from './Containers/Attractions/Attractions.js';
import { Attraction } from './Containers/Attraction/Attraction.js';
import "./App.css";

function App() {
  const menus = [
    {name:'Adventureland',url:'adventureland'},
    {name:'Discoveryland',url:'discoveryland'},
    {name:'Fantasyland',url:'fantasyland'},
    {name:'Frontierland',url:'frontierland'},
    {name:'Main Street',url:'main-street'}
  ];
  
  return (
  <div className="main">
      <BrowserRouter>
        <Navigation menus={menus} />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {menus.map((item)=>{ 
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
