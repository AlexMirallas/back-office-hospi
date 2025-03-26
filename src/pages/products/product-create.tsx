import { Create, SimpleForm, TextInput, BooleanInput, NumberInput, ReferenceArrayInput,SelectArrayInput } from 'react-admin';

const ProductCreate = () => {
    return ( 
        <Create>
            <SimpleForm>
                <TextInput source="reference" />
                <TextInput source="name" />
                <TextInput source="description" />
                <NumberInput source="basePrice" />
                <BooleanInput source="active" />
                <ReferenceArrayInput source="categories" reference="categories">
                    <SelectArrayInput optionText="name"  />
                </ReferenceArrayInput>
            </SimpleForm>    
        </Create>
     );
}
 
export default ProductCreate;