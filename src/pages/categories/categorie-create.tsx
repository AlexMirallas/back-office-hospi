import { BooleanInput, Create, NumberInput, SimpleForm, TextInput } from 'react-admin';

const CategoryCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <BooleanInput source="active" />
            <NumberInput source="position" />
        </SimpleForm>
    </Create>
);

export default CategoryCreate;