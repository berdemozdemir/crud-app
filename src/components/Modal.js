function Modal({ onHideModal, children }) {
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center"
        onClick={onHideModal}
      ></div>

      <dialog
        open
        className="z-10 absolute top-[150px]  w-[520px] h-[400px] bg-white rounded-md flex flex-col "
      >
        <header className="border-b-2 flex justify-between px-[10%] py-2 mb-8 items-center text-center">
          <h2 className="border-b-red-800 font-bold opacity-70">Basic Modal</h2>
          <p className="opacity-50 cursor-pointer" onClick={onHideModal}>X</p>
        </header>

        {children}
      </dialog>
    </>
  );
}

export default Modal;
