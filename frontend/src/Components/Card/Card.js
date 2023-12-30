import "./card.css";

import img_default_attraction from '../../assets/images/attractions/img_default_attraction.jpg';

const Card = (props) => {

  let img = props.character.image ? props.character.image : img_default_attraction;
  return (
    <a className="card" href={'Character/'+props.character.id}>
      <img src={img} title={props.character.name} alt={props.character.name} />
      <span className="legend">{props.character.name}</span>
    </a>
  );
};

export default Card;