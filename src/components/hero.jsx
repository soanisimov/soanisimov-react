import {motion} from 'framer-motion'
import mypfp from "../assets/mypfp.png"

export const HERO_CONTENT = {
    greeting: "Привіт! 🖐️",
    introduction:
        "Я Сергій Анісімов, це мій сайт-портфоліо як Front End розробника.",
    description:
        "Я студент третього курсу, маю практичний досвід у розробці сайтів, веб-додатків, ботів. Прагну саморозвитку. Готовий розвиватися і працювати над собою, хочу бути невідʼємною частиною крутої команди :)",
    resumeLinkText: "Завантажити резюме",
    resumeLink: "/resumeAnisimov.pdf",
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
            <div className="relative z-10 min-h-screen  flex flex-wrap flex-col md:flex-row items-center justify-center text-white">
                <motion.div className="w-full md:w-1/2 p-8" initial="hidden" animate="visible"
                            variants={contentVariants}>
                    <motion.h1 className="text-3xl md:text-3xl lg:text-5xl my-14" variants={textVariants}>
                        {HERO_CONTENT.greeting}
                    </motion.h1>
                    <motion.p className="text-xl md:text-2xl lg:text-4xl mb-4" variants={textVariants}>
                        {HERO_CONTENT.introduction}
                    </motion.p>
                    <motion.a className="bg-stone-50 text-stone-900 p-3 lg:p-4 mt-8 inline-block rounded-2xl hover:bg-blue-600 hover:text-white transition duration-300" href={HERO_CONTENT.resumeLink} download rel="noopener noreferrer" target="_blank" variants={textVariants}>
                        {HERO_CONTENT.resumeLinkText}
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