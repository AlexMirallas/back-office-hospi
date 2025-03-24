import { BooleanField, NumberField, Show, SimpleShowLayout, TextField } from 'react-admin';

const CategoryShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <BooleanField source="active" />
            <NumberField source="position" />
        </SimpleShowLayout>
    </Show>
);

export default CategoryShow;