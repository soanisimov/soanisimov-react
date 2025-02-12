import {Emoji, EmojiProvider} from "react-apple-emojis";
import emojiData from "react-apple-emojis/src/data.json";
import { motion } from 'framer-motion';
import {File} from "lucide-react";
import {useMemo} from "react";

const languageVariants = {
    hidden:{
        y:50,opacity: 0,
    },
    visible:{
        y:0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeInOut",
        }
    }
}

const courses = [
    {
        name: "Створення сайтів",
        description: "Комп'ютерна школа Hillel",
        certificate_text:"HTML, CSS, JS, робота з хостингом",
        emoji: "globe-with-meridians",
    },
    {
        name: "Java Introduction",
        description: " Комп'ютерна школа Hillel",
        emoji: "hot-springs",
        certificate_text:"Java, JavaFX",
    }
];



const Courses = () => {
    return (
        <section className="px-6 py-10">
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">Курси</h1>
            <div className="flex flex-col md:flex-row gap-5 text-white">
                {courses.map((lang) => (
                    <motion.div className="w-full flex" initial="hidden" whileInView="visible" viewport={{once: true}} variants={languageVariants}>

                        <div className="bg-indigo-600 p-6 w-full text-center rounded-3xl flex flex-col items-center">
                            <div className="bg-white p-4 rounded-3xl">
                                <EmojiProvider data={emojiData}><Emoji name={lang.emoji}
                                                                       className="w-24 h-24 hover:scale-110 transition-all duration-300"/></EmojiProvider>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold text-center mt-3">{lang.name}</h1>
                            <p className="mb-2">{lang.description}</p>
                            <p><a href={lang.certificate_link} target="_blank" className="">{lang.certificate_text}</a>
                            </p>
                        </div>


                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Courses