const Card = (props) => {
  const uri = window.location.href;
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
    const parent = uri.includes('wal') ? 'studio' : 'park';
    const folder = props.item.aslug;
    const images = require.context(`../../../assets/images/attractions/`, true, /[park/adventure-isle/img]/) ;
    const imageList = images.keys().map(image => images(image));
    return (
      <div className="img-collection">
        {imageList.map((src) => {
          return (<img src={src} />)
        })}
      </div>
    );
  }
};
export default Card;