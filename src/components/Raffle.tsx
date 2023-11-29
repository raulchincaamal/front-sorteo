import Lottie from "lottie-react";
import ChristmasTree from "../assets/anim/christmas-tree.json";
import { GiftForm } from "./GiftForm";
import GiftBoxLoading from "./GiftBoxLoading";
import Logo from "./Logo";

const Raffle = () => {
  return (
    <div className="grid place-content-center h-screen relative overflow-hidden bg-no-repeat bg-center bg-cover bg-form">
      <GiftBoxLoading />
      <div className="flex flex-col items-center mt-12">
        <h2 className="text-5xl text-neutral-50 font-semibold">¡Gran Rifa!</h2>
        <Logo width="400" color="#fff" />
      </div>
      <div className="flex justify-center gap-8 mt-16">
        <GiftForm />
        <Lottie
          animationData={ChristmasTree}
          className="relative bottom-17"
          style={{ width: 400 }}
        />
      </div>
    </div>
  );
};

export default Raffle;
