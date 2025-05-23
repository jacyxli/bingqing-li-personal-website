import { motion, px } from "framer-motion";

export default function Divider() {
  return (
    <motion.div
      initial={{ opacity: 0, width: "0%" }}
      whileInView={{ opacity: 1, width: "100%" }}
      viewport={{ once: true }}
      transition={{ duration: 2.5 }}
      className={`h-[1px] my-8 bg-gray-300`}
    />
  );
}
