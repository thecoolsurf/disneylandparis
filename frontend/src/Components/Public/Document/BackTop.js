export const BackTop = () => {
    return (
        <div id="backtop" className="backtop" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}>
            <i className="fa fa-arrow-circle-up"></i>
        </div>
    )
}