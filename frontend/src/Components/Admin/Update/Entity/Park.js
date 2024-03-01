import { Text } from '../../Form/Inputs/Text.js';
import { Textarea } from '../../Form/Inputs/Textarea.js';
import { Hidden } from '../../Form/Inputs/Hidden.js';

export const Park = (props) => {
    const name = (props.e) ? props.e.name : '';
    const slug = (props.e) ? props.e.slug : '';
    const route = (props.e) ? props.e.route : '';
    const title = (props.e) ? props.e.title : '';
    const description = (props.e) ? props.e.description : '';
    const id = (props.e) ? props.e.id : '';
    return (
        <>
            <Text name="name" value={name} />
            <Text name="slug" value={slug} />
            <Text name="route" value={route} />
            <Text name="title" value={title} />
            <Textarea name="description" value={description} />
            <Hidden name="id" value={id} />
        </>
    )
}