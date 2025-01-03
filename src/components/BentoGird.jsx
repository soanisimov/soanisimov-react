import React from 'react';
import { motion } from 'framer-motion';
import {
    Code2, FileJson, Terminal, Cpu, Database, Coffee,
    CircleEqual, Hash, Palette, Figma, PenTool, Brain,
    Code, FileCode,SquareChevronRight,Wind,
} from 'lucide-react';
import BentoBlock from './BentoBlock';

const BentoGrid = () => {
    const blocks = [
        { title: 'HTML', icon: FileCode, colorClass: 'orange', span: true },
        { title: 'CSS', icon: FileJson, colorClass: 'blue' },
        { title: 'JavaScript', icon: Terminal, colorClass: 'yellow' },
        { title: 'React', icon: Cpu, colorClass: 'cyan' },
        { title: 'Node.js', icon: Database, colorClass: 'green' },
        { title: 'Tailwind', icon: Wind, colorClass: 'sky', span: true },
        { title: 'Python', icon: SquareChevronRight, colorClass: 'indigo' },
        { title: 'Java', icon: Coffee, colorClass: 'red' },
        { title: 'Photoshop', icon: Palette, colorClass: 'blue' },
        { title: 'Illustrator', icon: PenTool, colorClass: 'orange' },
        { title: 'Figma', icon: Figma, colorClass: 'pink', span: true },
        { title: 'IntelliJ IDEA', icon: Brain, colorClass: 'rose' },
        { title: 'VS Code', icon: Code, colorClass: 'blue' },
    ];

    return (
        <section className="px-6 py-20">
            <h1 className="text-4xl md:text-6xl mb-10 font-medium tracking-tight" id="experience">
                Навички
            </h1>
            <div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 rounded-3xl">
                    {blocks.map((block, index) => (
                        <BentoBlock
                            key={index}
                            title={block.title}
                            icon={block.icon}
                            colorClass={block.colorClass}
                            span={block.span}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BentoGrid;
