import { useEffect, useState } from "react";
import Form from "./Form";

const ConnectModal = ({ name, setName }) => {
  const [toogle, setToogle] = useState(false);
  const openForm = () => {
    window.my_modal_5.showModal();
  };
  useEffect(() => {
    const countdown = () =>
      setTimeout(() => {
        setToogle(true);
        console.log("true");
      }, 7000);
    if (name) countdown();
    return () => {
      setToogle(false);
    };
  }, [name]);
  return (
    <>
      <dialog id="my_modal_6" className="modal w-screen bg-white">
        <form
          method="dialog"
          className="modal-box max-w-[90vw] md:max-w-[45rem] w-[40%] bg-white mx-auto grid grid-cols-1 justify-center items-center gap-[2rem]"
        >
          {toogle ? (
            <div className="flex items-center gap-[2rem] border rounded-[8px] border-red-400 py-[0.5rem] px-[1.2rem]">
              <p className="text-red-400 block">Error Connecting</p>
              <button
                onClick={openForm}
                style={{
                  background: "linear-gradient(90deg,#594ffc,#8550ef",
                }}
                className="text-white hover:bg[#1f044f] py-[3px] px-[10px] font-[400] rounded-[10px] w-fit text-[131.25%]"
                id="connectButton"
              >
                connect manually
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-[1rem] border rounded-[8px] border-grey-200 py-[0.5rem] px-[1.2rem]">
              <p className="text-[16px]">Intializing...</p>
              <span className="loading loading-spinner text-[#a9a3a3]"></span>
            </div>
          )}
          <div className="border flex flex-col px-[1.2rem] py-[0.5rem] rounded-[6px]">
            <h6 className="text-[24px] uppercase">{name}</h6>
            <p className="text-[16px]">connect to {name} and more</p>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <Form />
    </>
  );
};

export default ConnectModal;
