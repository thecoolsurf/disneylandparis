import { Field } from '../Field.js';
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
    return (
        <>
            <Field key="id_park" type="select" name="id_park" chooser={parkChooser} value={props.e.id_park} />
            <Field key="id_univ" type="select" name="id_univ" chooser={universChooser} value={props.e.id_univ} />
            <Field key="slug" type="text" name="slug" value={props.e.slug} />
            <Field key="name" type="text" name="name" value={props.e.name} />
            <Field key="public" type="text" name="public" value={props.e.public} />
            <Field key="restriction" type="text" name="restriction" value={props.e.restriction} />
            <Field key="description" type="textarea" name="description" value={props.e.description} />
            <Field key="pictures" type="text" name="pictures" value={props.e.pictures} />
            <Field key="movies" type="text" name="movies" value={props.e.movies} />
            
            <Field key="id" type="hidden" name="id" value={props.e.id} />
        </>
    )
}