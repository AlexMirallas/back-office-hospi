import { BooleanField, Datagrid, DateField, List, TextField } from 'react-admin';

const ProductList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="reference" />
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="basePrice" />
            <BooleanField source="active" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
        </Datagrid>
    </List>
);

export default ProductList;
