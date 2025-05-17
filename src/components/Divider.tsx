import { motion } from "framer-motion";

export default function Divider() {
  return (
    <motion.div
      initial={{ opacity: 0, width: "0%" }}
      whileInView={{ opacity: 1, width: "100%" }}
      viewport={{ once: true }}
      transition={{ duration: 2.5 }}
      className="h-[1px] bg-gray-300 dark:bg-gray-800 my-8"
    />
  );
}
