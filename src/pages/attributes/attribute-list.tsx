import { BooleanField, Datagrid, List, NumberField, TextField, EditButton } from 'react-admin';

const AttributeList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <NumberField source="position" />
            <BooleanField source="active" />
            <EditButton label="Modifier" />
        </Datagrid>
    </List>
);

export default AttributeList;