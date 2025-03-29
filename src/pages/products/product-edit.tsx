import { ArrayInput, BooleanInput, Edit, NumberInput, SimpleForm, TextInput, AutocompleteArrayInput, ReferenceArrayInput, SimpleFormIterator, ReferenceInput } from 'react-admin';
import { Stack } from '@mui/material';


const ProductEdit = () => {
   

    return(
    <Edit>
        <SimpleForm >
            <TextInput source="reference" />
            <TextInput source="name" />
            <TextInput source="description" />
            <NumberInput source="basePrice" />
            <BooleanInput source="active" />
            <ReferenceArrayInput
                reference="categories"
                source="categories"
                parse={(value) => value && value.map((v: any) => ({ id: v }))}
                format={(value) => value && value.map((v: any) => v.id)}
            >
                <AutocompleteArrayInput 
                    optionText={(choice: any) => choice.name}
                    optionValue="id"
                />
            </ReferenceArrayInput>
            <ArrayInput source="combinations">
                <SimpleFormIterator>
                    <Stack direction="row" gap={1}>
                        <TextInput source="reference" />
                        <NumberInput source="price" />
                        <NumberInput source="impactOnPrice" />
                        <NumberInput source="quantity" />
                        <BooleanInput source="active" />
                    </Stack>
                    <ArrayInput source="attributes">
                        <SimpleFormIterator>
                            <Stack direction="row" gap={1}>
                                <ReferenceInput source="value" reference="values" optionText="name" optionValue="id" />
                            </Stack>
                        </SimpleFormIterator>
                    </ArrayInput>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
)};

export default ProductEdit;
