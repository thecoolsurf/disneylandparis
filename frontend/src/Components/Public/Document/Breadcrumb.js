export const BreadCrumb = () => {
    const uri = window.location.href;
    const params = uri.split('/');
    if (uri.includes('attraction')) {
        return (
            <div className="breadcrumb">
                <a href={'/'} alt="home">home</a>
                <i className="fa fa-circle"></i>
                <a href={'/' + params[3]} alt={params[3]}>{params[3]}</a>
                <i className="fa fa-circle"></i>
                <a href={'/' + params[3] + '/univers/' + params[5]} alt={params[5]}>{params[5]}</a>
            </div>
        )
    }
    if (uri.includes('categories') || uri.includes('origines')) {
        return (
            <div className="breadcrumb">
                <a href={'/'} alt="home">home</a>
                <i className="fa fa-circle"></i>
                <span>{params[3]}</span>
            </div>
        )
    }
    if (uri.includes('categorie') && !uri.includes('categories')) {
        return (
            <div className="breadcrumb">
                <a href={'/'} alt="home">home</a>
                <i className="fa fa-circle"></i>
                <a href={'/categories'} alt="categories">Catégories</a>
            </div>
        )
    }
    if (uri.includes('origine') && !uri.includes('origines')) {
        return (
            <div className="breadcrumb">
                <a href={'/'} alt="home">home</a>
                <i className="fa fa-circle"></i>
                <a href={'/origines'} alt="origines">Origines</a>
            </div>
        )
    }
    if (uri.includes('univers') && !uri.includes('attraction')) {
        return (
            <div className="breadcrumb">
                <a href={'/'} alt="home">home</a>
                <i className="fa fa-circle"></i>
                <a href={'/' + params[3]} alt={params[3]}>{params[3]}</a>
            </div>
        )
    }
    if (!uri.includes('categorie') && !uri.includes('univers') && !uri.includes('attraction')) {
        return (
            <div className="breadcrumb">
                <a href={'/'} alt="home">home</a>
            </div>
        )
    }
}