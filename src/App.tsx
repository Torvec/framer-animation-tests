import Navigation from "./Navigation";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";

export default function App() {
    function AnimatedSection({
      children,
      bgColor,
    }: {
      children: React.ReactNode;
      bgColor: string;
    }) {
      const ref = useRef(null);
      const isInView = useInView(ref, { once: false });

      return (
        <section
          ref={ref}
          className={`h-screen grid place-content-center ${bgColor}`}
        >
          <span
            style={{
              transform: isInView ? "none" : "translateX(-100%)",
              opacity: isInView ? 1 : 0,
              transition: "all 1s ease-in-out",
            }}
          >
            {children}
          </span>
        </section>
      );
    }

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress);

    return (
       <div className="min-h-screen bg-neutral-900 text-neutral-100 relative overflow-hidden">
        <Navigation />
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-lime-300 transform origin-left"
          style={{ scaleX }}
        />
        <motion.div
          className="fixed bottom-0 left-0 right-0 h-1 bg-lime-300 transform origin-right"
          style={{ scaleX }}
        />
        <header>
          <motion.div
            className="text-8xl text-center py-10 uppercase font-bold"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Start
          </motion.div>
        </header>
        <main>
          <AnimatedSection bgColor="bg-red-500">
            <h1 className="text-6xl font-bold">Section 1</h1>
          </AnimatedSection>
          <AnimatedSection bgColor="bg-orange-500">
            <h1 className="text-6xl font-bold">Section 2</h1>
          </AnimatedSection>
          <AnimatedSection bgColor="bg-amber-500">
            <h1 className="text-6xl font-bold">Section 3</h1>
          </AnimatedSection>
          <AnimatedSection bgColor="bg-yellow-500">
            <h1 className="text-6xl font-bold">Section 4</h1>
          </AnimatedSection>
          <AnimatedSection bgColor="bg-lime-500">
            <h1 className="text-6xl font-bold">Section 5</h1>
          </AnimatedSection>
          <AnimatedSection bgColor="bg-green-500">
            <h1 className="text-6xl font-bold">Section 6</h1>
          </AnimatedSection>
          <AnimatedSection bgColor="bg-emerald-500">
            <h1 className="text-6xl font-bold">Section 7</h1>
          </AnimatedSection>
          <AnimatedSection bgColor="bg-teal-500">
            <h1 className="text-6xl font-bold">Section 8</h1>
          </AnimatedSection>
          <AnimatedSection bgColor="bg-cyan-500">
            <h1 className="text-6xl font-bold">Section 9</h1>
          </AnimatedSection>
          <AnimatedSection bgColor="bg-sky-500">
            <h1 className="text-6xl font-bold">Section 10</h1>
          </AnimatedSection>
          <AnimatedSection bgColor="bg-blue-500">
            <h1 className="text-6xl font-bold">Section 11</h1>
          </AnimatedSection>
          <AnimatedSection bgColor="bg-indigo-500">
            <h1 className="text-6xl font-bold">Section 12</h1>
          </AnimatedSection>
          <AnimatedSection bgColor="bg-violet-500">
            <h1 className="text-6xl font-bold">Section 13</h1>
          </AnimatedSection>
          <AnimatedSection bgColor="bg-purple-500">
            <h1 className="text-6xl font-bold">Section 14</h1>
          </AnimatedSection>
          <AnimatedSection bgColor="bg-fuchsia-500">
            <h1 className="text-6xl font-bold">Section 15</h1>
          </AnimatedSection>
          <AnimatedSection bgColor="bg-pink-500">
            <h1 className="text-6xl font-bold">Section 16</h1>
          </AnimatedSection>
          <AnimatedSection bgColor="bg-rose-500">
            <h1 className="text-6xl font-bold">Section 17</h1>
          </AnimatedSection>
        </main>
        <footer className="">
          <motion.div
            className="text-8xl text-center py-10 uppercase font-bold pb-28"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            End
          </motion.div>
        </footer>
      </div>
    );
}
