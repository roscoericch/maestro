import logo from "./assets/maestrologo.png";
import sniper from "./assets/sniperbot-maestro-crop.png";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <>
      <div
        className="min-h-screen grid grid-cols-1 items-start"
        style={{
          background: "linear-gradient(RGBA(84, 0, 54, 0.54),#594ffc",
        }}
      >
        <div
          className="navbar bg-black p-[1rem]"
          style={{
            background:
              "linear-gradient(RGBA(84, 0, 54, 0.54), RGBA(0, 0, 0, 0))",
          }}
        >
          <div className="flex-1">
            <a className="bt btnghost normal-case text-xl">
              <img alt="logo" className="w-[100px] h-[76px]" src={logo} />
            </a>
          </div>
          <div className="flex-none">
            <button
              style={{
                background: "linear-gradient(90deg,#594ffc,#8550ef",
              }}
              className="bg[#ecc31f] text-white hover:bg[#1f044f] py-[3px] md:py-[5px] px-[10px] md:px-[30px] font-[400] rounded-[10px] w-full text-[131.25%]"
            >
              Connect Wallet
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center gap-[0.5rem]">
          <div className="flex flex-col items-center justify-center">
            <img alt="logo" className="w-[300px] h-[200px]" src={sniper} />
            <motion.h1
              // initial={{ scale: 1 }}
              animate={{ scale: 1.05, transformOrigin: "50% 50% 0px" }}
              transition={{
                ease: "easeInOut",
                duration: 1.2,
                repeat: Infinity,
                type: "keyframes",
              }}
              className="font-[300] text-[268.75%] text-[#FFF] text-center [text-shadow: 0px 5px 5px RGBA(0, 59, 180, 0.98)]"
            >
              Maestro Sniper Bot
            </motion.h1>
          </div>
          <div className="text-center text-[16px] md:text-[25px] text-white w-[80%] mx-auto">
            <p>
              Be on the top of buys, sells, burns and price changes for crypto
              tokens across multiple blockchains.
            </p>
            <p>
              Take advantage of our self-service portal to solve all your
              technical problems, get unlimited help resources including video
              tutorials, bot settings templates and much more.{" "}
            </p>
          </div>
          <div className="flex items-center justify-center w-[30%] mx-auto">
            <button
              onClick={() => window.my_modal_2.showModal()}
              className="bg-[#ecc31f] text-[#1f044f] hover:bg-[#1f044f] hover:text-[#ecc31f] py-[10px] px-[30px] font-[400] rounded-[10px] w-full text-[131.25%]"
            >
              Begin
            </button>
          </div>
          <div className="text-center text-[20px] md:text-[30px] text-white w-[60%] mx-auto">
            <p>
              With more than 200k+ active traders daily, we have recorded excess
              of $5M transactions in volume and counting.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mx-auto w-fit">
            <span className="text-center text-[15px] md:text-[20px] text-white w-full">
              Join our referral program today and earn with your friends
            </span>
            <button className="bg-[White] text-[#1f044f] hover:bg-[#1f044f] hover:text-[#FFF] py-[5px] px-[10px] font-[400] rounded-[10px] w-full text-[131.25%]">
              Join Us
            </button>
          </div>
        </div>
        <div className="self-end text-center flex flex-col gap-[0.3rem] p-[1rem]">
          <div className="flex gap-[0.5rem] justify-center">
            <FaTwitter className="text-white" />
            <FaYoutube className="text-white" />
          </div>
          <span>&copy; 2023</span>
        </div>
      </div>
      <dialog id="my_modal_2" className="modal w-screen bg-black/[80%]">
        <form
          method="dialog"
          className="modal-box max-w-[90vw] md:max-w-[45rem] w-full md:w-[80%] bg-black/[10%] grid grid-cols-1"
        >
          <h3 className="font-bold w-full md:w-[80%] mx-auto text-[25px] md:text-[35px] text-center mb-[0.8rem]">
            Select the problem
          </h3>
          <div className="grid grid-cols-1 gap-[1rem] w-full md:w-[80%] items-center justify-center mx-auto text-[25px]">
            <span className="flex justify-center w-full">
              <a
                className="text-[25px] text-center hover:px-[1rem] hover:py-[0.1rem] hover:bg-gradient-to-r from-[#594ffc] to-[#8550ef] rounded-[8px]"
                href="#"
              >
                Slippage
              </a>
            </span>
            <span className="flex justify-center w-full">
              <a
                className="text-[25px] text-center hover:px-[1rem] hover:py-[0.1rem] hover:bg-gradient-to-r from-[#594ffc] to-[#8550ef] rounded-[8px]"
                href="#"
              >
                Copy Trade
              </a>
            </span>
            <span className="flex justify-center w-full">
              <a
                className="text-[25px] hover:px-[1rem] hover:py-[0.1rem] hover:bg-gradient-to-r from-[#594ffc] to-[#8550ef] rounded-[8px]"
                href="#"
              >
                My Trades
              </a>
            </span>
            <span className="flex justify-center w-full">
              <a
                className="text-[25px] hover:px-[1rem] hover:py-[0.1rem] hover:bg-gradient-to-r from-[#594ffc] to-[#8550ef] rounded-[8px]"
                href="#"
              >
                Wallets
              </a>
            </span>
            <span className="flex justify-center w-full">
              <a
                className="text-[25px] text-center hover:px-[1rem] hover:py-[0.1rem] hover:bg-gradient-to-r from-[#594ffc] to-[#8550ef] rounded-[8px]"
                href="#"
              >
                Premium Subscription
              </a>
            </span>
            <span className="flex justify-center w-full text-left">
              <a
                className="text-[25px] text-center hover:px-[1rem] hover:py-[0.1rem] hover:bg-gradient-to-r from-[#594ffc] to-[#8550ef] rounded-[8px]"
                href="#"
              >
                Basic and Advanced bot settings
              </a>
            </span>
            <span className="flex justify-center w-full">
              <a
                className="text-[25px] hover:px-[1rem] hover:py-[0.1rem] hover:bg-gradient-to-r from-[#594ffc] to-[#8550ef] rounded-[8px]"
                href="#"
              >
                Others
              </a>
            </span>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default App;
