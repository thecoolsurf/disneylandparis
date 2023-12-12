import './home.css';
import { useLocation } from 'react-router-dom';

export const Home = () => {
    const location = useLocation()
    let url = 'Home';
    return (
        <div className="home">
        </div>
    )
}
