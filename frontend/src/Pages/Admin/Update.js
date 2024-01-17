import './admin.css'
import { Navigation } from "./Navigation.js";

import './form.css';

export const AdminUpdate = (props) => {
    return (
        <div className="admin">
            <Navigation entities={props.entities} />
            <form action={'/admin/update/entity/'+props.uri} method="POST" enctype="application/x-www-form-urlencoded">
                <fieldset>
                    <legend>UPDATE:<span>{props.uri}</span></legend>
                    {props.datas.map((e) => {
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