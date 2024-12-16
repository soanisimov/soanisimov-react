import React, { useMemo } from 'react';
import { motion } from "framer-motion";

const SKILLS = [
    { name: 'HTML', level: 100 },
    { name: 'CSS', level: 100 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 70 },
    { name: 'Java', level: 90 },
    { name: 'Python', level: 80 },
    { name: 'C#', level: 40 },
    { name: 'Photoshop', level: 100 },
    { name: 'Figma', level: 50 },
    { name: 'Illustrator', level: 70 },
];

const SkillsProgress = React.memo(() => {
    const progressLevel = useMemo(() => ({
        hidden: { y: -50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: 'easeInOut' }
        },
    }), []);

    return (
        <section className="px-6 py-10" id="experience">
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">Навички</h1>
            <div className="max-w-7xl mx-auto bg-black/10 p-5 rounded-2xl filter backdrop-blur-[200px]">
                {SKILLS.map((skill) => (
                    <motion.div
                        key={skill.name}
                        variants={progressLevel}
                        initial="hidden"
                        className="text-xl md:text-2xl lg:text-3xl mb-6 leading-relaxed"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <p className="text-sm md:text-2xl leading-relaxed mb-0.5">
                            {skill.name}
                        </p>
                        <div className="w-full rounded-full h-5">
                            <div className="w-full bg-sky-600/40 rounded-full h-4 mb-[-60px]">
                                <div
                                    className="rounded-full h-4 bg-blue-500"
                                    style={{ width: `${skill.level}%` }}
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
});

SkillsProgress.displayName = 'SkillsProgress';
export default SkillsProgress;