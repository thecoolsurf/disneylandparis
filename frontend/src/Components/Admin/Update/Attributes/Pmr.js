import { Text } from '../../Form/Inputs/Text.js';
import { Textarea } from '../../Form/Inputs/Textarea.js';
import { Hidden } from '../../Form/Inputs/Hidden.js';

export const Pmr = (props) => {
    const name = (props.e) ? props.e.name : '';
    const description = (props.e) ? props.e.description : '';
    const id = (props.e) ? props.e.id : '';
    return (
        <>
            <Text name="name" value={name} />
            <Textarea name="description" value={description} />
            <Hidden name="id" value={id} />
        </>
    )
}