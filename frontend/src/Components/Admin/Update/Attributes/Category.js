import { Text } from '../../Form/Inputs/Text.js';
import { Hidden } from '../../Form/Inputs/Hidden.js';

export const Category = (props) => {
    const name = (props.e) ? props.e.name : '';
    const slug = (props.e) ? props.e.slug : '';
    const route = (props.e) ? props.e.route : '';
    const id = (props.e) ? props.e.id : '';
    return (
        <>
            <Text name="name" value={name} />
            <Text name="slug" value={slug} />
            <Text name="route" value={route} />
            <Hidden name="id" value={id} />
        </>
    )
}