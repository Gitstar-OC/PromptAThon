"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import "./style.css";

const imageList = [
  { src: "/Image (1).jpg", alt: "Image 1", description: "This is image 1." },
  { src: "/Image (2).jpg", alt: "Image 2", description: "This is image 2." },
  { src: "/Image (3).jpg", alt: "Image 3", description: "This is image 3." },
  { src: "/Image (4).jpg", alt: "Image 4", description: "This is image 4." },
  { src: "/Image (5).jpg", alt: "Image 5", description: "This is image 5." },
  { src: "/Image (6).jpg", alt: "Image 6", description: "This is image 6." },
];

export default function Main() {
  const imageRefs = useRef([]);
  const [modal, setModal] = useState({ isVisible: false, imageSrc: "", description: "" });

  // Close the modal
  const closeModal = () => setModal({ isVisible: false, imageSrc: "", description: "" });

  return (
    <div className="max-w-4xl mx-auto py-16">
      {imageList.map((image, index) => (
        <div key={index} className="my-16">
          <div className="image-container items-centers justify-center flex">
            <Image
              ref={(el) => (imageRefs.current[index] = el)}
              src={image.src}
              alt={image.alt}
              width={700}  // Set fixed width
              height={350}  // Set fixed height
              className="image-item image-animation rounded-lg transition-transform duration-700 ease-out cursor-pointer"
              onClick={() => setModal({ isVisible: true, imageSrc: image.src, description: image.description })}
            />
          </div>
          <div className="flex justify-evenly">
            <p className="mt-4 text-center text-base leading-7 px-4 sm:px-8 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque euismod libero nec dui fermentum, nec pretium enim
              tincidunt. Duis vel magna sit amet felis feugiat sodales.
            </p>
          </div>
        </div>
      ))}

      {modal.isVisible && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <Image src={modal.imageSrc} alt="Selected Image" width={800} height={450} className="rounded-lg w-full h-auto" />
            <p className="mt-4 text-center">{modal.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
