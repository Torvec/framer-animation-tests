import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimCard({ cardAmount }: { cardAmount: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const sect = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };
  const cards = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.section
      ref={ref}
      className="flex gap-5 justify-center flex-wrap text-black bg-black mx-auto container py-5 bg-opacity-50 rounded-3xl shadow-2xl"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sect}
    >
      {Array.from({ length: cardAmount }, (_, index) => (
        <motion.div
          key={index}
          className="bg-white h-48 w-48 rounded-3xl flex justify-center items-center shadow-lg"
          variants={cards}
        >
          <span>Card {index + 1}</span>
        </motion.div>
      ))}
    </motion.section>
  );
}
