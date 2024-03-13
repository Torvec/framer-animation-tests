import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer className="text-8xl text-center py-10 uppercase font-bold bg-black text-white pb-28">
      <motion.span
        className="block h-full"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        End
      </motion.span>
    </motion.footer>
  );
}
