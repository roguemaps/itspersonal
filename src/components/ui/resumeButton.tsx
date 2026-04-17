import { Button } from "./button";

export interface ResumeButtonProps {
  onClick: () => void;
  buttonLabel?: string;
}

export default function ResumeButton({
  onClick,
  buttonLabel,
}: ResumeButtonProps) {
  return (
    <div className="w-full flex justify-left mt-10 ">
      <Button
        className="text-2xl p-8 hover:bg-gray-500 hover:text-white"
        onClick={onClick}
      >
        {buttonLabel || "Button"}
      </Button>
    </div>
  );
}
