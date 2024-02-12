import { Field } from '../Items/Field.js';
import { useState, useEffect } from 'react';

export const Attraction = (props) => {
    const [parkChooser, setParkChooser] = useState([]);
    const [universChooser, setUniversChooser] = useState([]);
    const [categoryChooser, setCategoryChooser] = useState([]);
    const [evacuationChooser, setEvacuationChooser] = useState([]);
    const [handicapChooser, setHandicapChooser] = useState([]);
    const [heightChooser, setHeightChooser] = useState([]);
    const [interestChooser, setInterestChooser] = useState([]);
    const [sensoryChooser, setSensoryChooser] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const datasParks = await fetch(`http://localhost:80/admin/collection/park`);
            const parkChooser = await datasParks.json();
            setParkChooser(parkChooser);
            const datasUnivers = await fetch(`http://localhost:80/admin/collection/univers`);
            const universChooser = await datasUnivers.json();
            setUniversChooser(universChooser);
            const datasCategory = await fetch(`http://localhost:80/admin/collection/category`);
            const categoryChooser = await datasCategory.json();
            setCategoryChooser(categoryChooser);
            const dataEvacuation = await fetch(`http://localhost:80/admin/collection/evacuation`);
            const evacuationChooser = await dataEvacuation.json();
            setEvacuationChooser(evacuationChooser);
            const dataHandicaps = await fetch(`http://localhost:80/admin/collection/handicap`);
            const handicapChooser = await dataHandicaps.json();
            setHandicapChooser(handicapChooser);
            const dataHeight = await fetch(`http://localhost:80/admin/collection/height`);
            const heightChooser = await dataHeight.json();
            setHeightChooser(heightChooser);
            const dataInterests = await fetch(`http://localhost:80/admin/collection/interest`);
            const interestChooser = await dataInterests.json();
            setInterestChooser(interestChooser);
            const dataSensory = await fetch(`http://localhost:80/admin/collection/sensory`);
            const sensoryChooser = await dataSensory.json();
            setSensoryChooser(sensoryChooser);
        };
        fetchData();
    }, []);
    const photopassChooser = [
        {id: 1, name: 'Disneyland PhotoPass'},
        {id: 2, name: 'Sans photos.'},
    ];
    const premieraccessChooser = [
        {id: 1, name: 'Disneyland Premier Access'},
        {id: 2, name: 'Sans file rapide.'},
    ];
    const pmrChooser = [
        {id: 1, name: 'Accès PMR (Personne à Mobilité Réduite)'},
        {id: 2, name: 'Sans acces PMR (Personne à Mobilité Réduite)'},
    ];
    console.log(photopassChooser);
    const id_park = (props.e) ? props.e.id_park : '';
    const id_univ = (props.e) ? props.e.id_univ : '';
    const id_category = (props.e) ? props.e.id_category : '';
    const slug = (props.e) ? props.e.slug : '';
    const route = (props.e) ? props.e.route : '';
    const name = (props.e) ? props.e.name : '';
    const publics = (props.e) ? props.e.public : '';
    const photopass = (props.e) ? props.e.photopass : '';
    const premieraccess = (props.e) ? props.e.premieraccess : '';
    const pmr = (props.e) ? props.e.pmr : '';
    const duration = (props.e) ? props.e.duration : '';
    const height = (props.e) ? props.e.height : '';
    const width = (props.e) ? props.e.width : '';
    const speed = (props.e) ? props.e.speed : '';
    const ability = (props.e) ? props.e.ability : '';
    const description = (props.e) ? props.e.description : '';
    const id_evacuation = (props.e) ? props.e.id_evacuation : '';
    const id_height = (props.e) ? props.e.id_height : '';
    const id_sensory = (props.e) ? props.e.id_sensory : '';
    const handicaps = (props.e) ? props.e.handicaps : '';
    const interests = (props.e) ? props.e.interests : '';
    const pictures = (props.e) ? props.e.pictures : '';
    const movies = (props.e) ? props.e.movies : '';
    const id = (props.e) ? props.e.id : '';
    return (
        <>
            <Field type="select" name="id_park" chooser={parkChooser} value={id_park} />
            <Field type="select" name="id_univ" chooser={universChooser} value={id_univ} />
            <Field type="select" name="id_category" chooser={categoryChooser} value={id_category} />
            <Field type="text" name="name" value={name} />
            <Field type="text" name="slug" value={slug} />
            <Field type="text" name="route" value={route} />
            <Field type="text" name="public" value={publics} />
            <Field type="select" name="photopass" chooser={photopassChooser} value={photopass} />
            <Field type="select" name="premieraccess" chooser={premieraccessChooser} value={premieraccess} />
            <Field type="select" name="pmr" chooser={pmrChooser} value={pmr} />
            <Field type="text" name="duration" value={duration} />
            <Field type="text" name="height" value={height} />
            <Field type="text" name="width" value={width} />
            <Field type="text" name="speed" value={speed} />
            <Field type="text" name="ability" value={ability} />
            <Field type="select" name="id_evacuation" value={id_evacuation} chooser={evacuationChooser} />
            <Field type="select" name="id_height" value={id_height} chooser={heightChooser} />
            <Field type="select" name="id_sensory" value={id_sensory} chooser={sensoryChooser} />
            <Field type="checkbox" name="handicaps" value={handicaps} chooser={handicapChooser} />
            <Field type="checkbox" name="interests" value={interests} chooser={interestChooser} />
            <Field type="textarea" name="description" value={description} />
            <Field type="text" name="pictures" value={pictures} />
            <Field type="text" name="movies" value={movies} />
            <Field key="id" type="hidden" name="id" value={id} />
        </>
    )
}