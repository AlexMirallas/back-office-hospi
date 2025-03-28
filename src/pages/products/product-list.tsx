import { BooleanField, DateField, List, NumberField, TextField, EditButton, SearchInput, FunctionField } from 'react-admin';
import { MyDatagrid } from '../../components/MyDatagrid';

const ProductList = () => {

    const postFilters =[<SearchInput source="q" alwaysOn/>];

    return (
     <List filters={postFilters}>
        <MyDatagrid sx={{
            backgroundColor: "Lavender",
            "& .RaDatagrid-headerCell": {
                backgroundColor: "MistyRose",
                fontWeight: "bold",
                padding: "20px",
            },
        }} >
            <TextField source="id" />
            <TextField source="reference" />
            <TextField source="name" />
            <FunctionField label="description" render={(record) => `${record.description.substring(0, 50)}...`} />
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
            <EditButton label="Modifier" />
        </MyDatagrid>
    </List>
)};

export default ProductList;
