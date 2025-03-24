import { BooleanField, DateField, Show, SimpleShowLayout, TextField } from 'react-admin';

const ProductShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="reference" />
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="basePrice" />
            <BooleanField source="active" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
        </SimpleShowLayout>
    </Show>
);

export default ProductShow;
