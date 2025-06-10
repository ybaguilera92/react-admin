import {
  List,
  Datagrid,
  TextField,
  EmailField,
  Edit,
  SimpleForm,
  TextInput,
  Create,
  EditButton,
  Filter,
  DeleteWithConfirmButton,
} from "react-admin";
import { useMatch, useNavigate } from 'react-router-dom';
import { Dialog } from '@mui/material';

const UserFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
];

const UserEditDialog = () => {
    const navigate = useNavigate();
    const handleClose = () => {
        navigate('/users');
    };
    return (
        <Dialog open onClose={handleClose}>
            <UserEdit />
        </Dialog>
    );
};

const UserCreateDialog = () => {
    const navigate = useNavigate();
    const handleClose = () => {
        navigate('/users');
    };
    return (
        <Dialog open onClose={handleClose}>
            <UserCreate />
        </Dialog>
    );
};

export const UserList = () => {
    const match = useMatch('/users/create');
    const matchEdit = useMatch('/users/:id');

    return (
        <>
            <List filters={UserFilters}>
                <Datagrid bulkActionButtons={false} rowClick="edit">
                    <TextField source="id" />
                    <TextField source="name" />
                    <EmailField source="email" />
                    <TextField source="phone" />
                    <TextField source="website" />
                    <TextField source="company.name" />
                    <EditButton />
                    <DeleteWithConfirmButton />
                </Datagrid>
            </List>
            {match && <UserCreateDialog />}
            {matchEdit && matchEdit.params.id !== "create" && <UserEditDialog />}
        </>
    );
};

export const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="phone" />
      <TextInput source="website" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="phone" />
      <TextInput source="website" />
    </SimpleForm>
  </Create>
); 