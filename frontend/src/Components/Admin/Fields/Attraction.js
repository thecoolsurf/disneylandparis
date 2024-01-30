import { Field } from '../Others/Field.js';
import { useState, useEffect } from 'react';

export const Attraction = (props) => {
    const [parkChooser, setParkChooser] = useState([]);
    const [universChooser, setUniversChooser] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const datasParks = await fetch(`http://localhost:80/admin/collection/park`);
            const parkChooser = await datasParks.json();
            setParkChooser(parkChooser);
            const datasUnivers = await fetch(`http://localhost:80/admin/collection/univers`);
            const universChooser = await datasUnivers.json();
            setUniversChooser(universChooser);
        };
        fetchData();
    }, []);
    const id_park = (props.e) ? props.e.id_park : '';
    const id_univ = (props.e) ? props.e.id_univ : '';
    const slug = (props.e) ? props.e.slug : '';
    const name = (props.e) ? props.e.name : '';
    const publics = (props.e) ? props.e.public : '';
    const restriction = (props.e) ? props.e.restriction : '';
    const description = (props.e) ? props.e.description : '';
    const pictures = (props.e) ? props.e.pictures : '';
    const movies = (props.e) ? props.e.movies : '';
    const id = (props.e) ? props.e.id : '';
    return (
        <>
            <Field key="id_park" type="select" name="id_park" chooser={parkChooser} value={id_park} />
            <Field key="id_univ" type="select" name="id_univ" chooser={universChooser} value={id_univ} />
            <Field key="name" type="text" name="name" value={name} />
            <Field key="slug" type="text" name="slug" value={slug} />
            <Field key="public" type="text" name="public" value={publics} />
            <Field key="restriction" type="text" name="restriction" value={restriction} />
            <Field key="description" type="textarea" name="description" value={description} />
            <Field key="pictures" type="text" name="pictures" value={pictures} />
            <Field key="movies" type="text" name="movies" value={movies} />
            
            <Field key="id" type="hidden" name="id" value={id} />
        </>
    )
}