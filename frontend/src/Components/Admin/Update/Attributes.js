import { Text } from '../Form/Inputs/Text.js';
import { Textarea } from '../Form/Inputs/Textarea.js';
import { Hidden } from '../Form/Inputs/Hidden.js';

export const Attributes = (props) => {
    const name = (props.e) ? props.e.name : '';
    const slug = (props.e) ? props.e.slug : '';
    const route = (props.e) ? props.e.route : '';
    const description = (props.e) ? props.e.description : '';
    const id = (props.e) ? props.e.id : '';
    switch (props.uri) {
        case 'category':
            return (
                <>
                    <Text name="name" value={name} />
                    <Text name="slug" value={slug} />
                    <Text name="route" value={route} />
                    <Hidden name="id" value={id} />
                </>
            )
        case 'public':
            return (
                <>
                    <Text name="name" value={name} />
                    <Hidden name="id" value={id} />
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
                    <Text name="name" value={name} />
                    <Textarea name="description" value={description} />
                    <Hidden name="id" value={id} />
                </>
            )
        default:
            return (
                <></>
            )
    }
}