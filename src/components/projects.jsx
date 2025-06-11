import {useMemo} from "react";
import{motion} from "framer-motion";
import projectimg from "../assets/projectimg.png"
import projectimg2 from "../assets/projectimg2.png"
import projectimg3 from "../assets/projectimg3.png"
import projectimg4 from "../assets/projectimg4.png"
import projectimg5 from "../assets/projectimg5.png"
import {RiGithubFill} from "@remixicon/react"
import {Emoji, EmojiProvider} from "react-apple-emojis";
import emojiData from "react-apple-emojis/src/data.json";
import {RiArrowRightUpLine} from "@remixicon/react";


export const PROJECTS = [
    {
        name: "Персональний сайт-портфоліо",
        description: "Персональний сайт-портфоліо",
        image: projectimg,
        link: "https://soanisimov.vercel.app/",
        link_text:"Перейти на сайт",
        powered_by:"React, Tailwind, Vite",
        emoji: "technologist-light-skin-tone",
        link_icon_git: <RiArrowRightUpLine></RiArrowRightUpLine>,
    },
    {
        name: "Калькулятори формул",
        description: "Калькулятори для Дискримінанту, Квадрату суми/різниці та Різниці квадратів",
        image: projectimg,
        link: "https://gafigaf.github.io/math.html",
        link_text:"Перейти на сайт",
        powered_by:"HTML, CSS, JS",
        emoji: "abacus",
        link_icon_git: <RiArrowRightUpLine></RiArrowRightUpLine>,
    },

    {
        name: "Коди регіонів",
        description: "Визначення коду регіону України відповідно до перших літер у автомобільному номері",
        link: "https://soanisimov.github.io/plate_check/nomera.html",
        link_text:"Перейти на сайт",
        powered_by:"HTML, CSS, JS",
        emoji: "oncoming-automobile",
        link_icon_git: <RiArrowRightUpLine></RiArrowRightUpLine>,
    },
    {
        name: "Tic-tac-toe",
        description: "Оновлена версія хрестики-нулики з офіційного туторіалу ReactJS",
        image: projectimg2,
        link: "https://github.com/soanisimov/React-tic-tac-toe",
        link_text:"Подивитись на GitHub",
        link_icon_git: <RiGithubFill></RiGithubFill>,
        powered_by:"React",
        emoji: "video-game",

    },
    {
        name: "JavaFX Maths",
        description: "JavaFX програма для квадратного рівняння та теореми Вієта",
        image: projectimg5,
        link: "https://github.com/soanisimov/JavaFX-Maths",
        link_text:"Подивитись на GitHub",
        link_icon_git: <RiGithubFill></RiGithubFill>,
        powered_by:"Java",
        emoji: "desktop-computer",
    },
    {
        name: "Schedule bot",
        description: "Бот для відображення розкладу Київського столичного університету ім. Бориса Грінченка",
        image: projectimg4,
        link: "https://github.com/soanisimov/Schedule-bot",
        link_text:"Подивитись на GitHub",
        link_icon_git: <RiGithubFill></RiGithubFill>,
        powered_by:"Python",
        emoji: "robot",
    },
];

const Projects = () => {
    const projectsVariants = {
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
  return (
      <section className="px-6 py-10" id="work">
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">Проекти</h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map((project, index) => (
                  <motion.div key={index} className=""
                              initial="hidden" whileInView="visible" viewport={{once: true}}
                              variants={projectsVariants}>

                      <div
                          className="group flex flex-col h-full bg-stone-800/60 shadow-sm rounded-3xl">
                          <div className="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
                              <div className="p-6 bg-white rounded-3xl">
                              <EmojiProvider data={emojiData}><Emoji name={project.emoji} className="w-20 md:w-20 lg:w-20 hover:scale-110 transition-all duration-300"/></EmojiProvider>
                              </div>
                          </div>


                          <div className="p-4 md:p-6">
                              <span
                                  className="block mb-1 text-xs font-semibold text-transparent uppercase bg-clip-text bg-blue-500 ">{project.powered_by}</span>
                              <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                              <p className="mt-3 text-white">{project.description}</p>
                          </div>
                          <div
                              className="mt-auto flex">
                              <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm rounded-b-3xl font-medium  text-black bg-white hover:bg-blue-700 hover:text-stone-900 hover:text-white transition-all duration-300"
                                 href={project.link} target="_blank" rel="noopener noreffer"> {project.link_icon_git} {project.link_text}</a>
                          </div>
                      </div>
                  </motion.div>
              ))}
          </div>

      </section>

  )
}
export default Projects;