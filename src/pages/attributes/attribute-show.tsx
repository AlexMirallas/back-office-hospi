import { BooleanField, NumberField, Show, SimpleShowLayout, TextField } from 'react-admin';

const AttributeShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <NumberField source="position" />
            <BooleanField source="active" />
        </SimpleShowLayout>
    </Show>
);

export default AttributeShow;