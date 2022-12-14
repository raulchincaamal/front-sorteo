import Lottie from "lottie-react";
import { useIsMutating } from "react-query";
import GiftBox from "../assets/anim/gift-box.json";

const GiftBoxLoading = () => {
  const isMutating = useIsMutating() > 0;
  return isMutating ? (
    <div className="h-screen w-screen absolute bg-white flex justify-center z-10">
      <Lottie animationData={GiftBox} className="w-11/12" />
    </div>
  ) : null;
};

export default GiftBoxLoading;
