import { BooleanField, Datagrid, List, NumberField, TextField, EditButton } from 'react-admin';

const CategoryList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <BooleanField source="active" />
            <NumberField source="position" />
            <EditButton label="Modifier" />
        </Datagrid>
    </List>
);

export default CategoryList;
