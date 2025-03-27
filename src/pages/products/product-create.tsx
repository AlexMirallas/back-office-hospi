import { Create, SimpleForm, TextInput, BooleanInput, NumberInput, CheckboxGroupInput, ReferenceArrayInput } from 'react-admin';
import { Stack } from '@mui/material';

const ProductCreate = () => {
    return ( 
        <Create>
            <SimpleForm>
                <TextInput source="reference" />
                <TextInput source="name" />
                <TextInput source="description" />
                <NumberInput source="basePrice" />
                <BooleanInput source="active" />
                <Stack direction="row" gap={50}>
                    <ReferenceArrayInput source="categories" reference="categories">
                        <CheckboxGroupInput optionText="name" label="Categories" defaultValue={[]}  />
                    </ReferenceArrayInput>
                </Stack>
            </SimpleForm>    
        </Create>
     );
}
 
export default ProductCreate;