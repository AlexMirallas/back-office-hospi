import { BooleanField, DateField, Show, SimpleShowLayout, TextField, NumberField, ReferenceManyField, Datagrid, ReferenceField, ArrayField,SingleFieldList,ChipField} from 'react-admin';

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
            <ArrayField source="categories" >
                <SingleFieldList linkType={false}>
                    <ChipField source="name" size="medium" />
                </SingleFieldList>
            </ArrayField>
        </SimpleShowLayout>
    </Show>
)};

export default ProductShow;
