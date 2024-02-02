import '../../../assets/css/public/header.css';

export const Header = (props) => {
    return (
        <header className={'header img-'+props.bkgHeader}>
            <div className="block-title">
                <a className="title" href="/" alt="Home">
                    <div className="item1">Rencontre ta</div>
                    <div className="item2">Souris</div>
                    <div className="item3">à Disneyland Paris</div>
                </a>
            </div>
        </header>
    )
}
