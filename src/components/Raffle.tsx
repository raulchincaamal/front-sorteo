import Lottie from "lottie-react";
import MarryChristmas from "../assets/anim/merry_christmas.json";
import Burst from "../assets/anim/burst.json";
import Burst2 from "../assets/anim/burst_2.json";
import { GiftForm } from "./GiftForm";
import GiftBoxLoading from "./GiftBoxLoading";
import Logo from "./Logo";

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
      <Lottie animationData={Burst} className="absolute right-0 w-48" />
      <Lottie
        animationData={Burst2}
        className="absolute bottom-36 left-20 w-24"
      />
    </div>
  );
};

export default Raffle;
