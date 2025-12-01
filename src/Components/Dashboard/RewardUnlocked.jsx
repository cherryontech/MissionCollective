import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "../../styles/RewardUnlocked.css";

const layout = {
  fit: "fit-height",
  align: [0.5, 0.5],
};

export default function RewardUnlocked() {
  return (
    <div className="rewardUnlockedContainer">
      <h1>Reward Unlocked!</h1>
      <div className="animations">
        <DotLottieReact
          src="https://lottie.host/2b6403b7-3511-447a-8f22-cfdfdabfc500/RUbDVg5LNJ.lottie"
          loop
          autoplay
          layout={layout}
        />
        <DotLottieReact
          src="https://lottie.host/95bab056-ba9d-44e2-ba99-b59140a3d6d2/eTRFWLrkDy.lottie"
          loop
          autoplay
          layout={layout}
        />
      </div>
      <div className="rewardUnlockedButtons">
        <button className="secondaryButton">Set New Goal</button>
        <button>Claim Reward</button>
      </div>
    </div>
  );
}
