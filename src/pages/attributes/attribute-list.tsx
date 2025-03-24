import { BooleanField, Datagrid, List, NumberField, TextField } from 'react-admin';

const AttributeList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <NumberField source="position" />
            <BooleanField source="active" />
        </Datagrid>
    </List>
);

export default AttributeList;