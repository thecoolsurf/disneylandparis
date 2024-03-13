export const BlockPrivileges = (props) => {
    let picto = 'picto';
    let note = '';
    if (props.name && props.name.includes('Sans')) picto = 'picto disable';
    switch (props.label) {
        case 'premieraccess':
            return (
                <li className={props.label}>
                    {props.datas.map((el) => {
                        note = el.description;
                        if (el.name.includes('Sans')) picto = 'picto disable';
                        return (
                            <div className={picto} key={picto}>
                                <span className="fa-stack fa-lg">
                                    <i className="fa fa-square fa-stack-2x"></i>
                                    <i className={'fa ' + props.icon + ' fa-stack-1x fa-inverse'}></i>
                                </span>
                                {el.name}
                            </div>
                        )
                    })}
                    <div className="note">{note}</div>
                </li>
            )
        case 'pmr':
        case 'singlerider':
            return (
                <li className={props.label}>
                    <div className={picto}>
                        <span className="fa-stack fa-lg">
                            <i className="fa fa-square fa-stack-2x"></i>
                            <i className={'fa ' + props.icon + ' fa-stack-1x fa-inverse'}></i>
                        </span>
                        {props.name}
                    </div>
                    <div className="note">{props.description}</div>
                </li>
            )
        case 'photopass':
        default:
            return (
                <li className={props.label}>
                    <div className={picto}>
                        <i className={'fa ' + props.icon}></i>{props.name}
                    </div>
                    <div className="note">{props.description}</div>
                </li>
            )
    }
}