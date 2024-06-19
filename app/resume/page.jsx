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
  title: "Quien soy?",
  description: "Soy un desarrollador fullstack apasionado por la innovación y la resolución de problemas en esta era digital. Disfruto trabajar en proyectos personales y aplicar soluciones a problemas reales. Actualmente formo parte de una startup, donde he adquirido un amplio conocimiento del negocio, la comprensión de las necesidades del cliente y la entrega de soluciones escalables. En lo personal, soy aficionado al deporte, tengo una mascota y me gusta estar informado sobre los avances tecnológicos.",
  info: [
    {
      fieldName: "Nombre",
      fieldValue: "Johan Ramirez",
    },
    {
      fieldName: "Experiencia",
      fieldValue: "3 años",
    },
    {
      fieldName: "Email",
      fieldValue: "johkcolom@gmail.com",
    },
    {
      fieldName: "Residencia",
      fieldValue: "Chile",
    },
    {
      fieldName: "Teléfono",
      fieldValue: "+56 930762570",
    },
  ]
}

const experience = {
  icon:"/assets/resume/icons/badge.svg",
  title: "Mi Experiencia",
  description: "Tengo experiencia en desarrollo de software y he usado diferentes herramientas y frameworks. Soy muy adaptable y me gusta trabajar en equipo. Actualmente me siento más cómodo trabajando como Frontend; sin embargo, el tiempo me ha llevado a tomar cariño por el Backend. Sé que cambia el paradigma de programación, pero me complementa como fullstack developer.",
  items:[
    {
      company:"GarageLabs",
      position: "fullstack developer",
      duration: "2021-actual"
    },
    {
      company:"Chornos app",
      position: "frontend developer",
      duration: "freelance 2023"
    },
    {
      company:"Properties in usa",
      position: "fullstack developer",
      duration: "freelance 2024"
    },
  ]
}

const education = {
  icon:"/assets/resume/icons/badge.svg",
  title: "Mi aprendizaje",
  description: "Estudié Ingeniería en Sistemas en Venezuela. En Chile, en 2020, tomé un Bootcamp que me permitió tener mi primera oportunidad laboral, la cual aproveché para seguir formándome y aplicar mis conocimientos en el desarrollo de software",
  items:[
    {
      institution:"Desafio Latam Bootcamp",
      degree: "Certified Fullstack Developer",
      duration: "2020"
    },
    {
      institution:"Udemy",
      degree: "React Hooks ",
      duration: "2022"
    },
    {
      institution:"CoderHouse Bootcamp",
      degree: "Certified Frontend Developer",
      duration: "2023"
    },
    {
      institution:"Autodidacta",
      degree: "Webinars, seminarios y workshops",
      duration: "En curso"
    }
  ]
}

const skills = {
  title: "Mis habilidades",
  description:"",
  skillList:[
    {
      icon: <FaReact/>,
      name: "React.js"
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
      icon: <FaJs/>,
      name: "JavaScript"
    },
    {
      icon: <SiTailwindcss/>,
      name: "Tailwind CSS"
    },
    {
      icon: <FaHtml5/>,
      name: "HTML5"
    },
    {
      icon: <FaCss3/>,
      name: "CSS"
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
            <TabsTrigger value="about">Acerca de Mí</TabsTrigger>
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

            <TabsContent value="about" className="w-full text-centerxl:text-left">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[600px] mx-auto xl:mx-0">
                  {about.info.map((info, index) => {                  
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60"> {info.fieldName}</span>
                        <span className="text-white/100"> {info.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>      
      </div>
    </motion.div>
  )
}

export default Resume