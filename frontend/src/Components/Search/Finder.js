import { useState, useEffect } from 'react';

export const Finder = (props) => {
    const [find, setFind] = useState('');
    return (
        <form action="/find/attractions" method="get" className="search">
            <input type="text" max="50" value={find} name="find" onChange={(e) => {
                setFind(e.target.value);
            }} />
            <input type="submit" value="send" /><i className="fa fa-search"></i>
        </form>

    )
}