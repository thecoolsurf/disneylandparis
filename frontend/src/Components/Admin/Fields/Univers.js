import { Field } from '../Field.js';
import { useState, useEffect } from 'react';

export const Univers = (props) => {
    const id_park = (props.e) ? props.e.id_park : '';
    const slug = (props.e) ? props.e.slug : '';
    const name = (props.e) ? props.e.name : '';
    const description = (props.e) ? props.e.description : '';
    const id = (props.e) ? props.e.id : '';
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
            <Field key="id_park" type="select" name="id_park" chooser={parkChooser} value={id_park} />
            <Field key="name" type="text" name="name" value={name} />
            <Field key="slug" type="text" name="slug" value={slug} />
            <Field key="description" type="textarea" name="description" value={description} />
            
            <Field key="id" type="hidden" name="id" value={id} />
        </>
    )
}