import default_attraction from '../../assets/images/attractions/default_attraction.jpg';

const Card = (props) => {
  let img = props.datas.image ? props.datas.image : default_attraction;
  let uri = props.slugs.toString();
  let path = uri.replaceAll(',','/');
  let href = '';
  if (props.slugs.length > 2) {
    href = path + '/attraction/' + props.datas.slug;
  } else {
    href = '/park/' + path.slice(6,) + '/univers/' + props.datas.slug;
  }
  return (
    <a className="card" href={href} alt={props.datas.name}>
      <img src={img} title={props.datas.name} alt={props.datas.name} />
      <div className="legend">{props.datas.name}</div>
    </a>
  );
};

export default Card;