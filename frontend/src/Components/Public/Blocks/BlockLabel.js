export const BlockLabel = (props) => {
    switch (props.label) {
        case 'Categorie':
        case 'Public':
        case 'Durée':
        case 'Hauteur':
        case 'Longueur':
        case 'Vitesse':
        case 'Capacité':
        case 'Evacuation':
            return (
                <li className="items-2">
                    <i class={'icon ' + props.icon} aria-hidden="true"></i>
                    <div className="item">
                        <div className="label">{props.label}</div>
                        <div className="name">{props.name}</div>
                    </div>
                </li>
            )
        case 'Interet':
            return (
                <li className="items-2">
                    <i class={'icon ' + props.icon} aria-hidden="true"></i>
                    <div className="item">
                        <div className="label">{props.label}</div>
                        <div className="name">{props.description}</div>
                    </div>
                </li>
            )
        case 'Taille':
            return (
                <li className="items-2">
                    <i class={'icon ' + props.icon} aria-hidden="true"></i>
                    <div className="item">
                        <div className="label">{props.name}</div>
                        <div className="name">{props.description}</div>
                    </div>
                </li>
            )
        default:
            return (
                <li className="items-2">
                    <i class={'icon ' + props.icon} aria-hidden="true"></i>
                    <div className="item">
                        <div className="label">{props.name}</div>
                        <div className="name">{props.description}</div>
                    </div>
                </li>
            )
    }
}