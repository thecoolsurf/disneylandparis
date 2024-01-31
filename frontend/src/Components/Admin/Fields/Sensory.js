import { Field } from '../Others/Field.js';

export const Sensory = (props) => {
    const chooser = [
        {id:1, name:'Faible'},
        {id:2, name:'Moyenne'},
        {id:3, name:'Forte'},
        {id:4, name:'Très forte'},
    ]
    const level = (props.e) ? props.e.level : '';
    const description = (props.e) ? props.e.description : '';
    const id = (props.e) ? props.e.id : '';
    return (
        <>
            <Field type="select" name="level" value={level} chooser={chooser} />
            <Field type="textarea" name="description" value={description} />
            <Field key="id" type="hidden" name="id" value={id} />
        </>
    )
}