const Card = (props) => {
  console.log(props.item.id_park);
  let uri = props.slugs.toString();
  let path = uri.replaceAll(',','/');
  let href = '';
  if (props.slugs.length === 5) {
    href = path + '/attraction/' + props.item.slug;
  } else {
    href = '/park/' + path.slice(6,) + '/univers/' + props.item.slug;
  }
  return (
    <a className="card" href={href} alt={props.item.name}>
      <div className={'img img-'+props.item.slug}></div>
      <div className="legend">{props.item.name}</div>
    </a>
  );
};

export default Card;