import './logo.css';

export const Logo = (props) => {
    return (
        <div className={'logo logo-' + props.slug}></div>
    )
}