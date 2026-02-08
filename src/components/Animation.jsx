import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const Orbit = ({ size, duration, tilt }) => {
  return (
    <motion.div
      className="absolute rounded-full border border-blue-500/30 dark:border-blue-400/40"
      style={{
        width: size,
        height: size,
        transform: tilt,
      }}
      animate={{ rotate: 360 }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {/* Electron */}
      <motion.div
        className="absolute w-3 h-3 bg-blue-500 rounded-full shadow-md shadow-blue-400/60"
        style={{
          top: "50%",
          left: "100%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </motion.div>
  );
};

const Animation = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth 3D tilt
  const rotateX = useSpring(y, { stiffness: 40, damping: 20 });
  const rotateY = useSpring(x, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const handleMove = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;

      x.set((e.clientX - cx) / 35);
      y.set((e.clientY - cy) / 35);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  return (
    <div
      className="hidden md:flex justify-center items-center w-[420px] md:w-[520px] h-[480px] relative"
      style={{ perspective: 1200 }}
    >
      {/* 3D Scene */}
      <motion.div
        className="relative flex items-center justify-center"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Nucleus */}
        <motion.div
          className="absolute w-16 h-16 rounded-full bg-blue-500 shadow-2xl shadow-blue-700 dark:shadow-blue-400/60"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transform: "translateZ(30px)" }}
        />

        {/* Orbits with electrons */}
        <Orbit
          size={220}
          duration={16}
          tilt="rotateX(65deg)"
        />

        <Orbit
          size={220}
          duration={22}
          tilt="rotateY(65deg)"
        />

        <Orbit
          size={220}
          duration={28}
          tilt="rotateX(45deg) rotateY(45deg)"
        />
      </motion.div>
    </div>
  );
};

export default Animation;
