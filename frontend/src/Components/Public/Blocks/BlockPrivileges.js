export const BlockPrivileges = (props) => {
    const picto = props.name.includes('Sans') ? 'picto disable' : 'picto';
    switch (props.label) {
        case 'photopass':
            return (
                <li className={props.label}>
                    <div className={picto}>
                        <i class={'fa ' + props.icon}></i>{props.name}
                    </div>
                    <div className="note">{props.description}</div>
                </li>
            )
        case 'pmr':
        case 'singlerider':
        case 'premieraccess':
            return (
                <li className={props.label}>
                    <div className={picto}>
                        <span class="fa-stack fa-lg">
                            <i class="fa fa-square fa-stack-2x"></i>
                            <i class={'fa ' + props.icon + ' fa-stack-1x fa-inverse'}></i>
                        </span>
                        {props.name}
                    </div>
                    <div className="note">{props.description}</div>
                </li>
            )
        default:
            return (
                <li className={props.label}>
                    <div className="picto">
                        <i class={'fa ' + props.icon}></i>{props.name}
                    </div>
                    <div className="note">{props.description}</div>
                </li>
            )
    }
}