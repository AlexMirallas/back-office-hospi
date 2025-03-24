import { BooleanField, Datagrid, List, NumberField, TextField } from 'react-admin';

const CategoryList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <BooleanField source="active" />
            <NumberField source="position" />
        </Datagrid>
    </List>
);

export default CategoryList;
