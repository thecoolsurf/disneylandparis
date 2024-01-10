const Card = (props) => {
  let uri = props.slugs.toString();
  let path = uri.replaceAll(',', '/');
  if (props.slugs.length === 5) {
    return (
      <a className="card" href={path + '/attraction/' + props.item.slug} alt={props.item.name}>
        <div className={'img img-' + props.item.slug}></div>
        <div className="legend">{props.item.name}</div>
      </a>
    );
  } else {
    return (
      <a className="card" href={'/park/' + path.slice(6,) + '/univers/' + props.item.slug} alt={props.item.name}>
        <div className={'img img-' + props.item.slug}></div>
        <div className="legend">{props.item.name}</div>
      </a>
    );
  }
};
export default Card;