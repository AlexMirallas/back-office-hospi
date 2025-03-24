import { BooleanInput, Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

const CategoryEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <BooleanInput source="active" />
            <NumberInput source="position" />
        </SimpleForm>
    </Edit>
);

export default CategoryEdit;