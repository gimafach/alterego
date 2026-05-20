import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";

const ZoomScroll = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 0.95]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ scale, transformOrigin: "center center", clipPath: "inset(2%)" }}>
        {children}
      </motion.div>
    </div>
  );
};

export default ZoomScroll;
