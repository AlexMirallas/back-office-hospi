import { BooleanField, DateField, Show, SimpleShowLayout, TextField, NumberField } from 'react-admin';

const ProductShow = () => (
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
        </SimpleShowLayout>
    </Show>
);

export default ProductShow;
