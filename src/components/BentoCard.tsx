import React, { useRef, useState, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  span?: number;
  overflowVisible?: boolean;
}

export function BentoCard({ children, className = '', innerClassName = '', span = 4, overflowVisible = false }: BentoCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the glow position
  const glowX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const glowY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`group cursor-glow-container bento-item relative ${overflowVisible ? '' : 'overflow-hidden'} rounded-3xl border border-white/10 bg-[#0c121e]/30 backdrop-blur-xl transition-all duration-300 hover:border-secondary/40 ${className}`}
      style={{ '--bento-span': span } as React.CSSProperties}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(68,237,204,0.1), transparent 40%)`
          ),
        }}
      />
      <div className={`relative z-10 p-8 h-full flex flex-col ${innerClassName}`}>
        {children}
      </div>
    </div>
  );
}
