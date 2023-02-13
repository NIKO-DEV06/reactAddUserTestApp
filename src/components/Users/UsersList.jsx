import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  const deleteHandler = (id) => {
    props.newUsersList(props.users.filter((user) => user.id !== id));
  };

  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
            <Button onClick={() => deleteHandler(user.id)}>Delete</Button>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
