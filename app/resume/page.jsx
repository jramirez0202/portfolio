"use client";
import { 
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaNodeJs
} from "react-icons/fa";

import {SiTailwindcss, SiNextdotjs, SiRubyonrails, SiBootstrap  } from "react-icons/si";

const about = {
  title: "About me",
  description: "I am a full stack developer with a passion for building web applications. I have a strong background in web development, with experience in front-end and back-end development. I am proficient in HTML, CSS, JavaScript, and React, and I have experience with Node.js and Tailwind CSS. I am also familiar with other web development technologies such as PHP, Python, and Ruby on Rails. I have a deep understanding of the principles of software development and have a strong ability to solve complex problems and create efficient and scalable applications.",
  info: [
    {
      filedName: "Name",
      fieldValue: "John Doe",
    },
    {
      filedName: "Phone",
      fieldValue: "+56 930762570",
    },
    {
      filedName: "Experiencia",
      fieldValue: "3 años",
    },
    {
      filedName: "Nacionalidad",
      fieldValue: "Venezuela",
    },
    {
      filedName: "Email",
      fieldValue: "Johkcolom@gmail.com",
    },
]
}

const experience = {
  icon:"/assets/resume/icons/badge.svg",
  title: "Mi Experiencia",
  description: "En mi experiencia, he trabajado en varias empresas y proyectos, utilizando diferentes lenguajes de programación y tecnologías. He desarrollado aplicaciones web, móviles, y de escritorio, y he trabajado en proyectos de software de terceros. También he participado en proyectos de investigación y desarrollo de software, y he trabajado en equipos de desarrollo de software para empresas y organizaciones. En mi trabajo, he ha aplicado técnicas de programación y diseño de software, y he ha trabajado en la creación de soluciones de software y aplicaciones web. Además, he ha trabajado en el desarrollo de aplicaciones web y móviles utilizando tecnologías como React, Node.js, y Tailwind CSS.",
  items:[
    {
      company:"empresa",
      position: "fullstack developer",
      duration: "2022-2023"
    },
    {
      company:"empresa dos",
      position: "fullstack developer",
      duration: "2022-2023"
    },
    {
      company:"empresa tres",
      position: "fullstack developer",
      duration: "2022-2023"
    },
    {
      company:"empresa tres",
      position: "fullstack developer",
      duration: "2022-2023"
    },
    {
      company:"empresa tres",
      position: "fullstack developer",
      duration: "2022-2023"
    },
    {
      company:"empresa tres",
      position: "fullstack developer",
      duration: "2022-2023"
    }
  ]
}

const education = {
  icon:"/assets/resume/icons/badge.svg",
  title: "Mi aprendizaje",
  description: "En mi experiencia, he trabajado en varias empresas y proyectos, utilizando diferentes lenguajes de programación y tecnologías. He desarrollado aplicaciones web, móviles, y de escritorio, y he trabajado en proyectos de software de terceros. También he participado en proyectos de investigación y desarrollo de software, y he trabajado en equipos de desarrollo de software para empresas y organizaciones. En mi trabajo, he ha aplicado técnicas de programación y diseño de software, y he ha trabajado en la creación de soluciones de software y aplicaciones web. Además, he ha trabajado en el desarrollo de aplicaciones web y móviles utilizando tecnologías como React, Node.js, y Tailwind CSS.",
  items:[
    {
      institution:"Desafio Latam Bootcamp",
      degree: "Certified Fullstack Developer",
      duration: "2022-2023"
    },
    {
      institution:"Udemy",
      degree: "react hooks ",
      duration: "2022-2023"
    },
    {
      company:"Coder house Bootcamp",
      degree: "frontend developer",
      duration: "2022-2023"
    }
  ]
}

const skills = {
  title: "Mis habilidades",
  description:"blbal bla",
  skillList:[
    {
      icon: <FaHtml5/>,
      name: "HTML5"
    },
    {
      icon: <FaCss3/>,
      name: "CSS3"
    },
    {
      icon: <FaJs/>,
      name: "JavaScript"
    },
    {
      icon: <FaReact/>,
      name: "React.js"
    },
    {
      icon: <SiTailwindcss/>,
      name: "Tailwind CSS"
    },
    {
      icon: <SiNextdotjs/>,
      name: "Next.js"
    },
    {
      icon: <SiRubyonrails/>,
      name: "Ruby on Rails"
    },
    {
      icon: <SiBootstrap/>,
      name: "Bootstrap"
    }
  ]
}

import {Tabs, TabsContent, TabList, TabsTrigger} from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { TabsList } from "@radix-ui/react-tabs";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: {delay:2.4, duration: 0.5, ease:"easeIn"},
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      > 
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experiencia</TabsTrigger>
            <TabsTrigger value="education">Educación</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="About Me">Acerca de mi</TabsTrigger>
          </TabsList>
          
        <div className="min-h-[70vh] w-full">
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {experience.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-2 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index) => {
                    return (
                      <li key={index} className="flex flex-col bg-[#232329] h-[184px] rounded-xl py-6 px-10 items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>                        
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-centerlg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                          <p className="text-white/60 text-sm">{item.company}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {education.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-2 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => {
                    return (
                      <li key={index} className="flex flex-col bg-[#232329] h-[184px] rounded-xl py-6 px-10 items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>                        
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-centerlg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                          <p className="text-white/60 text-sm">{item.institution}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{skills.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {skills.description}
              </p>
              </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skills, index) => {
                    return (
                      <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] group rounded-xl flex justify-center items-center">
                          <div className="text-6xl group-hover:text-accent transition-all duration-300">{skills.icon}</div> 
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skills.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>

            </div>
          </TabsContent>
          <TabsContent value="about" className="w-full">Acerca de mi</TabsContent>
        </div>
        
        </Tabs>      
      </div>
      </motion.div>
  )
}

export default Resume