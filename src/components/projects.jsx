import {useMemo} from "react";
import{motion} from "framer-motion";
import projectimg from "../assets/projectimg.png"
import projectimg2 from "../assets/projectimg2.png"
import projectimg3 from "../assets/projectimg3.png"
import projectimg4 from "../assets/projectimg4.png"
import projectimg5 from "../assets/projectimg5.png"
import {RiGithubFill} from "@remixicon/react"

export const PROJECTS = [
    {
        name: "Дискримінант",
        description: "Призначений для обчислення дискримінанта за формулою: D=b²-4*a*c",
        image: projectimg,
        link: "https://gafigaf.github.io/newdiskr.html",
        link_text:"Перейти на сайт",
        powered_by:"HTML, CSS, JS",
    },
    {
        name: "Квадрат суми / різниці",
        description: "Призначений для обчислення квадрата суми за формулою: (a±b)²",
        image: projectimg2,
        link: "https://gafigaf.github.io/kvadrat.html",
        link_text:"Перейти на сайт",
        powered_by:"HTML, CSS, JS",
    },
    {
        name: "Різниця квадратів",
        description: "Призначений для обчислення різниці квадратів за формулою: (a-b)(a+b) = a²+b²",
        image: projectimg3,
        link: "https://gafigaf.github.io/r_k.html",
        link_text:"Перейти на сайт",
        powered_by:"HTML, CSS, JS",
    },
    {
        name: "Tic-tac-toe",
        description: "Оновлена версія хрестики-нулики з офіційного туторіалу ReactJS",
        image: projectimg2,
        link: "https://github.com/soanisimov/React-tic-tac-toe",
        link_text:"Подивитись на GitHub",
        link_icon_git: <RiGithubFill></RiGithubFill>,
        powered_by:"React",
    },
    {
        name: "JavaFX Maths",
        description: "JavaFX програма для квадратного рівняння та теореми Вієта",
        image: projectimg5,
        link: "https://github.com/soanisimov/JavaFX-Maths",
        link_text:"Подивитись на GitHub",
        link_icon_git: <RiGithubFill></RiGithubFill>,
        powered_by:"Java",
    },
    {
        name: "Schedule bot",
        description: "Бот створений для відображення поточного розкладу Київського столичного університету ім. Бориса Грінченка",
        image: projectimg4,
        link: "https://github.com/soanisimov/Schedule-bot",
        link_text:"Подивитись на GitHub",
        link_icon_git: <RiGithubFill></RiGithubFill>,
        powered_by:"Python",
    },
];

const Projects = () => {
    const projectsVariants = {
        hidden:{
            opacity: 0,
        },
        visible:{
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeInOut",
                // type:"spring",
            }
        }
    }
  return (
      <section className="px-6 py-10" id="work">
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">Проекти</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PROJECTS.map((project, index) => (
                  <motion.div
                      key={index}
                      className="relative rounded-lg overflow-hidden h-[500px] transition transform"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{once: true}}
                      variants={projectsVariants}
                  >
                      {/*<img*/}
                      {/*    src={project.image}*/}
                      {/*    alt={project.name}*/}
                      {/*    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-70"*/}
                      {/*/>*/}
                      <div
                          className="relative z-20 p-6 flex flex-col justify-between h-full rounded-3xl bg-gradient-to-br from-blue-500/30 to-purple-950/20 text-white">
                          <h2 className="text-3xl font-medium mb-4">{project.name}<p
                              className="text-sm text-blue-300/70">{project.powered_by}</p>
                          </h2>

                          <div className="flex flex-col justify-between">
                              <p className="mb-4 flex-grow text-2xl">{project.description}</p>
                              <a href={project.link} target="_blank" rel="noopener noreffer"
                                 className="flex items-center justify-center gap-1 bg-white text-stone-950 rounded-3xl py-2 px-2 w-45 text-sm  hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-white transition-all duration-150 text-center">{project.link_icon_git} {project.link_text} </a>
                          </div>
                      </div>
                  </motion.div>
              ))}
          </div>
      </section>

  )
}
export default Projects;