import trustwallet from "../assets/trustwallet.jpeg";
import metamask from "../assets/metamask.png";
import safepal from "../assets/safepal.jpeg";
import maestro from "../assets/maestro.png";
import { useState } from "react";
import ConnectModal from "./connectModal";

const Connectwallet = () => {
  const [name, setName] = useState("");
  const connectwallet = (e) => {
    setName(e);
    window.my_modal_6.showModal();
  };
  return (
    <>
      <dialog id="my_modal_3" className="modal w-screen bg-white">
        <form
          method="dialog"
          className="modal-box max-w-[90vw] md:max-w-[45rem] w-full md:w-[80%] bg-white mx-auto grid grid-cols-2 gap-[0.2rem] justify-center items-center"
        >
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <div
            onClick={() => {
              connectwallet("maestro");
            }}
            className="flex flex-col items-center justify-center cursor-pointer gap-[0.3rem]"
          >
            <img src={maestro} className="w-[150px] h-[150px] object-contain" />
            <p className="text-center">Maestro Wallet</p>
          </div>
          <div
            onClick={() => {
              connectwallet("Trust Wallet");
            }}
            className="flex flex-col items-center justify-center cursor-pointer gap-[0.3rem]"
          >
            <img src={trustwallet} className="w-[150px] h-[150px]" />
            <p className="text-center">Trust Wallet</p>
          </div>
          <div
            onClick={() => {
              connectwallet("safepal");
            }}
            className="flex flex-col items-center justify-center cursor-pointer gap-[0.3rem]"
          >
            <img src={safepal} className="w-[150px] h-[150px]" />
            <p className="text-center">SafePal</p>
          </div>
          <div
            onClick={() => {
              connectwallet("metamask");
            }}
            className="flex flex-col items-center justify-center cursor-pointer gap-[0.3rem]"
          >
            <img src={metamask} className="w-[150px] h-[150px]" />
            <p className="text-center">MetaMask</p>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <ConnectModal setName={setName} name={name} />
    </>
  );
};

export default Connectwallet;
