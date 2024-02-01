const Card = (props) => {
  let uri = props.slugs.toString();
  let path = uri.replaceAll(',', '/');
  if (props.slugs.length === 5) {
    /* page Univers */
    // console.log('univers', props.slugs.length);
    return (
      <a className="card" href={path + '/attraction/' + props.item.aslug} alt={props.item.aname}>
        <div className={'img img-' + props.item.aslug}></div>
        <div className="legend">{props.item.aname}</div>
      </a>
    );
  } else if (props.slugs.length === 2) {
    /* page Park */
    // console.log('park', props.slugs.length);
    return (
      <a className="card" href={'/park/' + path.slice(6,) + '/univers/' + props.item.uslug} alt={props.item.uname}>
        <div className={'img img-' + props.item.uslug}></div>
        <div className="legend">{props.item.uname}</div>
      </a>
    );
  } else {
    /* page attraction */
    // console.log('attraction', props.slugs.length);
    return (
      <div key={props.item.aid} className="card">
        <div key={props.item.aslug} className={'img img-' + props.item.aslug}></div>
      </div>
    );
  }
};
export default Card;