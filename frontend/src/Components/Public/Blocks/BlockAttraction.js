import { BlockLabel } from "./BlockLabel";
import { BlockPrivileges } from "./BlockPrivileges";

export const BlockAttraction = (props) => {
    return (
        props.datas.map((a) => {
            return (
                <>
                    <BlockPrivileges label="photopass" icon="fa-camera" name={a.photopass} description={a.photopass_description} />
                    <BlockPrivileges label="pmr" icon="fa-wheelchair" name={a.pmr} description={a.pmr_description} />
                    <BlockPrivileges label="singlerider" icon="fa-user" name={a.singlerider} description={a.singlerider_description} />
                    <BlockPrivileges label="premieraccess" icon="fa-rocket" name={a.premieraccess} description={a.premieraccess_description} />
                    <BlockLabel label="Categorie" icon="fa fa-cogs" name={a.cname} />
                    <BlockLabel label="Public" icon="fa fa-users" name={a.public} />
                    <BlockLabel label="Durée" icon="fa fa-clock-o" name={a.duration} />
                    <BlockLabel label="Taille" icon="fa fa-text-height" name={a.height_name} description={a.height_description} />
                    <BlockLabel label="Hauteur" icon="fa fa-info-circle" name={a.height} />
                    <BlockLabel label="Longueur" icon="fa fa-info-circle" name={a.width} />
                    <BlockLabel label="Vitesse" icon="fa fa-info-circle" name={a.speed} />
                    <BlockLabel label="Capacité" icon="fa fa-info-circle" name={a.ability} />
                    <BlockLabel label="Interet" icon="fa fa-comment" name={a.interet_name} description={a.interet_description} />
                    <BlockLabel label="Evacuation" icon="fa fa-life-ring " name={a.evacuation_description} />
                    <BlockLabel label="Sensation" icon="fa fa-heartbeat" name={a.sensory_name} description={a.sensory_description} />
                    <BlockLabel label="Handicap" icon="fa fa-wheelchair" name={a.handicap_name} description={a.handicap_description} />
                </>
            )
        })
    )
}


