import { ArrayInput, BooleanInput, Edit, NumberInput, SimpleForm, SimpleFormIterator, TextInput } from 'react-admin';

const AttributeEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <NumberInput source="position" />
            <BooleanInput source="active" />
            <ArrayInput source="values">
                <SimpleFormIterator>
                    <TextInput source="value" />
                    <TextInput source="color" />
                    <NumberInput source="position" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);

export default AttributeEdit;