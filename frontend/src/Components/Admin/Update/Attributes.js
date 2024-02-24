import { Field } from '../Form/Field.js';

export const Attributes = (props) => {
    const name = (props.e) ? props.e.name : '';
    const slug = (props.e) ? props.e.slug : '';
    const description = (props.e) ? props.e.description : '';
    const id = (props.e) ? props.e.id : '';
    switch (props.uri) {
        case 'category':
            return (
                <>
                    <Field key="name" type="text" name="name" value={name} />
                    <Field key="slug" type="text" name="slug" value={slug} />
                    <Field key="id" type="hidden" name="id" value={id} />
                </>
            )
        case 'public':
            return (
                <>
                    <Field type="text" name="name" value={name} />
                    <Field type="hidden" name="id" value={id} />
                </>
            )
        case 'evacuation':
        case 'handicap':
        case 'height':
        case 'interest':
        case 'photopass':
        case 'pmr':
        case 'premieraccess':
        case 'sensory':
        case 'singlerider':
            return (
                <>
                    <Field type="text" name="name" value={name} />
                    <Field type="textarea" name="description" value={description} />
                    <Field key="id" type="hidden" name="id" value={id} />
                </>
            )
        default:
            return (
                <></>
            )
    }
}