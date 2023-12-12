import "./card.css";

import card_1 from '../../assets/images/card-1.jpg';

const Card = (props) => {
  function blason() {
    switch (props.url) {
      case 'gryffindor': return card_1;
      default: return card_1;
    }
  }
  let img = props.character.image ? props.character.image : blason();
  return (
    <a className="card" href={'Character/'+props.character.id}>
      <img src={img} title={props.character.name} alt={props.character.name} />
      <span className="legend">{props.character.name}</span>
    </a>
  );
};

export default Card;