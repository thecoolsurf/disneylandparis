import '../../../assets/css/public/header.css';

export const Header = () => {
    const uri = window.location.href;
    const params = uri.split('/');
    const bkgHeader = params[5] ? params[5] : params[3] ? params[3] : 'default-header';
    return (
        <header className={'header img-' + bkgHeader}>
            <div className="block-title">
                <a className="title" href="/" alt="Home">
                    <div className="item1">Rencontre<div className="mickey"></div></div>
                    <div className="item2">ta Souris</div>
                    <div className="item3">à Disneyland Paris</div>
                </a>
            </div>
        </header>
    )
}
