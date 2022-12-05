import Lottie from "lottie-react";
import MarryChristmas from "../assets/anim/merry_christmas.json";
import { GiftForm } from "./GiftForm";
import GiftBoxLoading from "./GiftBoxLoading";
import Logo from "./Logo";
import Group2 from "../assets/img/Group-2.svg";
import Group from "../assets/img/Group.svg";

const Raffle = () => {
  return (
    <div className="grid place-content-center h-screen relative custom-background overflow-hidden">
      <GiftBoxLoading />
      <div className="flex flex-col items-center mt-12">
        <h2 className="text-5xl text-neutral-50 font-semibold">¡Gran Rifa!</h2>
        <Logo width="400" color="#fff" />
      </div>
      <div className="flex justify-center gap-8 mt-16">
        <GiftForm />
        <Lottie
          animationData={MarryChristmas}
          className="relative w-1/3 bottom-17"
        />
      </div>
      <img className="absolute right-16 top-16 w-48" src={Group2} alt="burst" />
      <img className="absolute bottom-36 left-20 w-24" src={Group} alt="burst" />
    </div>
  );
};

export default Raffle;
