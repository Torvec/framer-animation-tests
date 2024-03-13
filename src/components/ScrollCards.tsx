import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function ScrollCards() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "start end"],
  });
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 1, 1, 1, 1]
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [-100, 0, 0, 200, 400],
  );

  return (
    <div className="bg-neutral-900 text-neutral-100 relative text-3xl font-black">
      <section className="h-screen bg-green-600 flex justify-center items-center">
        1
      </section>
      <section className="h-screen bg-orange-600 flex justify-center items-center">
        2
      </section>
      <section className="h-screen bg-purple-600 flex justify-center items-center gap-5">
        <motion.div ref={ref} style={{ opacity, y }} className="bg-black p-5">
          Moving Card
        </motion.div>
        <div className="bg-black p-5">Stationary Card</div>
      </section>
      <section className="h-screen bg-red-600 flex justify-center items-center">
        4
      </section>
      <section className="h-screen bg-blue-600 flex justify-center items-center">
        5
      </section>
    </div>
  );
}
