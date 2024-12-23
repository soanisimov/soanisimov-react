import React, { useMemo } from 'react';
import { motion } from "framer-motion";

const generateCircleVariants = (scale, x, y, duration) => ({
    scale: [1, scale, 1],
    x: [0, x, 0],
    y: [0, y, 0],
    transition: {
        duration,
        repeat: Infinity,
        ease: "easeInOut",
    }
});

const BlurBackground = React.memo(() => {
    const circleVariants = useMemo(() => ({
        animate4: generateCircleVariants(1.4, 160, -70, 4),
        animate5: generateCircleVariants(1.6, 180, 90, 3),
        animate6: generateCircleVariants(1.6, -200, -100, 3)
    }), []);

    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none flex justify-center items-center filter blur-[200px]">
            <motion.div
                className="bg-blue-600 w-[380px] h-[280px] rounded-full absolute"
                variants={circleVariants}
                animate="animate4"
            />
            <motion.div
                className="bg-purple-700 w-[390px] h-[290px] rounded-full absolute"
                variants={circleVariants}
                animate="animate5"
            />
            <motion.div
                className="bg-blue-800 w-[400px] h-[300px] rounded-full absolute"
                variants={circleVariants}
                animate="animate6"
            />
        </div>
    );
});

BlurBackground.displayName = 'BlurBackground';
export default BlurBackground;