"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import "./style.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; 

const useTypingEffect = (text, speed = 30) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const fullTextRef = useRef(text);

  useEffect(() => {
    if (!isTyping) return;

    let i = 0;
    const timer = setInterval(() => {
      if (i < fullTextRef.current.length) {
        setDisplayedText(fullTextRef.current.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setIsTyping(false);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [speed, isTyping]);

  const startTyping = () => {
    setDisplayedText("");
    setIsTyping(true);
  };

  return { displayedText, startTyping };
};

const imageList = [
  { src: "/Image (1).jpg", alt: "Image 1", description: "This is image 1.", prompt: "Explore the features of React." },
  { src: "/Image (2).jpg", alt: "Image 2", description: "This is image 2.", prompt: "Learn about state management in React." },
  { src: "/Image (3).jpg", alt: "Image 3", description: "This is image 3.", prompt: "Understand the component lifecycle." },
  { src: "/Image (4).jpg", alt: "Image 4", description: "This is image 4.", prompt: "Dive into hooks and their usage." },
  { src: "/Image (5).jpg", alt: "Image 5", description: "This is image 5.", prompt: "JSX and how it makes React powerful." },
  { src: "/Image (6).jpg", alt: "Image 6", description: "This is image 6.", prompt: "Comparing React with other frameworks." },
];

export default function Content() {
  const imageRefs = useRef([]);
  const [modal, setModal] = useState({ isVisible: false, imageSrc: "", description: "" });
  const [openAccordion, setOpenAccordion] = useState(null);

  const closeModal = () => setModal({ isVisible: false, imageSrc: "", description: "" });

  return (
    <div className="max-w-4xl mx-auto py-16 text-gray-200">
      {imageList.map((image, index) => (
        <div key={index} className="my-16">
          <div className="image-container items-center justify-center flex">
            <Image
              ref={(el) => (imageRefs.current[index] = el)}
              src={image.src}
              alt={image.alt}
              width={700}
              height={350}
              className="image-item image-animation rounded-lg transition-transform duration-700 ease-out cursor-pointer"
              onClick={() => {
                setModal({ isVisible: true, imageSrc: image.src, description: image.description });
                setOpenAccordion(index);
              }}
            />
          </div>
          <Accordion
            type="single"
            collapsible
            className="w-full mt-2 flex justify-center"
            onValueChange={(value) => setOpenAccordion(value === `item-${index}` ? index : null)}
          >
            <AnimatedAccordionItem
              key={index}
              title={`Prompt for ${image.alt}`}
              content={image.prompt}
              value={`item-${index}`}
              isOpen={openAccordion === index}
            />
          </Accordion>
        </div>
      ))}

      {modal.isVisible && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close text-gray-200" onClick={closeModal}>&times;</button>
            <Image src={modal.imageSrc} alt="Selected Image" width={800} height={450} className="rounded-lg w-full h-auto" />
            <p className="mt-4 text-center text-gray-300">{modal.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function AnimatedAccordionItem({ title, content, value, isOpen }) {
  const { displayedText, startTyping } = useTypingEffect(content);
  const [hasOpened, setHasOpened] = useState(false);

  useEffect(() => {
    if (isOpen && !hasOpened) {
      setHasOpened(true);
      startTyping();
    }
  }, [isOpen, hasOpened, startTyping]);

  return (

    <AccordionItem value={value} className={`border-bborder-border w-96  ${isOpen ? "bg-white dark:bg-black" : ""}`}>
      <AccordionTrigger className="text-lg text-neutral-900 dark:text-gray-300  font-medium py-4 px-2 hover:bg-white dark:hover:bg-black  transition-colors rounded-xl">
        {title}
      </AccordionTrigger>
      <AccordionContent className="py-4 px-2 text-neutral-900 dark:text-gray-300">
        <p>{displayedText}</p>
      </AccordionContent>
    </AccordionItem>
  );
}
