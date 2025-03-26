import { ArrayInput, BooleanInput, Edit, NumberInput, SimpleForm, SimpleFormIterator, TextInput, ReferenceArrayInput, SelectArrayInput } from 'react-admin';

const ProductEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="reference" />
            <TextInput source="name" />
            <TextInput source="description" />
            <TextInput source="basePrice" />
            <BooleanInput source="active" />
            <ReferenceArrayInput source="categories" reference="categories" >
                <SelectArrayInput optionText="name" />
            </ReferenceArrayInput>
            <ArrayInput source="combinations">
                <SimpleFormIterator>
                    <TextInput source="id" sx={{block: "hidden"}} />
                    <TextInput source="reference" />
                    <NumberInput source="price" />
                    <NumberInput source="impactOnPrice" />
                    <NumberInput source="quantity" />
                    <BooleanInput source="active" />
                    <ArrayInput source="attributeValues">
                        <SimpleFormIterator>
                            <TextInput source="id" />
                            <TextInput source="value" />
                            <TextInput source="color" />
                            <NumberInput source="position" />
                        </SimpleFormIterator>
                    </ArrayInput>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);

export default ProductEdit;
