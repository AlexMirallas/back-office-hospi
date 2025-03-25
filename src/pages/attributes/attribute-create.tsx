import { ArrayInput, BooleanInput, Create, NumberInput, SimpleForm, SimpleFormIterator, TextInput } from 'react-admin';

const AttributeCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <NumberInput source="position" />
            <BooleanInput source="active" />
            <ArrayInput source="values">
                <SimpleFormIterator>
                    <TextInput source="id" />
                    <TextInput source="value" />
                    <TextInput source="color" />
                    <NumberInput source="position" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
);

export default AttributeCreate;