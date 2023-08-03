import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "../store/modal-slice";

function SetUser({ selectedUser, users, onHideModal }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedUser) {
      setFormData({
        ...selectedUser,
      });
    }
  }, [selectedUser]);

  function submitHandler(e) {
    e.preventDefault();

    const findIndex = users.findIndex((item) => item.id === formData.id);

    const newData = [...users];
    newData[findIndex] = formData;

    // setUsers(newData);
    dispatch(modalActions.setUsers(newData))
    dispatch(modalActions.hideModalHandler());
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="[&>div>input]:w-3/5 [&>div>input]:opacity-70 [&>div>input]:m-2 [&>div>input]:rounded [&>div>input]:border-[2px] [&>div>label]:before:text-red-700  [&>div>label]:before:content-['*']">
        <div className="flex justify-end mr-4 ">
          <label className="my-auto opacity-75">Name:</label>
          <input
            placeholder={formData.name}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="flex justify-end mr-4">
          <label className="my-auto opacity-75 before:content-['*']">
            Email:
          </label>
          <input
            placeholder={formData.email}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <div className="flex justify-end mr-4">
          <label className="my-auto opacity-75 before:content-['*'] ">
            Phone:
          </label>
          <input
            placeholder={formData.phone}
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>

        <div className="flex justify-end mr-4">
          <label className="my-auto opacity-75 before:content-['*']">
            Website:
          </label>
          <input
            placeholder={formData.website}
            value={formData.website}
            onChange={(e) =>
              setFormData({ ...formData, website: e.target.value })
            }
          />
        </div>
      </div>

      <div className="border-t-2 flex justify-end [&>button]:mr-4 mt-[15%]">
        <button
          type="button"
          onClick={() => dispatch(modalActions.hideModalHandler())}
          className="rounded-md py-1 px-4 mt-4 border-[2px] opacity-70 hover:border-blue-600 hover:text-blue-600"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="text-white bg-blue-600 border-[2px] py-1 px-4 rounded-md mt-4 hover:bg-blue-400"
        >
          OK
        </button>
      </div>
    </form>
  );
}

export default SetUser;
