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

    const text = "Я студент 3-го курсу спеціальності «Комп'ютерна інженерія». Розвиваю свої навички Front-end з 2017 року, коли відвідував позашкільні навчальні курси, де отримав досвід роботи з HTML, CSS, Adobe Illustrator, Adobe Photoshop. Пізніше я закінчив курс з розробки веб-сайтів, де дізнався більше про Front-end та покращив свої знання JavaScript. Крім того продовжую розвиватися в цій галузі, створюючи веб-сайти, веб-додатки і ботів.\n" +
        "\n" +
        "Наразі шукаю роботу Front-end розробника, де я зможу розвивати свої навички, бути ефективною та невід'ємною частиною команди.";

    const words = text.split(" ");

    return (
        <section className="px-6 py-20" >
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10" id="about">Про мене</h1>
            <p ref={container} className="flex flex-wrap text-xl md:text-2xl lg:text-3xl max-w-7xl text-white leading-relaxed"
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