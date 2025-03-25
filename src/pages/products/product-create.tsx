import { Create, SimpleForm, TextInput, BooleanInput, NumberInput, ReferenceArrayInput } from 'react-admin';

const ProductCreate = () => {
    return ( 
        <Create>
            <SimpleForm>
                <TextInput source="reference" />
                <TextInput source="name" />
                <TextInput source="description" />
                <NumberInput source="basePrice" />
                <BooleanInput source="active" />
                <ReferenceArrayInput source="categories" reference="categories" target="productId"/>
            </SimpleForm>    
        </Create>
     );
}
 
export default ProductCreate;