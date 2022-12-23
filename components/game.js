import { useState } from "react";

import LevelA from "../components/level-a";
import LevelB from "../components/level-b";
import LevelC from "../components/level-c";

import Step1A from "../components/step-1a";
import Step1B from "../components/step-1b";
import Step1C from "../components/step-1c";
import Step1D from "../components/step-1d";
import Step1E from "../components/step-1e";

import Step2A from "../components/step-2a";
import Step2B from "../components/step-2b";
import Step2C from "../components/step-2c";
import Step2D from "../components/step-2d";
import Step2E from "../components/step-2e";

import Step3A from "../components/step-3a";
import Step3B from "../components/step-3b";
import Step3C from "../components/step-3c";
import Step3D from "../components/step-3d";
import Step3E from "../components/step-3e";

import End from "../components/end";

export default function Game() {
  const [step, setStep] = useState("LevelA");

  return (
    <div className="container">
      <div>
        {step === "LevelA" && <LevelA onNext={() => setStep("Step1A")} />}

        {step === "LevelB" && <LevelB onNext={() => setStep("Step2A")} />}

        {step === "LevelC" && <LevelC onNext={() => setStep("Step3A")} />}

        {step === "Step1A" && <Step1A onNext={() => setStep("Step1B")} />}

        {step === "Step1B" && <Step1B onNext={() => setStep("Step1C")} />}

        {step === "Step1C" && <Step1C onNext={() => setStep("Step1D")} />}

        {step === "Step1D" && <Step1D onNext={() => setStep("Step1E")} />}

        {step === "Step1E" && <Step1E onNext={() => setStep("LevelB")} />}

        {step === "Step2A" && <Step2A onNext={() => setStep("Step2B")} />}

        {step === "Step2B" && <Step2B onNext={() => setStep("Step2C")} />}

        {step === "Step2C" && <Step2C onNext={() => setStep("Step2D")} />}

        {step === "Step2D" && <Step2D onNext={() => setStep("Step2E")} />}

        {step === "Step2E" && <Step2E onNext={() => setStep("LevelC")} />}

        {step === "Step3A" && <Step3A onNext={() => setStep("Step3B")} />}

        {step === "Step3B" && <Step3B onNext={() => setStep("Step3C")} />}

        {step === "Step3C" && <Step3C onNext={() => setStep("Step3D")} />}

        {step === "Step3D" && <Step3D onNext={() => setStep("Step3E")} />}

        {step === "Step3E" && <Step3E onNext={() => setStep("end")} />}

        {step === "end" && <End />}
      </div>

      <style jsx>{`
        .container {
          padding: 6px;
        }
      `}</style>
    </div>
  );
}
