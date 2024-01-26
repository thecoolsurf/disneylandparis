import { Field } from '../Field.js';
import { useState, useEffect } from 'react';

export const Univers = (props) => {
    const [parkChooser, setParkChooser] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const datasParks = await fetch(`http://localhost:80/admin/collection/park`);
            const parkChooser = await datasParks.json();
            setParkChooser(parkChooser);
        };
        fetchData();
    }, []);
    return (
        <>
            <Field key="id_park" type="select" name="id_park" chooser={parkChooser} value={props.e.id_park} />
            <Field key="slug" type="text" name="slug" value={props.e.slug} />
            <Field key="name" type="text" name="name" value={props.e.name} />
            <Field key="description" type="textarea" name="description" value={props.e.description} />
            
            <Field key="id" type="hidden" name="id" value={props.e.id} />
        </>
    )
}