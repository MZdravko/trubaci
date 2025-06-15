import Image from "next/image";
import { useEffect } from "react";
import { createPortal } from "react-dom";

interface Props {
  showModal?: boolean;
  src: string;
  onNext?: () => void;
  onPrev?: () => void;
  onClose?: () => void;
}

const ImagePreviewModal: React.FC<Props> = ({
  src,
  showModal,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    if (!showModal) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && showModal) {
        onClose?.();
      } else if (event.key === "ArrowRight" && showModal) {
        onNext?.();
      } else if (event.key === "ArrowLeft" && showModal) {
        onPrev?.();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showModal, onNext, onPrev, onClose]);

  if (!showModal) return;

  return createPortal(
    <div className="fixed top-0 size-full bg-black/70">
      <div
        className="flex items-center justify-end pr-2 md:pr-5 text-white h-20 cursor-pointer"
        onClick={onClose}
      >
        <svg
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          width="24"
        >
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </div>
      <div className="flex relative gap-2 md:gap-4 h-[calc(100%_-_160px)]">
        <div className="absolute flex size-full z-10">
          <div
            onClick={onPrev}
            className="flex items-center text-white flex-1 cursor-pointer pl-2 md:pl-5"
          >
            <svg
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              width="24"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </div>
          <div
            onClick={onNext}
            className="flex items-center justify-end text-white flex-1 cursor-pointer pr-2 md:pr-5"
          >
            <svg
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              width="24"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </div>
        <div className="relative w-full h-full px-4 md:px-7">
          <Image
            fill
            className="object-contain"
            priority
            alt="image"
            src={src}
          />
        </div>
      </div>
      <div className="h-20" onClick={onClose} />
    </div>,
    document.body
  );
};

export default ImagePreviewModal;
