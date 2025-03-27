import { BooleanField, DateField, Show, SimpleShowLayout, TextField, NumberField, FunctionField } from 'react-admin';


const ProductShow = () => {

    return (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="reference" />
            <TextField source="name" />
            <TextField source="description" />
            <NumberField source="basePrice" options={{
                style: "currency",
                currency: "EUR",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            }}
            />
            <BooleanField source="active" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            <FunctionField label="Categories" render={record => record.categories.map((category: any) => category.name).join(', ')}    /> 
        </SimpleShowLayout>
    </Show>
)};

export default ProductShow;
