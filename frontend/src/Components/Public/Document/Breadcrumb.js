export const BreadCrumb = () => {
    const uri = window.location.href;
    const params = uri.split('/');
    if (uri.includes('attraction')) {
        return (
            <div className="breadcrumb">
                <a href={'/'} alt="home">home</a>
                <i className="fa fa-circle"></i>
                <a href={'/'+params[3]} alt={params[3]}>{params[3]}</a>
                <i className="fa fa-circle"></i>
                <a href={'/'+params[3]+'/univers/'+params[5]} alt={params[5]}>{params[5]}</a>
            </div>
        )
    }
    if (uri.includes('univers') && !uri.includes('attraction')) {
        return (
            <div className="breadcrumb">
                <a href={'/'} alt="home">home</a>
                <i className="fa fa-circle"></i>
                <a href={'/'+params[3]} alt={params[3]}>{params[3]}</a>
            </div>
        )
    }
    if (!uri.includes('univers') && !uri.includes('attraction')) {
        return (
            <div className="breadcrumb">
                <a href={'/'} alt="home">home</a>
            </div>
        )
    }
}