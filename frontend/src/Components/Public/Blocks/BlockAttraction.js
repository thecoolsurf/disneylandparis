import { useState, useEffect } from 'react';

import { BlockLabel } from './BlockLabel';
import { BlockPrivileges } from './BlockPrivileges.js';
import { FilterParams } from '../Filters/FilterParams.js';

export const BlockAttraction = (props) => {
    const [handicaps, setHandicaps] = useState([]);
    const [interests, setInterests] = useState([]);
    const [premieraccess, setPremieraccess] = useState([]);
    const handicap = props.datas[0].handicaps.split(',');
    const interest = props.datas[0].interests.split(',');
    const premieracces = props.datas[0].premieraccess.split(',');
    useEffect(() => {
        const fetchtheData = async () => {
            const dataPremieraccess = await fetch(`http://localhost:80/premieraccess?${FilterParams(premieracces)}`);
            const premieraccess = await dataPremieraccess.json();
            setPremieraccess(premieraccess);
            const dataHandicaps = await fetch(`http://localhost:80/handicap?${FilterParams(handicap)}`);
            const handicaps = await dataHandicaps.json();
            setHandicaps(handicaps);
            const dataInterests = await fetch(`http://localhost:80/interest?${FilterParams(interest)}`);
            const interests = await dataInterests.json();
            setInterests(interests);
        };
        fetchtheData();
    }, []);
    return (
        props.datas.map((a) => {
            return (
                <>
                    <BlockPrivileges label="photopass" icon="fa-camera" name={a.photopass} description={a.photopass_description} />
                    <BlockPrivileges label="pmr" icon="fa-wheelchair" name={a.pmr} description={a.pmr_description} />
                    <BlockPrivileges label="singlerider" icon="fa-user" name={a.singlerider} description={a.singlerider_description} />
                    <BlockPrivileges label="premieraccess" icon="fa-rocket" name="Disney Premier Access" datas={premieraccess} />
                    <BlockLabel label="Categorie" icon="fa fa-cogs" name={a.cname} />
                    <BlockLabel label="Public" icon="fa fa-users" name={a.public} />
                    <BlockLabel label="Durée" icon="fa fa-clock-o" name={a.duration} />
                    <BlockLabel label="Taille" icon="fa fa-text-height" name={a.height_name} description={a.height_description} />
                    <BlockLabel label="Sensation" icon="fa fa-heartbeat" name={a.sensory_name} description={a.sensory_description} />
                    <BlockLabel label="Intérets" icon="fa fa-comment" name="Intéret" datas={interests} />
                    <BlockLabel label="Handicaps" icon="fa fa-wheelchair" datas={handicaps} />
                    <BlockLabel label="Hauteur" icon="fa fa-info-circle" name={a.height} />
                    <BlockLabel label="Longueur" icon="fa fa-info-circle" name={a.width} />
                    <BlockLabel label="Vitesse" icon="fa fa-info-circle" name={a.speed} />
                    <BlockLabel label="Capacité" icon="fa fa-info-circle" name={a.ability} />
                    <BlockLabel label="Evacuation" icon="fa fa-life-ring " name={a.evacuation_description} />
                </>
            )
        })
    )
}


