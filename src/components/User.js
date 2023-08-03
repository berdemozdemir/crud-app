import KalpSVg from "../icons/kalpSVG";
import KalemSVG from "../icons/KalemSVG";
import TrashSVG from "../icons/TrashSVG";
import PhoneSVG from "../icons/PhoneSVG";
import NetworkSVG from "../icons/NetworkSVG";
import MailSVG from "../icons/MailSVG";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../store/modal-slice";

const User = ({ name, email, phone, website, avatar, id, setSelectedUser,item }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.modal.users);

  return (
    <li className="flex flex-col p-4 mx-auto bg-white shadow-md h-auto min-w-[210px] w-full sm:w-[30%] lg:w-[24%]">
      {/* tasarimi responsive tasarim yap emreye gostermeden once */}

      <div className=" bg-gray-500 flex justify-center">
        <img
          alt={name}
          src={avatar}
          className="max-w-[100%] max-h-[150px] w-auto"
        />

        {/* arkaplanlarin butun cardi kaplamasi gerek */}
      </div>

      <section className=" mt-4 ml-2 [&>p]:opacity-70 [&>p]:text-xs">
        <h3 className="text-xs font-bold text-l mb-1">{name}</h3>

        <p>
          <span className="inline-block">
            <MailSVG />
          </span>
          {email}
        </p>

        <p className="block">
          <span className="inline-block">
            <PhoneSVG />
          </span>
          {phone}
        </p>

        <p className="inline">
          <span>
            <NetworkSVG />
          </span>
          {website}
        </p>
      </section>

      <footer className="flex m-4 border-[2px] bg-gray-100 justify-evenly py-1">
        {/* footer saga sola ve taban degmelei tasarim bi tik farkli oldu */}
        <div>
          <KalpSVg />
        </div>
        <div
          className="border-x-2 px-8"
          onClick={() => {
            dispatch(modalActions.toggle(true));
            setSelectedUser(item);
          }}
        >
          <KalemSVG />
        </div>
        <div
          onClick={() =>
            dispatch(
              modalActions.setUsers(users.filter((item) => item.id !== id))
            )
          }
        >
          <TrashSVG />
        </div>
      </footer>
    </li>
  );
};

export default User;
