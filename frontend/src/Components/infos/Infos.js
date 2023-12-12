export const Infos = (props) => {
    return (
        <div className="infos">
            <div className="group">
                <div className="legend">Name:</div>
                <div className="info">{props.datas.name}</div>
                <div className="legend">Alternetes name:</div>
                <div className="info">{props.datas.alternate_names.map((el, i) => props.datas.alternate_names[i])}</div>
                <div className="legend">Wand core:</div>
                <div className="info">{props.datas.wand.core}</div>
                <div className="legend">Wand length:</div>
                <div className="info">{props.datas.wand.length}</div>
                <div className="legend">Wand wood:</div>
                <div className="info">{props.datas.wand.wood}</div>
                <div className="legend">Patronus:</div>
                <div className="info">{props.datas.patronus}</div>
                <div className="legend">Ancestry:</div>
                <div className="info">{props.datas.ancestry}</div>
                <div className="legend">House:</div>
                <div className="info">{props.datas.house}</div>
                <div className="legend">Species:</div>
                <div className="info">{props.datas.species}</div>
            </div>
            <div className="group">
                <h2></h2>
                <div className="legend">Date of birth:</div>
                <div className="info">{props.datas.dateOfBirth}</div>
                <div className="legend">Gender:</div>
                <div className="info">{props.datas.gender}</div>
                <div className="legend">Eye color:</div>
                <div className="info">{props.datas.eyeColour}</div>
                <div className="legend">Hair color:</div>
                <div className="info">{props.datas.hairColour}</div>
            </div>
        </div>
    )
}