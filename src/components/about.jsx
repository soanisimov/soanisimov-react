import{motion} from "framer-motion";
export const ABOUT_CONTENT = {
    paragraphs: [
        "Я студент третього курсу, навчаюсь на спеціальності комп'ютерна інженерія. Маю практичний досвід у розробці сайтів, веб-додатків, ботів. Прагну саморозвитку, тому створюю власні pet projects , намагаюся вивчати та практикувати щось нове та корисне. Готовий розвиватися і працювати над собою, хочу бути невідʼємною частиною крутої команди :)",
    ],
};

const About = () => {
    const textVariants = {
        hidden: {opacity: 0, },
        visible: {opacity: 1, transition: {duration: 0.8, ease: 'easeInOut'}},
    }

    return(
    <section className="px-6 py-10" id="about">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
            Про мене
        </h1>
        <div className="max-w-7xl mx-auto">
            {ABOUT_CONTENT.paragraphs.map((text, index) => (
                <motion.p key={index} variants={textVariants} initial="hidden" className="text-xl md:text-2xl lg:text-3xl mb-10 leading-relaxed" whileInView="visible" viewport={{once:true, amount:0.5}}>
                    {ABOUT_CONTENT.paragraphs}
                </motion.p>
            ))}
        </div>
    </section>
  )
}

export default About;