import { motion, type Variants } from "framer-motion";
import { type ReactElement } from "react";

export const fadeIn: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const MotionDiv = motion.div;
export const MotionSection = motion.section;