import { BooleanField, DateField, Show, SimpleShowLayout, TextField, NumberField, ReferenceManyField, SingleFieldList } from 'react-admin';

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
            <ReferenceManyField source="categories" reference="categories" target="productId">
                <SingleFieldList />
            </ReferenceManyField>
        </SimpleShowLayout>
    </Show>
)};

export default ProductShow;
