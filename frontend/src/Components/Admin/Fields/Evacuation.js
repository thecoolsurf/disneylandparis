import { Field } from '../Others/Field.js';

export const Evacuation = (props) => {
    const chooser = [
        {id:1, name:'Evacuation facile'},
        {id:2, name:'Evacuation difficile'},
        {id:3, name:'Evacuation complexe'}
    ]
    const level = (props.e) ? props.e.level : '';
    const description = (props.e) ? props.e.description : '';
    const id = (props.e) ? props.e.id : '';
    return (
        <>
            <Field key="level" type="select" name="level" value={level} chooser={chooser} />
            <Field key="description" type="textarea" name="description" value={description} />
            
            <Field key="id" type="hidden" name="id" value={id} />
        </>
    )
}