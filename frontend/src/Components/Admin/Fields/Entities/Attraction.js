import { Field } from '../../Items/Field.js';
import { useState, useEffect } from 'react';

export const Attraction = (props) => {
    const [parkChooser, setParkChooser] = useState([]);
    const [universChooser, setUniversChooser] = useState([]);
    const [categoryChooser, setCategoryChooser] = useState([]);
    const [publicChooser, setPublicChooser] = useState([]);
    const [photopassChooser, setPhotopassChooser] = useState([]);
    const [premieraccessChooser, setPremieraccessChooser] = useState([]);
    const [pmrChooser, setPmrChooser] = useState([]);
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
            const datasPublic = await fetch(`http://localhost:80/admin/collection/public`);
            const publicChooser = await datasPublic.json();
            setPublicChooser(publicChooser);
            const datasPhotopass = await fetch(`http://localhost:80/admin/collection/photopass`);
            const photopassChooser = await datasPhotopass.json();
            setPhotopassChooser(photopassChooser);
            const datasPremieraccess = await fetch(`http://localhost:80/admin/collection/premieraccess`);
            const premieraccessChooser = await datasPremieraccess.json();
            setPremieraccessChooser(premieraccessChooser);
            const datasPmr = await fetch(`http://localhost:80/admin/collection/pmr`);
            const pmrChooser = await datasPmr.json();
            setPmrChooser(pmrChooser);
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
    const id_park = (props.e) ? props.e.id_park : '';
    const id_univ = (props.e) ? props.e.id_univ : '';
    const id_category = (props.e) ? props.e.id_category : '';
    const slug = (props.e) ? props.e.slug : '';
    const route = (props.e) ? props.e.route : '';
    const name = (props.e) ? props.e.name : '';
    const id_public = (props.e) ? props.e.id_public : '';
    const id_photopass = (props.e) ? props.e.id_photopass : '';
    const id_pmr = (props.e) ? props.e.id_pmr : '';
    const premieraccess = (props.e) ? props.e.premieraccess : '';
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
    const id = (props.e) ? props.e.id : '';
    return (
        <>
            <Field type="select" name="id_park" chooser={parkChooser} value={id_park} />
            <Field type="select" name="id_univ" chooser={universChooser} value={id_univ} />
            <Field type="select" name="id_category" chooser={categoryChooser} value={id_category} />
            <Field type="text" name="name" value={name} />
            <Field type="text" name="slug" value={slug} />
            <Field type="text" name="route" value={route} />
            <Field type="select" name="id_public" chooser={publicChooser} value={id_public} />
            <Field type="select" name="id_photopass" chooser={photopassChooser} value={id_photopass} />
            <Field type="select" name="id_pmr" chooser={pmrChooser} value={id_pmr} />
            <Field type="checkbox" name="premieraccess" chooser={premieraccessChooser} value={premieraccess} />
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
            <Field key="id" type="hidden" name="id" value={id} />
        </>
    )
}