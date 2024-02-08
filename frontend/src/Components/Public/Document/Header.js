import '../../../assets/css/public/header.css';

export const Header = (props) => {
    const css = window.location.href.includes('admin') ? 'admin' : 'img';
    return (
        <header className={'header '+css+'-'+props.bkgHeader}>
            <div className="block-title">
            
                <a className="title" href="/" alt="Home">
                    <div className="item1">Rencontre ta</div>
                    <div className="item2"><div className="mickey"></div>souris</div>
                    <div className="item3">à Disneyland Paris</div>
                </a>
            </div>
        </header>
    )
}
