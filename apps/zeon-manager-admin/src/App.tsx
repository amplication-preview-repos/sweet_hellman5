import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CommentsList } from "./comments/CommentsList";
import { CommentsCreate } from "./comments/CommentsCreate";
import { CommentsEdit } from "./comments/CommentsEdit";
import { CommentsShow } from "./comments/CommentsShow";
import { ProjectsList } from "./projects/ProjectsList";
import { ProjectsCreate } from "./projects/ProjectsCreate";
import { ProjectsEdit } from "./projects/ProjectsEdit";
import { ProjectsShow } from "./projects/ProjectsShow";
import { TasksList } from "./tasks/TasksList";
import { TasksCreate } from "./tasks/TasksCreate";
import { TasksEdit } from "./tasks/TasksEdit";
import { TasksShow } from "./tasks/TasksShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"zeon-manager"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Comments"
          list={CommentsList}
          edit={CommentsEdit}
          create={CommentsCreate}
          show={CommentsShow}
        />
        <Resource
          name="Projects"
          list={ProjectsList}
          edit={ProjectsEdit}
          create={ProjectsCreate}
          show={ProjectsShow}
        />
        <Resource
          name="Tasks"
          list={TasksList}
          edit={TasksEdit}
          create={TasksCreate}
          show={TasksShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
