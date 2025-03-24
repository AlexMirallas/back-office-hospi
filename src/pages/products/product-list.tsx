import { BooleanField, Datagrid, DateField, List, NumberField, TextField } from 'react-admin';

const ProductList = () => (
    <List>
        <Datagrid sx={{
            backgroundColor: "Lavender",
            "& .RaDatagrid-headerCell": {
                backgroundColor: "MistyRose",
                fontWeight: "bold",
                padding: "20px",
            },
        }}>
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
        </Datagrid>
    </List>
);

export default ProductList;
