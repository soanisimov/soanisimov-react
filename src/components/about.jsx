import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Word = ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
        <span className="relative inline-block mr-[0.4em]">
            <span className="absolute opacity-20">{children}</span>
            <motion.span style={{ opacity }}>{children}</motion.span>
        </span>
    );
};

const About = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.9", "start 0.25"]
    });

    const text = "Я студент третього курсу, навчаюсь на спеціальності комп'ютерна інженерія. Маю практичний досвід у розробці сайтів, веб-додатків, ботів. Прагну саморозвитку, тому створюю власні pet projects , намагаюся вивчати та практикувати щось нове та корисне. Готовий розвиватися і працювати над собою, хочу бути невідʼємною частиною крутої команди!";

    const words = text.split(" ");

    return (
        <section className="px-6 py-20" >
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10" id="about">Про мене</h1>
            <p
                ref={container}
                className="flex flex-wrap text-xl md:text-2xl lg:text-3xl max-w-7xl text-white leading-relaxed"
            >
                {words.map((word, i) => {
                    const start = i / words.length;
                    const end = start + (1 / words.length);
                    return (
                        <Word key={i} progress={scrollYProgress} range={[start, end]}>
                            {word}
                        </Word>
                    );
                })}
            </p>
        </section >
    );
};

export default About;