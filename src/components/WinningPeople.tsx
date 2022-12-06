import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import Confetti from "../assets/anim/confetti.json";
import { IWinningPerson } from "../interfaces";
import WinningPerson from "./WinningPerson";
import macroLogo from "../assets/img/macro-logo.png";
import { useState } from "react";
import { downloadWins } from "../api/raffleAPI";
import { downloadFile } from "../utils";

const WinningPeople = () => {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const giftName = localStorage.getItem("gift-name");
  const winningPeople = (JSON.parse(
    localStorage.getItem("winning-people") || ""
  ) || []) as IWinningPerson[];

  const containsMorePeople = winningPeople.length > 5;

  const handleDownloadWinningPeople = async(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setDisabled(true);
    const { data } = await downloadWins();
    downloadFile(data);
    setDisabled(false);
  }

  return (
    <div className="relative flex flex-col items-center pt-4 p-6 min-h-screen" style={
      { backgroundImage: 'url(../../src/assets/img/background.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <div className="flex gap-4 absolute z-0 top-0 bottom-0">
        <Lottie animationData={Confetti} className="w-100" />
        <Lottie animationData={Confetti} className="w-100" />
      </div>
      <div className="flex flex-col items-center mb-6">
        <img className="w-60" src={macroLogo} alt="macroLogo" />
        <h2 className="text-4xl font-bold mt-6">Ganadores</h2>
        <h5 className="text-style text-2xl">Premio: {giftName}</h5>
      </div>
      <div
        className={`${
          containsMorePeople ? "grid grid-cols-2 gap-x-4 gap-y-4 auto-rows-max" : "flex flex-col gap-4"
        } mb-4 h-81 overflow-auto z-10`}
      >
        {winningPeople.map(
          ({ id_personal, nombre_personal, puesto_personal }, index) => (
            <WinningPerson
              key={id_personal}
              position={index}
              name={nombre_personal}
              job={puesto_personal}
            />
          )
        )}
      </div>
      <div className="flex gap-4 flex-col md:flex-row">
        <button className="btn-secondary w-64 z-10 text-primary-macro flex gap-1" onClick={handleDownloadWinningPeople} disabled={disabled}>
          <span>Lista de ganadores</span>
          <svg
            width="14"
            height="18"
            viewBox="0 0 14 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6256 16.6454C12.8047 16.6454 12.9763 16.7166 13.1029 16.8431C13.2295 16.9697 13.3007 17.1414 13.3007 17.3205C13.3007 17.4995 13.2295 17.6712 13.1029 17.7978C12.9763 17.9244 12.8047 17.9955 12.6256 17.9955L0.925034 18C0.746004 18 0.574306 17.9289 0.447713 17.8023C0.321119 17.6757 0.25 17.504 0.25 17.325C0.25 17.1459 0.321119 16.9742 0.447713 16.8476C0.574306 16.7211 0.746004 16.6499 0.925034 16.6499L12.6256 16.6463V16.6454ZM6.68352 0.00720027L6.77533 0.00089998C6.93845 0.000906859 7.09605 0.0599813 7.21899 0.167199C7.34192 0.274416 7.42188 0.422523 7.44406 0.584129L7.45036 0.675934L7.44946 12.993L10.7994 9.64488C10.9137 9.53056 11.0653 9.46105 11.2265 9.44899C11.3877 9.43694 11.5478 9.48313 11.6779 9.57918L11.7544 9.64488C11.8686 9.75929 11.9379 9.91087 11.9498 10.0721C11.9617 10.2333 11.9153 10.3934 11.8192 10.5233L11.7535 10.5989L7.25595 15.0965C7.14166 15.2108 6.99013 15.2803 6.82892 15.2923C6.66772 15.3044 6.50754 15.2582 6.37751 15.1622L6.301 15.0965L1.79808 10.5998C1.67699 10.4795 1.60596 10.3178 1.59931 10.1473C1.59265 9.97672 1.65085 9.80997 1.76219 9.6806C1.87354 9.55123 2.02976 9.46884 2.19941 9.45002C2.36906 9.43121 2.53953 9.47735 2.67652 9.57918L2.75213 9.64398L6.09939 12.9867L6.10029 0.675034C6.1003 0.511912 6.15937 0.35431 6.26659 0.231374C6.37381 0.108438 6.52192 0.0284849 6.68352 0.00630029L6.77533 0L6.68352 0.00630029V0.00720027Z"
              fill="#0047BA"
            />
          </svg>
        </button>
        <button className="btn-primary w-64 z-10" onClick={() => navigate("/")} disabled={disabled}>
          Nuevo sorteo
        </button>
      </div>
    </div>
  );
};

export default WinningPeople;
