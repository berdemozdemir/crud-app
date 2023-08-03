import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import User from "./components/User";
import Modal from "./UI/Modal";
import SetUser from "./components/SetUser";
import { getAllusers, modalActions } from "./store/modal-slice";

function App() {
  const users = useSelector((state) => state.modal.users);

  const [selectedUser, setSelectedUser] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllusers());
  }, [dispatch]);
  console.log(selectedUser);
  function takeAvatar(avatar) {
    return `https://avatars.dicebear.com/v2/avataaars/${avatar}.svg?options[mood][]=happy`;
  }

 
  const showCart = useSelector((state) => state.modal.modaIsVisible);

  return (
    <>
      {showCart && (
        <Modal >
          <SetUser
            selectedUser={selectedUser}
            users={users}

          />
        </Modal>
      )}
      <ul className="bg-[#f8f9fa] flex py-12 flex-wrap gap-y-4">
        {users.map((item) => (
          <User
            setSelectedUser={setSelectedUser}
            item={item}
            users={users}
            key={item.id}
            id={item.id}
            name={item.name}
            email={item.email}
            phone={item.phone}
            website={item.website}
            avatar={takeAvatar(item.username)}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
