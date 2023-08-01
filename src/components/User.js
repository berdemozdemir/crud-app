import KalpSVg from "../icons/kalpSVG";
import KalemSVG from "../icons/KalemSVG";
import TrashSVG from "../icons/TrashSVG";
import PhoneSVG from "../icons/PhoneSVG";
import NetworkSVG from "../icons/NetworkSVG";
import MailSVG from "../icons/MailSVG";

const User = ({
  name,
  email,
  phone,
  website,
  avatar,
  onDeleteItem,
  id,
  onShowModal,
  users,
  setUsers
}) => {
  return (
    <li className="flex flex-col p-4  bg-white shadow-md h-auto min-w-[350px] ">
      {/* tasarimi responsive tasarim yap emreye gostermeden once */}

      <div className=" bg-gray-500 flex justify-center">
        <img
          alt={name}
          src={avatar}
          className="max-w-[100%] max-h-[150px] w-auto"
        />

        {/* arkaplanlarin butun cardi kaplamasi gerek */}
      </div>

      <section className=" mt-4 ml-2 [&>p]:text-sm [&>p]:opacity-70">
        <h3 className="text-500 text-l mb-1">{name}</h3>

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
        <div className="border">
          <KalpSVg />
        </div>
        <div className="border-x-2 px-8" onClick={onShowModal}>
          <KalemSVG />
        </div>
        <div onClick={() => onDeleteItem(id)}>
          <TrashSVG />
        </div>
      </footer>
    </li>
  );
};

export default User;
