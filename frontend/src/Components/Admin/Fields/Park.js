import { Field } from '../Others/Field.js';

export const Park = (props) => {
    const name = (props.e) ? props.e.name : '';
    const slug = (props.e) ? props.e.slug : '';
    const url = (props.e) ? props.e.url : '';
    const title = (props.e) ? props.e.title : '';
    const description = (props.e) ? props.e.description : '';
    const id = (props.e) ? props.e.id : '';
    return (
        <>
            <Field key="name" type="text" name="name" value={name} />
            <Field key="slug" type="text" name="slug" value={slug} />
            <Field key="url" type="text" name="url" value={url} />
            <Field key="title" type="text" name="title" value={title} />
            <Field key="description" type="textarea" name="description" value={description} />

            <Field key="id" type="hidden" name="id" value={id} />
        </>
    )
}