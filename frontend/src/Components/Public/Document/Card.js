const Card = (props) => {
  let uri = window.location.href;
  if (uri.includes('park') && !uri.includes('univers')) {
    /* page Park */
    return (
      <a className="card" href={props.item.uroute} alt={props.item.uname}>
        <div className={'img img-' + props.item.uslug}></div>
        <div className="legend">{props.item.uname}</div>
      </a>
    );
  }
  if (uri.includes('univers') && !uri.includes('attraction')) {
    /* page Univers */
    return (
      <a className="card" href={props.item.aroute} alt={props.item.aname}>
        <div className={'img img-' + props.item.aslug}></div>
        <div className="legend">{props.item.aname}</div>
      </a>
    );
  }
  if (uri.includes('attraction')) {
    /* page attraction */
    return (
      <div key={props.item.aid} className="card">
        <div key={props.item.aslug} className={'img img-' + props.item.aslug}></div>
      </div>
    );
  }
};
export default Card;