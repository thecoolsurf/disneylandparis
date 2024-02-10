import { Field } from '../Items/Field.js';

export const Evacuation = (props) => {
    const chooser = [
        {id:1, name:'Evacuation facile'},
        {id:2, name:'Evacuation difficile'},
        {id:3, name:'Evacuation complexe'}
    ]
    const name = (props.e) ? props.e.name : '';
    const level = (props.e) ? props.e.level : '';
    const description = (props.e) ? props.e.description : '';
    const id = (props.e) ? props.e.id : '';
    return (
        <>
            <Field type="text" name="name" value={name} />
            <Field type="select" name="level" value={level} chooser={chooser} />
            <Field type="textarea" name="description" value={description} />
            
            <Field key="id" type="hidden" name="id" value={id} />
        </>
    )
}