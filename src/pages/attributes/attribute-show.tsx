import { BooleanField, NumberField, ArrayField, Show, SimpleShowLayout, TextField, SingleFieldList } from 'react-admin';

const AttributeShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <NumberField source="position" />
            <BooleanField source="active" />
            <ArrayField source="values">
                <SingleFieldList>
                    <TextField source="value" />
                </SingleFieldList>
            </ArrayField>
        </SimpleShowLayout>
    </Show>
);

export default AttributeShow;