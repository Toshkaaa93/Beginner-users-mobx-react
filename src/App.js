import React, { useEffect } from "react";
import "./index.scss";
import { Success } from "./components/Success";
import { Users } from "./components/Users/users";
import { observer } from "mobx-react-lite";
import usersStore from "./store/users-store";

// Тут список пользователей: https://reqres.in/api/users

const App = observer(() => {

  const {success} = usersStore;

  useEffect(() => {
    usersStore.fetchUsers();
  }, []);

  return (
    <div className="App">
      {success ? (
        <Success/>
      ) : (
        <Users/>
      )}
    </div>
  );
});

export default App;
