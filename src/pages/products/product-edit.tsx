import { ArrayInput, BooleanInput, Edit, NumberInput, SimpleForm, SimpleFormIterator, TextInput, ReferenceArrayInput, } from 'react-admin';
import { Stack } from '@mui/material';

const ProductEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="reference" />
            <TextInput source="name" />
            <TextInput source="description" />
            <TextInput source="basePrice" />
            <BooleanInput source="active" />
            <ReferenceArrayInput source="name" reference="categories" label="Categories" />
            <ArrayInput source="combinations">
                <SimpleFormIterator>
                    <Stack direction="row" gap={1}>
                    <TextInput source="reference" />
                    <NumberInput source="price" />
                    <NumberInput source="impactOnPrice" />
                    <NumberInput source="quantity" />
                    <BooleanInput source="active" />
                    </Stack>
                    <ArrayInput source="attributeValues">
                        <SimpleFormIterator>
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
