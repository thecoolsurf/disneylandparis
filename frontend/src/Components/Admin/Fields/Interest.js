import { Field } from '../Others/Field.js';

export const Interest = (props) => {
    const name = (props.e) ? props.e.name : '';
    const description = (props.e) ? props.e.description : '';
    const id = (props.e) ? props.e.id : '';
    return (
        <>
            <Field key="name" type="text" name="name" value={name} />
            <Field key="description" type="textarea" name="description" value={description} />
            
            <Field key="id" type="hidden" name="id" value={id} />
        </>
    )
}