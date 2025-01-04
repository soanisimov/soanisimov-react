import React, { useMemo } from 'react';
import { motion } from "framer-motion";

const generateCircleVariants = (scale, x, y, duration) => ({
    scale: [1, scale, 1],
    x: [500, x, 500],
    y: [-400, y, -400],
    transition: {
        duration,
        repeat: Infinity,
        ease: "easeInOut",
    }
});

const generateCircleVariants2 = (scale, x, y, duration) => ({
    scale: [1, scale, 1],
    x: [-500, x, -500],
    y: [400, y, 400],
    transition: {
        duration,
        repeat: Infinity,
        ease: "easeInOut",
    }
});

const BlurBackground = React.memo(() => {
    const circleVariants = useMemo(() => ({
        animate4: generateCircleVariants(2, 300, -200, 5),
        animate6: generateCircleVariants2(1.6, 0, 0, 5)
    }), []);

    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none flex justify-center items-center filter blur-[300px]">
            <motion.div
                className="bg-blue-700/90 w-[400px] h-[400px] rounded-full absolute"
                variants={circleVariants}
                animate="animate4"
            />
            <motion.div
                className="bg-purple-700/90 w-[400px] h-[400px] rounded-full absolute"
                variants={circleVariants}
                animate="animate6"
            />
        </div>
    );
});

BlurBackground.displayName = 'BlurBackground';
export default BlurBackground;