import {motion} from 'framer-motion'
import mypfp from "../assets/mypfp.png"
import { EmojiProvider, Emoji } from "react-apple-emojis"
import emojiData from "react-apple-emojis/src/data.json"
import {ArrowDown, ArrowDownRight, ArrowRight, ArrowUp} from "lucide-react";


export const HERO_CONTENT = {
    greeting: "Привіт!",
    introduction:
        "Я Сергій Анісімов, і це мій сайт-портфоліо як",
    developer:" Front End розробника",
    description:
        "Я студент третього курсу, маю практичний досвід у розробці сайтів, веб-додатків, ботів. Прагну саморозвитку. Готовий розвиватися і працювати над собою, хочу бути невідʼємною частиною крутої команди :)",
    resumeLinkText: "Завантажити резюме",
    resumeLink: "/resumeAnisimov.pdf",
    continue:"Дізнатися більше",
};


const textVariants = {
    hidden: {opacity: 0, },
    visible: {opacity: 1, transition: {duration: 0.8, ease: 'easeInOut'}},
}

const contentVariants = {
    hidden:{opacity:1},
    visible:{
        opacity: 1,
        transition:{
            staggerChildren:0.3,
        }
    }
}

const imageVariants = {
    hidden: {opacity: 0, },
    visible: {opacity: 1, transition: {duration: 1.3, ease: 'easeInOut'}},
}

const Hero = () => {
    return (
        <section>
            <div
                className="relative z-10 min-h-screen  flex flex-wrap flex-col md:flex-row items-center justify-center text-white">
                <motion.div className="w-full md:w-1/2 p-8" initial="hidden" animate="visible"
                            variants={contentVariants}>
                    <motion.h1 className="text-3xl md:text-3xl lg:text-6xl my-8" variants={textVariants}>
                        <div className="flex flex-row gap-4">
                            {HERO_CONTENT.greeting}<EmojiProvider data={emojiData}><Emoji
                            name="waving-hand-light-skin-tone" className="w-10 md:w-10 lg:w-20"/></EmojiProvider>
                        </div>

                    </motion.h1>
                    <motion.p className="text-xl md:text-2xl lg:text-4xl mb-4 " variants={textVariants}>
                        {HERO_CONTENT.introduction}
                    </motion.p>
                    <motion.p className="text-xl md:text-2xl lg:text-5xl mb-4 " variants={textVariants}>
                        <span
                            className="text-transparent bg-clip-text font-bold bg-gradient-to-r from-blue-500 to-purple-500">{HERO_CONTENT.developer}</span>
                    </motion.p>
                    <motion.a
                        className="bg-stone-50 text-stone-900 p-3 lg:p-4 mt-8 inline-block rounded-3xl hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-white transition duration-300"
                        href={HERO_CONTENT.resumeLink} download rel="noopener noreferrer" target="_blank"
                        variants={textVariants}>
                        {HERO_CONTENT.resumeLinkText}
                    </motion.a>
                    <motion.a
                        className="ml-5 text-gray-300/80 hover:text-gray-200/100 transition duration-300 "
                        href="#about"
                        variants={textVariants}>
                        {HERO_CONTENT.continue}<ArrowRight className="inline-flex ml-2"/>
                    </motion.a>
                </motion.div>

                <motion.div className="w-full md:w-1/2 p-8" initial="hidden" animate="visible" variants={imageVariants}>
                    <img src={mypfp} alt="Анісімов Сергій" width={650} height={650} className="rounded-2xl"/>
                </motion.div>

            </div>
        </section>
    )
}

export default Hero;