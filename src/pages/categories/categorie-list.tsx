import { BooleanField, List, NumberField, TextField, EditButton } from 'react-admin';
import { MyDatagrid } from '../../components/MyDatagrid';

const CategoryList = () => (
    <List>
        <MyDatagrid>
            <TextField source="id" />
            <TextField source="name" />
            <BooleanField source="active" />
            <NumberField source="position" />
            <EditButton label="Modifier" />
        </MyDatagrid>
    </List>
);

export default CategoryList;
