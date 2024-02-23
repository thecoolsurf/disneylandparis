export const BlockPrivileges = (props) => {
    if (props.label === 'photopass') {
        return (
            <li className="photopass">
                <div className="picto">
                    <i class="fa fa-camera"></i>{props.name}
                </div>
                <div className="note">Service de photographes Disney PhotoPass
                    ou de photos dans les attractions équipées.
                </div>
            </li>
        )
    }
    if (props.label === 'pmr') {
        return (
            <li className="pmr">
                <div className="picto">
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-square fa-stack-2x"></i>
                        <i class="fa fa-wheelchair fa-stack-1x fa-inverse"></i>
                    </span>
                    {props.name}
                </div>
                <div className="note">
                    Accès spécial dédié aux Personnes à mobilité réduite.<br />
                    Rampe d'accès fauteuil.
                </div>
            </li>
        )
    }
    if (props.label === 'premieraccess') {
        return (
            <li className="premieraccess">
                <div className="picto">
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-square fa-stack-2x"></i>
                        <i class="fa fa-rocket fa-stack-1x fa-inverse"></i>
                    </span>
                    {props.name}
                </div>
                <div className="note">Service de photographes Disney PhotoPass
                    ou de photos dans les attractions équipées.
                </div>
            </li>
        )
    }
}