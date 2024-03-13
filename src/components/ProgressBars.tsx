import { motion, useScroll, useSpring } from "framer-motion";
import Navigation from "./Navigation";

export default function ProgressBars() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-neutral-900 text-neutral-100 relative overflow-hidden">
        {/* PROGRESS BARS */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-lime-300 transform origin-left"
          style={{ scaleX }}
        />
        <motion.div
          className="fixed bottom-0 left-0 right-0 h-1 bg-lime-300 transform origin-right"
          style={{ scaleX }}
        />
        {/* PROGRESS BARS */}
        <main>
          <section className="h-screen flex justify-center items-center bg-green-500">
            <h1 className="text-6xl font-bold">Section 1</h1>
          </section>
          <section className="h-screen flex justify-center items-center bg-red-500">
            <h1 className="text-6xl font-bold">Section 2</h1>
          </section>
          <section className="h-screen flex justify-center items-center bg-blue-500">
            <h1 className="text-6xl font-bold">Section 3</h1>
          </section>
        </main>
      </div>
    </>
  );
}
