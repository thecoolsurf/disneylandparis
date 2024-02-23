export const BlockPremierAccess = (props) => {
    console.log(props.premieraccess)
    if (props.premieraccess) {
        return (
            <li className="premieraccess">
                <div className="picto">
                <span class="fa-stack fa-lg">
                        <i class="fa fa-square fa-stack-2x"></i>
                        <i class="fa fa-rocket fa-stack-1x fa-inverse"></i>
                    </span>
                    {props.premieraccess}
                </div>
                <div className="note">Service de photographes Disney PhotoPass
                    ou de photos dans les attractions équipées.
                </div>
            </li>
        )
    }
}