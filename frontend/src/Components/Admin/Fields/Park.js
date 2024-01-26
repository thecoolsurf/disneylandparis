import { Field } from '../Field.js';

export const Park = (props) => {
    return (
        <>
            <Field key="slug" type="text" name="slug" value={props.e.slug} />
            <Field key="name" type="text" name="name" value={props.e.name} />
            <Field key="description" type="textarea" name="description" value={props.e.description} />
            
            <Field key="id" type="hidden" name="id" value={props.e.id} />
        </>
    )
}