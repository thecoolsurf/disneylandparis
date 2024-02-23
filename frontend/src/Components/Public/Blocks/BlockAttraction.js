import { BlockLabelName } from "./BlockLabelName";
import { BlockPhotopass } from "./BlockPhotopass";
import { BlockPMR } from "./BlockPMR";
import { BlockPremierAccess } from "./BlockPremierAccess";

export const BlockAttraction = (props) => {
    return (
        props.datas.map((a) => {
            return (
                <>
                    <BlockPhotopass photopass={a.photopass} />
                    <BlockPMR pmr={a.pmr} />
                    <BlockPremierAccess premieraccess={a.premieraccess} />
                    <BlockLabelName label="Categorie" icon="fa fa-cogs" name={a.cname} />
                    <BlockLabelName label="Public" icon="fa fa-users" name={a.public} />
                    <BlockLabelName label="Durée" icon="fa fa-clock-o" name={a.duration} />
                    <BlockLabelName label="Hauteur" icon="fa fa-info-circle" name={a.height} />
                    <BlockLabelName label="Longeur" icon="fa fa-info-circle" name={a.width} />
                    <BlockLabelName label="Vitesse" icon="fa fa-info-circle" name={a.speed} />
                    <BlockLabelName label="Capacite" icon="fa fa-info-circle" name={a.ability} />
                    <BlockLabelName label="Interet" icon="fa fa-comment" name={a.interet_description} />
                    <BlockLabelName label="Taille" icon="fa fa-text-height" name={a.height_description} />
                    <BlockLabelName label="Evacuation" icon="fa fa-life-ring " name={a.evacuation_description} />
                    <BlockLabelName label="Sensation" icon="fa fa-heartbeat" name={a.sensory_description} />
                    <BlockLabelName label="Handicap" icon="fa fa-wheelchair" name={a.handicap_description} />
                </>
            )
        })
    )
}


