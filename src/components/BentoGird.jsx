import React, {useMemo} from 'react';
import { motion } from 'framer-motion';
import BentoBlock from './BentoBlock';
import {Emoji, EmojiProvider} from "react-apple-emojis";
import emojiData from "react-apple-emojis/src/data.json";

const BentoGrid = () => {
    const blocks = [
        { title: 'HTML', colorClass: 'orange',},
        { title: 'CSS', colorClass: 'blue' },
        { title: 'JavaScript', colorClass: 'amber',span: true },
        { title: 'React', colorClass: 'cyan',span: true },
        { title: 'Node.js', colorClass: 'green' },
        { title: 'Tailwind CSS', colorClass: 'sky',},
        { title: 'Photoshop', colorClass: 'blue' },
        { title: 'Illustrator', colorClass: 'orange' },
        { title: 'Figma', colorClass: 'pink',span: true,},
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
