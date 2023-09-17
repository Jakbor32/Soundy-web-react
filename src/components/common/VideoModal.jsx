import React, { useState, useRef, useEffect } from "react";
import { AiFillCloseSquare } from "react-icons/ai";

const VideoModal = ({ videoUrl, closeModal }) => {
  const [isOpen, setIsOpen] = useState(true);
  const modalRef = useRef(null);

  // handle click outside

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // get id from youtube url

  const extractVideoId = (url) => {
    const match = url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/
    );

    return match ? match[1] : null;
  };

  const videoId = extractVideoId(videoUrl);

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 sm:p-12 md:p-10 lg:p-32">
          <span
            onClick={closeModal}
            className="absolute text-gray-600 cursor-pointer top-2 right-2 hover:text-gray-300"
          >
            <AiFillCloseSquare size={60} />
          </span>
          <div ref={modalRef} className="relative w-full max-w-screen-xl">
            <iframe
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              allowFullScreen
              frameBorder={0}
              allow="autoplay"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoModal;
