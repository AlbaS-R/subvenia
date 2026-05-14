import { motion } from 'motion/react';

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
    >
      <span className="text-[10px] font-label-caps uppercase tracking-[0.2em] opacity-60">Scroll Down</span>
      <div className="w-6 h-10 rounded-full border-2 border-white/10 flex justify-center p-1.5">
        <motion.div
          animate={{
            y: [0, 12, 0],
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-1.5 h-1.5 rounded-full bg-secondary"
        />
      </div>
    </motion.div>
  );
}
