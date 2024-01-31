export const THead = (props) => {
    const switchComponentHead = () => {
        switch (props.uri) {
            case 'administrator':
                return (
                    <div className="thead">
                        <div className="id">id</div>
                        <div className="item">lastname</div>
                        <div className="item">firstname</div>
                    </div>
                );
            case 'attraction':
                return (
                    <div className="thead">
                        <div className="id">id</div>
                        <div className="item">name</div>
                    </div>
                );
            case 'evacuation':
            case 'handicap':
            case 'height':
            case 'interest':
            case 'park':
            case 'sensory':
            case 'univers':
                return (
                    <div className="thead">
                        <div className="id">id</div>
                        <div className="item">name</div>
                        <div className="item">description</div>
                    </div>
                )
            case 'user':
                return (
                    <div className="thead">
                        <div className="id">id</div>
                        <div className="item">lastname</div>
                        <div className="item">firstname</div>
                    </div>
                )
        }
    }
    return (
        switchComponentHead()
    )
}