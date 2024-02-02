import '../../../assets/css/public/footer.css';

export const Footer = () => {
    let email = 'hdouin@free.fr';
    let mobile = '06.17.70.42.75';
    let address = '33 rue Claude Tillier 75012 PARIS';
    let web = 'http://h.douin.free.fr';
    let linkedin = '#';
    let facebook = '#';
    let twitter = '#';
    return (
        <footer className="footer">
            <ul>
                <li>Hubert DOUIN - Webmaster</li>
                <li>
                    <i className="fa fa-map-marker"></i>
                    {address}
                </li>
                <li>
                    <i className="fa fa fa-phone" aria-hidden="true"></i>
                    <a href={'tel:'+mobile} alt="Mobile">{mobile}</a>
                </li>
            </ul>
            <ul>
                <li>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <a href={'mailto:'+email+'?object=Demande infos'} alt="email">{email}</a>
                </li>
                <li>
                    <i className="fa fa-link" aria-hidden="true"></i>
                    <a href={web} target="_blank" rel="noreferrer" alt="DOUIN Hubert">{web}</a>
                </li>
            </ul>
            <ul>
                <li>
                    <i className="fa fa-brands fa-facebook"></i>
                    <a href={facebook} target="_blank" rel="noreferrer" alt="Facebook">Facebook</a>
                </li>
                <li>
                    <i className="fa fa-brands fa-twitter"></i>
                    <a href={twitter} target="_blank" rel="noreferrer" alt="Twitter">Twitter</a>
                </li>
                <li>
                    <i className="fa fa-brands fa-linkedin"></i>
                    <a href={linkedin} target="_blank" rel="noreferrer" alt="Linkedin">Linkedin</a>
                </li>
            </ul>
        </footer>
    )
}

