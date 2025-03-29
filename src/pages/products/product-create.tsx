import { Create, SimpleForm, TextInput, BooleanInput, NumberInput, ReferenceArrayInput, AutocompleteArrayInput } from 'react-admin';

const ProductCreate = () => {
    return ( 
        <Create>
            <SimpleForm>
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
                <AutocompleteArrayInput />
            </ReferenceArrayInput>
            </SimpleForm>    
        </Create>
     );
}
 
export default ProductCreate;