import { BooleanField, NumberField, Show, SimpleShowLayout, TextField, FunctionField } from 'react-admin';

const AttributeShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <NumberField source="position" />
            <BooleanField source="active" />
            <FunctionField label="Values" render={record => record.values.map((value: any) => value.value).join(', ')}   /> 
        </SimpleShowLayout>
    </Show>
);

export default AttributeShow;