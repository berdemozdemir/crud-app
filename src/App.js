import React, { useEffect, useState } from "react";
import User from "./components/User";
import Modal from "./components/Modal";
import SetUser from "./components/SetUser";

function App() {
  const [users, setUsers] = useState([]);
  const [modaIsVisible, setModalIsVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  function takeAvatar(avatar) {
    return `https://avatars.dicebear.com/v2/avataaars/${avatar}.svg?options[mood][]=happy`;
  }

  function removeItemHandler(id) {
    setUsers(users.filter((item) => item.id !== id));
  }

  function showModalHandler(user) {
    setSelectedUser(user);
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      {modaIsVisible && (
        <Modal onHideModal={hideModalHandler}>
          <SetUser
            selectedUser={selectedUser}
            setUsers={setUsers}
            users={users}
            onHideModal={hideModalHandler}
          />
        </Modal>
      )}
      <ul className="bg-[#f8f9fa] flex gap-4 place-items-center py-12 flex-wrap mx-auto">
        {users.map((item) => (
          <User
            users={users}
            setUsers={setUsers}
            key={item.id}
            id={item.id}
            name={item.name}
            email={item.email}
            phone={item.phone}
            website={item.website}
            avatar={takeAvatar(item.username)}
            onShowModal={() => showModalHandler(item)}
            onDeleteItem={removeItemHandler}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
