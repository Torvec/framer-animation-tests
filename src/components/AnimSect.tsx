import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AnimatedSection({
  children,
  bgColor,
}: {
  children: React.ReactNode,
  bgColor: string,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.section
      ref={ref}
      className={`min-h-screen flex flex-col justify-center items-center ${bgColor}`}
    >
      <span
      className="flex flex-col justify-evenly items-center h-full w-full gap-5"
        style={{
          transform: isInView ? "none" : "translateX(-100%)",
          // opacity: isInView ? 1 : 0,
          transition: "all 1s ease-in-out",
        }}
      >
        {children}
      </span>
    </motion.section>
  );
}