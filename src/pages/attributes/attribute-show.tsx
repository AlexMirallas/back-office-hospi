import { BooleanField, NumberField, ReferenceManyField, Show, SimpleShowLayout, TextField, SingleFieldList } from 'react-admin';

const AttributeShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <NumberField source="position" />
            <BooleanField source="active" />
            <ReferenceManyField reference="values" target="attributeId">
                <SingleFieldList />
            </ReferenceManyField>
        </SimpleShowLayout>
    </Show>
);

export default AttributeShow;