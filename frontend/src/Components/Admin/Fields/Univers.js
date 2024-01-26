import { Field } from '../Field.js';

export const Univers = (props) => {
    return (
        <>
            <Field key="id_park" type="select" name="id_park" chooser={props.parks} value={props.e.id_park} />
            <Field key="slug" type="text" name="slug" value={props.e.slug} />
            <Field key="name" type="text" name="name" value={props.e.name} />
            <Field key="description" type="textarea" name="description" value={props.e.description} />
            
            <Field key="id" type="hidden" name="id" value={props.e.id} />
        </>
    )
}