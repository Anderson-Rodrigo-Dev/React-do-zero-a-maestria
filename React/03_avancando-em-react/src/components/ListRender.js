import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Anderson", "Fátima", "Tereza"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Anderson", age: 28 },
    { id: 2, name: "Fátima", age: 32 },
    { id: 3, name: "Tereza", age: 67 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id))
  }

  return (
    <div>
      <ul>
        {list.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}><p>O usuário {user.name} tem {user.age} anos.</p></li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
