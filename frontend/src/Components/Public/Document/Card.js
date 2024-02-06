import { ImgCollection } from "./ImgCollection";

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
    // const collection = require.context('../../../assets/images/attractions/park/adventure-isle/img', true);
    const collection = ImgCollection(uri)
    const images = collection.keys().map(image => collection(image));
    return (
      <div className="img-collection">
        {images.map((src) => {
          return (<img src={'../../../assets/images/attractions/park/adventure-isle/img/adventure-isle-1.jpg'} />)
        })}
      </div>
    );
  }
};
export default Card;