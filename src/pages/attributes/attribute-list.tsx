import { BooleanField, List, NumberField, TextField, EditButton } from 'react-admin';
import { MyDatagrid } from '../../components/MyDatagrid';

const AttributeList = () => (
    <List>
        <MyDatagrid>
            <TextField source="id" />
            <TextField source="name" />
            <NumberField source="position" />
            <BooleanField source="active" />
            <EditButton label="Modifier" />
        </MyDatagrid>
    </List>
);

export default AttributeList;