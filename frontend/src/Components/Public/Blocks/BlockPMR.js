export const BlockPMR = (props) => {
    if (props.pmr) {
        return (
            <li className="pmr">
                <div className="picto">
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-square fa-stack-2x"></i>
                        <i class="fa fa-wheelchair fa-stack-1x fa-inverse"></i>
                    </span>
                    {props.pmr}
                </div>
                <div className="note">
                    Accès spécial dédié aux Personnes à mobilité réduite.<br/>
                    Rampe d'accès fauteuil.
                </div>
            </li>
        )
    }
}