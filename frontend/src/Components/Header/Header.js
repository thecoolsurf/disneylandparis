import './header.css';

export const Header = (props) => {
    return (
        <header className={'header bkg-'+props.bkgHeader}>
            <div className="block">
                <a className="title" href="/" alt="Disneyland Paris">
                    Disneyland
                    <span className="paris">PARIS</span>
                </a>
                <div className="baseline">Your Favourite Attractions in one Click.</div>
            </div>
        </header>
    )
}
