import '../../assets/css/admin/admin.css';
import '../../assets/css/admin/form.css';
import { useState, useEffect } from 'react';
import { Navigation } from "../../Components/Admin/Navigation.js";

export const AdminUpdate = (props) => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const datasUpdate = await fetch(`http://localhost:80/admin/update/${uri}?id=${id}`);
            const datas = await datasUpdate.json();
            setDatas(datas);
        };
        fetchData();
    }, []);
    const queryString = window.location.pathname;
    const url = window.location.href;
    const uri = url.includes('admin') ? queryString.split('/')[3] : 'park';
    const id = url.includes('?') ? url.split('?')[1].slice(3,) : 0;
    return (
        <div className="admin">
            <Navigation entities={props.entities} />
            <form action={'/admin/update/entity/' + props.uri} method="POST" enctype="application/x-www-form-urlencoded">
                <fieldset>
                    <legend>UPDATE:<span>{props.uri}</span></legend>
                    {datas.map((e) => {
                        if (props.uri === 'attraction') {
                            return (
                                <>
                                    <input type="hidden" name="id" value={e.id} />
                                    <p className="item">
                                        <label>Slug</label>
                                        <input type="text" name="slug" value={e.slug} />
                                    </p>
                                    <p className="item">
                                        <label>Name</label>
                                        <input type="text" name="name" value={e.name} />
                                    </p>
                                    <p className="item">
                                        <label>Public</label>
                                        <input type="text" name="public" value={e.public} />
                                    </p>
                                    <p className="item">
                                        <label>Description</label>
                                        <textarea name="description" rows="10" cols="50">{e.description}</textarea>
                                    </p>
                                    <p className="item">
                                        <label>Restriction</label>
                                        <input type="text" name="restriction" value={e.restriction} />
                                    </p>
                                    <p className="item">
                                        <label>Pictures</label>
                                        <input type="text" name="pictures" value={e.pictures} />
                                    </p>
                                    <p className="item">
                                        <label>Movies</label>
                                        <input type="text" name="movies" value={e.movies} />
                                    </p>
                                </>
                            )
                        } else {
                            return (
                                <>
                                    <input type="hidden" name="id" value={e.id} />
                                    <p className="item">
                                        <label>Slug</label>
                                        <input type="text" name="slug" value={e.slug} />
                                    </p>
                                    <p className="item">
                                        <label>Name</label>
                                        <input type="text" name="name" value={e.name} />
                                    </p>
                                    <p className="item">
                                        <label>Description</label>
                                        <textarea name="description" rows="10" cols="50">{e.description}</textarea>
                                    </p>
                                </>
                            )
                        }
                    })}
                    <input type="submit" value="Update" />
                </fieldset>
            </form>
        </div>
    )
}