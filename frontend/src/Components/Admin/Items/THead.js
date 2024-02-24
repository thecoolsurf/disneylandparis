export const THead = (props) => {
    const switchComponentHead = () => {
        switch (props.uri) {
            case 'administrator':
            case 'user':
                return (
                    <div className="thead">
                        <div className="id">id</div>
                        <div className="item">lastname</div>
                        <div className="item">firstname</div>
                    </div>
                );
            case 'park':
            case 'univers':
                    return (
                    <div className="thead">
                        <div className="id">id</div>
                        <div className="item">name</div>
                        <div className="item">route</div>
                    </div>
                );
            case 'attraction':
                    return (
                    <div className="thead">
                        <div className="id">id</div>
                        <div className="item">name</div>
                        <div className="item">category</div>
                        <div className="item">park</div>
                        <div className="item">univers</div>
                    </div>
                );
            case 'category':
            case 'evacuation':
            case 'handicap':
            case 'height':
            case 'interest':
            case 'photopass':
            case 'pmr':
            case 'premieraccess':
            case 'public':
            case 'sensory':
            case 'singlerider':
                    return (
                    <div className="thead">
                        <div className="id">id</div>
                        <div className="item">name</div>
                    </div>
                )
            default:
                return (
                    <div className="thead">
                        <div className="id">id</div>
                        <div className="item">name</div>
                    </div>
                )
        }
    }
    return (
        switchComponentHead()
    )
}