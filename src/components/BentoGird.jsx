import React, {useMemo} from 'react';
import { motion } from 'framer-motion';
import BentoBlock from './BentoBlock';
import {Emoji, EmojiProvider} from "react-apple-emojis";
import emojiData from "react-apple-emojis/src/data.json";

const BentoGrid = () => {
    const blocks = [
        { title: 'HTML', colorClass: 'blue',},
        { title: 'CSS', colorClass: 'blue' },
        { title: 'JavaScript', colorClass: 'blue',span: true },
        { title: 'React', colorClass: 'indigo',span: true },
        { title: 'Node.js', colorClass: 'indigo' },
        { title: 'Tailwind CSS', colorClass: 'indigo',},
        { title: 'Photoshop', colorClass: 'violet' },
        { title: 'Illustrator', colorClass: 'violet' },
        { title: 'Figma', colorClass: 'violet',span: true,},
    ];


    return (
        <section className="px-6 py-20">
            <h1 className="text-4xl md:text-6xl mb-10 font-medium tracking-tight" id="experience">
                Навички
            </h1>
            <div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 rounded-3xl">
                    {blocks.map((block, index) => (
                        <BentoBlock key={index} title={block.title} colorClass={block.colorClass} span={block.span}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BentoGrid;
