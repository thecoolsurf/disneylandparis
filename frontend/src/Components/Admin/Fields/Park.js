import { Field } from '../Field.js';

export const Park = (props) => {
    const slug = (props.e) ? props.e.slug : '';
    const name = (props.e) ? props.e.name : '';
    const description = (props.e) ? props.e.description : '';
    const id = (props.e) ? props.e.id : '';
    return (
        <>
            <Field key="name" type="text" name="name" value={name} />
            <Field key="slug" type="text" name="slug" value={slug} />
            <Field key="description" type="textarea" name="description" value={description} />

            <Field key="id" type="hidden" name="id" value={id} />
        </>
    )
}