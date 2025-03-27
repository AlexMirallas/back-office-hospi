import { ArrayInput, BooleanInput, Edit, NumberInput, SimpleForm, SimpleFormIterator, TextInput } from 'react-admin';
import { Stack } from '@mui/material';
const AttributeEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
            <NumberInput source="position" />
            <BooleanInput source="active" />
                <ArrayInput source="values" >
                   <SimpleFormIterator disableReordering>
                   <Stack direction="row" gap={2}>
                        <TextInput source="value" />
                        <TextInput source="color" label="Color" />
                        <NumberInput source="position" />
                    </Stack>
                    </SimpleFormIterator>
                </ArrayInput>           
        </SimpleForm>
    </Edit>
);

export default AttributeEdit;