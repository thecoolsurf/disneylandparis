import { Field } from '../../Form/Field.js';
import { useState, useEffect } from 'react';

export const Univers = (props) => {
    const id_park = (props.e) ? props.e.id_park : '';
    const slug = (props.e) ? props.e.slug : '';
    const route = (props.e) ? props.e.route : '';
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
            <Field type="select" name="id_park" chooser={parkChooser} value={id_park} />
            <Field type="text" name="name" value={name} />
            <Field type="text" name="slug" value={slug} />
            <Field type="text" name="route" value={route} />
            <Field type="textarea" name="description" value={description} />
            <Field key="id" type="hidden" name="id" value={id} />
        </>
    )
}