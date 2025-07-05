/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

function VideoPlayOverlay() {
  const [open, setOpen] = useState(false);

  const openVideo = (e: any) => {
    console.log("openVideo");
    e.preventDefault();
    setOpen(true);
  };

  const closeVideo = () => {
    setOpen(false);
  };

  useEffect(() => {
    const onKey = (e: any) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keyup", onKey);

    return () => document.removeEventListener("keyup", onKey);
  }, []);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="relative">
      <button
        onClick={openVideo}
        onTouchStart={openVideo}
        className="micro text-white cursor-pointer"
      >
        <svg
          width="24"
          height="24"
          fill="none"
          strokeWidth="2"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative left-0.5"
          onClick={openVideo}
          onTouchStart={openVideo}
        >
          <path d="m5 3 14 9-14 9V3z" />
        </svg>
      </button>

      {open &&
        createPortal(
          <div
            className="absolute size-full inset-0 bg-black/70 z-50 flex items-center justify-center px-5 py-20"
            onClick={closeVideo}
          >
            <iframe
              allowFullScreen
              src="https://www.youtube.com/embed/AzOjU2oQS7o?si=2zxLnkdwnMtAuyHJ&autoplay=1"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              className="border-0 w-full aspect-video h-auto max-h-full max-w-[1200px]"
            />
          </div>,
          document.body
        )}
    </div>
  );
}

export default VideoPlayOverlay;
