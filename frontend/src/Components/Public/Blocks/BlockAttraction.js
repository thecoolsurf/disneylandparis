import { BlockLabelName } from "./BlockLabelName";
import { BlockBack } from "./BlockBack";

export const BlockAttraction = (props) => {
    return (
        props.datas.map((a) => {
            return (
                <>
                    <BlockLabelName label="Categorie" name={a.cname} />
                    <BlockLabelName label="Public" name={a.public} />
                    <BlockLabelName label="Interet" name={a.interet_description} />
                    <BlockLabelName label="Taille" name={a.height_description} />
                    <BlockLabelName label="Evacuation" name={a.evacuation_description} />
                    <BlockLabelName label="Sensation" name={a.sensory_description} />
                    <BlockLabelName label="Handicap" name={a.handicap_description} />
                    <BlockBack back={props.back} />
                </>
            )
        })
    )
}