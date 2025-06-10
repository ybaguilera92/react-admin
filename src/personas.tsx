import {
    List,
    Datagrid,
    TextField,
    NumberField,
    Edit,
    SimpleForm,
    TextInput,
    NumberInput,
    Create,
    EditButton,
    SelectInput,
    DeleteWithConfirmButton,
  } from "react-admin";
import { useMatch, useNavigate } from 'react-router-dom';
import { Dialog } from '@mui/material';

const PersonaFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
];

const PersonaEditDialog = () => {
    const navigate = useNavigate();
    const handleClose = () => {
        navigate('/personas');
    };
    return (
        <Dialog open onClose={handleClose}>
            <PersonaEdit />
        </Dialog>
    );
};

const PersonaCreateDialog = () => {
    const navigate = useNavigate();
    const handleClose = () => {
        navigate('/personas');
    };
    return (
        <Dialog open onClose={handleClose}>
            <PersonaCreate />
        </Dialog>
    );
};

  export const PersonaList = () => {
    const match = useMatch('/personas/create');
    const matchEdit = useMatch('/personas/:id');
    return (
        <>
            <List filters={PersonaFilters}>
                <Datagrid bulkActionButtons={false} rowClick="edit">
                    <TextField source="nombre" />
                    <TextField source="apellidos" />
                    <NumberField source="edad" />
                    <NumberField source="peso" />
                    <TextField source="sexo" />
                    <EditButton />
                    <DeleteWithConfirmButton />
                </Datagrid>
            </List>
            {match && <PersonaCreateDialog />}
            {matchEdit && matchEdit.params.id !== "create" && <PersonaEditDialog />}
        </>
    );
  };
  
  export const PersonaEdit = () => (
    <Edit>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="nombre" />
        <TextInput source="apellidos" />
        <NumberInput source="edad" />
        <NumberInput source="peso" />
        <SelectInput source="sexo" choices={[
            { id: 'Masculino', name: 'Masculino' },
            { id: 'Femenino', name: 'Femenino' },
            { id: 'Otro', name: 'Otro' },
        ]} />
      </SimpleForm>
    </Edit>
  );
  
  export const PersonaCreate = () => (
    <Create>
      <SimpleForm>
        <TextInput source="nombre" />
        <TextInput source="apellidos" />
        <NumberInput source="edad" />
        <NumberInput source="peso" />
        <SelectInput source="sexo" choices={[
            { id: 'Masculino', name: 'Masculino' },
            { id: 'Femenino', name: 'Femenino' },
            { id: 'Otro', name: 'Otro' },
        ]} />
      </SimpleForm>
    </Create>
  ); 