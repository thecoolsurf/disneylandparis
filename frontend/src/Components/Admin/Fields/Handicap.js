import { Field } from '../Others/Field.js';

export const Handicap = (props) => {
    const description = (props.e) ? props.e.description : '';
    const id = (props.e) ? props.e.id : '';
    return (
        <>
            <Field key="description" type="textarea" name="description" value={description} />
            
            <Field key="id" type="hidden" name="id" value={id} />
        </>
    )
}