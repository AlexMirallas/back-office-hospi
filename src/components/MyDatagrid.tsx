import { styled } from '@mui/system';
import { Datagrid } from 'react-admin';

export const MyDatagrid = styled(Datagrid)({
    backgroundColor: "Lavender",
    "& .RaDatagrid-headerCell": {
        backgroundColor: "MistyRose",
        fontWeight: "bold",
        padding: "20px",
    },
});