import { ArrayInput, BooleanInput, DateInput, Edit, NumberInput, SimpleForm, SimpleFormIterator, TextInput, ReferenceArrayInput } from 'react-admin';

const ProductEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="reference" />
            <TextInput source="name" />
            <TextInput source="description" />
            <TextInput source="basePrice" />
            <BooleanInput source="active" />
            <ReferenceArrayInput source="categories" reference="categories" target="productId"/>
            <ArrayInput source="combinations">
                <SimpleFormIterator>
                    <TextInput source="id" />
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
            <DateInput source="createdAt" />
            <DateInput source="updatedAt" />
        </SimpleForm>
    </Edit>
);

export default ProductEdit;
