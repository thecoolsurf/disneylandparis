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
                return (
                    <div className="thead">
                        <div className="id">id</div>
                        <div className="item">level</div>
                        <div className="item">description</div>
                    </div>
                );
            case 'handicap':
                return (
                    <div className="thead">
                        <div className="id">id</div>
                        <div className="item">description</div>
                    </div>
                );

            case 'height':
                return (
                    <div className="thead">
                        <div className="id">id</div>
                        <div className="item">description</div>
                    </div>
                );

            case 'interest':
                return (
                    <div className="thead">
                        <div className="id">id</div>
                        <div className="item">name</div>
                        <div className="item">description</div>
                    </div>
                );
            case 'park':
                return (
                    <div className="thead">
                        <div className="id">id</div>
                        <div className="item">name</div>
                        <div className="item">description</div>
                    </div>
                )
            case 'sensory':
                return (
                    <div className="thead">
                        <div className="id">id</div>
                        <div className="item">level</div>
                        <div className="item">description</div>
                    </div>
                )
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