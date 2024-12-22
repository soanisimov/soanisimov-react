import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion'; // Предполагается, что framer-motion установлен

const BentoBlock = ({ title, description, icon: Icon, colorClass, span = false }) => {
    const progressLevel = useMemo(() => ({
        hidden: { y: -50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: 'easeInOut' },
        },
    }), []);

    return (
        <div
            className={`bg-gradient-to-r from-${colorClass}-600/30 to-${colorClass}-800/80 rounded-3xl p-10 group
                hover:bg-gradient-to-r hover:from-${colorClass}-500/30 hover:to-${colorClass}-600/100 transition-all duration-300
                ${span ? 'md:col-span-2' : ''}`}
        >
            <motion.div
                variants={progressLevel}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                <div className="h-full flex flex-row items-center">
                    <Icon
                        className={`w-10 h-10 text-${colorClass}-500 group-hover:scale-110 group-hover:text-${colorClass}-200 transition-all mr-2 duration-300`}
                    />
                    <div className="flex flex-col text-center flex-grow">
                        <h3
                            className={`text-2xl font-bold text-${colorClass}-400 group-hover:text-white group-hover:scale-110 transition-all duration-300 mb-2`}
                        >
                            {title}
                        </h3>
                        <p className="text-gray-300">{description}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

BentoBlock.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    colorClass: PropTypes.string.isRequired,
    span: PropTypes.bool,
};

BentoBlock.defaultProps = {
    span: false,
};

export default BentoBlock;
