import { useDispatch } from "react-redux";

import { modalActions } from "../store/modal-slice";

function Modal({ children }) {
  const dispatch = useDispatch();

  return (
    <div className="fixed left-0 top-0 h-screen w-full flex justify-center items-center z-20">
      <dialog
        open
        className="z-10 w-3/4 sm:w-[520px] h-[400px] bg-white rounded-md flex flex-col "
      >
        <header className="border-b-2 flex justify-between px-[10%] py-2 mb-8 items-center text-center">
          <h2 className="border-b-red-800 font-bold opacity-70">Basic Modal</h2>
          <p
            className="opacity-50 cursor-pointer"
            onClick={() => dispatch(modalActions.hideModalHandler())}
          >
            X
          </p>
        </header>

        {children}
      </dialog>
      <div
        onClick={() => dispatch(modalActions.hideModalHandler())}
        className="z-[9]  w-full h-full bg-opacity-60 bg-black"
      ></div>
    </div>
  );
}

export default Modal;
