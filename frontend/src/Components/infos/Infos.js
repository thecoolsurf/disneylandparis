export const Infos = (props) => {
    return (
        <div className="infos">
            {props.datas.map((el) => {
                return (
                    <>
                        <h1>{el.name}</h1>
                        <p>{el.description}</p>
                    </>
                )
            })}
        </div>
    )
}