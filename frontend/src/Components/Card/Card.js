const Card = (props) => {
  let uri = props.slugs.toString();
  let path = uri.replaceAll(',', '/');
  if (props.slugs.length === 5) {
    // console.log('univers', props.slugs.length);
    return (
      <a className="card" href={path + '/attraction/' + props.item.slug} alt={props.item.name}>
        <div className={'img img-' + props.item.slug}></div>
        <div className="legend">{props.item.name}</div>
      </a>
    );
  } else if (props.slugs.length === 2) {
    // console.log('park', props.slugs.length);
    return (
      <a className="card" href={'/park/' + path.slice(6,) + '/univers/' + props.item.slug} alt={props.item.name}>
        <div className={'img img-' + props.item.slug}></div>
        <div className="legend">{props.item.name}</div>
      </a>
    );
  } else {
    // console.log('attraction', props.slugs.length);
    return (
      <div key={props.item.id} className="card">
        <div key={props.item.slug} className={'img img-' + props.item.slug}></div>
      </div>
    );
  }
};
export default Card;