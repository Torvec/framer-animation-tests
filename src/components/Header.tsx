import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header className="text-8xl text-center py-10 uppercase font-bold bg-black text-white pt-28">
      <motion.span
        className="block h-full"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Start
      </motion.span>
    </motion.header>
  );
}
