import { Select } from '../../Form/Inputs/Select.js';
import { Checkbox } from '../../Form/Inputs/Checkbox.js';
import { Date } from '../../Form/Inputs/Date.js';
import { Text } from '../../Form/Inputs/Text.js';
import { Textarea } from '../../Form/Inputs/Textarea.js';
import { Hidden } from '../../Form/Inputs/Hidden.js';

import { useState, useEffect } from 'react';

export const Attraction = (props) => {
    const [parkChooser, setParkChooser] = useState([]);
    const [universChooser, setUniversChooser] = useState([]);
    const [categoryChooser, setCategoryChooser] = useState([]);
    const [publicChooser, setPublicChooser] = useState([]);
    const [photopassChooser, setPhotopassChooser] = useState([]);
    const [premieraccessChooser, setPremieraccessChooser] = useState([]);
    const [pmrChooser, setPmrChooser] = useState([]);
    const [singleriderChooser, setSingleriderChooser] = useState([]);
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
            const datasSinglerider = await fetch(`http://localhost:80/admin/collection/singlerider`);
            const singleriderChooser = await datasSinglerider.json();
            setSingleriderChooser(singleriderChooser);
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
    const created= (props.e) ? props.e.created : '';
    const author = (props.e) ? props.e.author : '';
    const slug = (props.e) ? props.e.slug : '';
    const route = (props.e) ? props.e.route : '';
    const name = (props.e) ? props.e.name : '';
    const id_public = (props.e) ? props.e.id_public : '';
    const id_photopass = (props.e) ? props.e.id_photopass : '';
    const id_pmr = (props.e) ? props.e.id_pmr : '';
    const id_singlerider = (props.e) ? props.e.id_singlerider : '';
    const premieraccess = (props.e) ? props.e.premieraccess : '4';
    const duration = (props.e) ? props.e.duration : '';
    const height = (props.e) ? props.e.height : '';
    const width = (props.e) ? props.e.width : '';
    const speed = (props.e) ? props.e.speed : '';
    const ability = (props.e) ? props.e.ability : '';
    const description = (props.e) ? props.e.description : '';
    const id_evacuation = (props.e) ? props.e.id_evacuation : '';
    const id_height = (props.e) ? props.e.id_height : '';
    const id_sensory = (props.e) ? props.e.id_sensory : '';
    const handicaps = (props.e) ? props.e.handicaps : '4';
    const interests = (props.e) ? props.e.interests : '3';
    const id = (props.e) ? props.e.id : '';
    return (
        <>
            <Select name="id_park" chooser={parkChooser} value={id_park} />
            <Select name="id_univ" chooser={universChooser} value={id_univ} />
            <Select name="id_category" chooser={categoryChooser} value={id_category} />
            <Date name="created" value={created} />
            <Text name="author" value={author} />
            <Text name="name" value={name} />
            <Text name="slug" value={slug} />
            <Text name="route" value={route} />
            <Select name="id_public" chooser={publicChooser} value={id_public} />
            <Select name="id_photopass" chooser={photopassChooser} value={id_photopass} />
            <Select name="id_pmr" chooser={pmrChooser} value={id_pmr} />
            <Select name="id_singlerider" chooser={singleriderChooser} value={id_singlerider} />
            <Checkbox name="premieraccess" chooser={premieraccessChooser} value={premieraccess} />
            <Text name="duration" value={duration} />
            <Text name="height" value={height} />
            <Text name="width" value={width} />
            <Text name="speed" value={speed} />
            <Text name="ability" value={ability} />
            <Select name="id_evacuation" value={id_evacuation} chooser={evacuationChooser} />
            <Select name="id_height" value={id_height} chooser={heightChooser} />
            <Select name="id_sensory" value={id_sensory} chooser={sensoryChooser} />
            <Checkbox name="handicaps" value={handicaps} chooser={handicapChooser} />
            <Checkbox name="interests" value={interests} chooser={interestChooser} />
            <Textarea name="description" value={description} />
            <Hidden name="id" value={id} />
        </>
    )
}