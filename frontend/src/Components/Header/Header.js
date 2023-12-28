import './header.css';

export const Header = () => {
    return (
        <header className="header">
            <div className="block">
                <a className="title" href="/" alt="Disneyland Paris">
                    DisneylandParis
                </a>
                <div className="baseline">Your Favourite Attractions in one Click.</div>
            </div>
        </header>
    )
}
