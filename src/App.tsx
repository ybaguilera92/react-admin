import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./users";
import { PersonaList } from "./personas";
import { Dashboard } from "./Dashboard";
import authProvider from "./authProvider";
import MyLoginPage from "./MyLoginPage";
import MyLayout from "./MyLayout";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin 
    dataProvider={dataProvider} 
    authProvider={authProvider}
    loginPage={MyLoginPage}
    layout={MyLayout}
    dashboard={Dashboard}
  >
    <Resource 
      name="users" 
      list={UserList} 
      create={UserList} 
      edit={UserList} 
      recordRepresentation="name" 
    />
    <Resource 
      name="personas" 
      list={PersonaList} 
      create={PersonaList} 
      edit={PersonaList} 
      recordRepresentation={(record) => `${record.nombre} ${record.apellidos}`} 
    />
  </Admin>
);

export default App;
