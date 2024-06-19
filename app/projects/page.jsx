"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import WorkSliderBtns from "@/components/WorkSliderBtns";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import  Link  from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",    
    category: "Frontend",
    title: "Properties in usa",
    description:"Estoy trabajando en un proyecto para un grupo de corredores de bienes raíces en Florida. Ellos tenían la necesidad de compartir sus propiedades con clientes y aumentar las ventas. En esta primera etapa del proyecto, he integrado un sistema de correos electrónicos, un sistema de navegación de propiedades en Miami, el alojamiento web y los certificados SSL. Esto ha cumplido con el MVP inicial y deja las bases listas para continuar trabajando en otros puntos clave del proyecto, es un proyecto freelance que sera por etapas.",
    stack:[{name: "React"},{name: "Tailwind"},{name: "JavaScript"}],
    image:"/assets/propertiesinusa.com.png",
    live:"https://www.propertiesinusa.com",
    github:"https://github.com/jramirez0202/repo-properties-in-usa",
  },  
  {
    num: "02",    
    category: "Fullstack",
    title: "Data Sismologica",
    description:"Este proyecto vino a resolver una problematica sobre datos sismoligicos, donde cree una Task en Rails que filtra y trae datos sismoligicos de una API. Esto permite trabajar con datos de forma más sencilla y fácil, y también permite a los usuarios visualizar los datos hasta 30 dias después de la última actualización. Tambien hay un 2 endpoints para acceder a los datos y una endpoint para actualizar los datos, mas detalles en el readme del repositorio.",
    stack:[{name: "Rails"},{name: "Tailwind"},{name: "React"}],
    image:"/assets/data.png",
    live:"https://github.com/jramirez0202/SismologicTask",
    github:"https://github.com/jramirez0202/SismologicTask",
  },  
  {
    num: "03",    
    category: "Frontend",
    title: "Ecommerce App",
    description:"Este fue uno de mis primeros proyectos personales: un e-commerce clásico donde puedes agregar productos, editar los productos en el carrito de compras y realizar compras. Fue un proyecto sencillo y fácil de entender, pero que me permitió aprender un poco más sobre estas tecnologías. Además, despertó en mí la capacidad para trabajar con Firebase como cloud storage, hosting y funciones de Google Cloud.",
    stack:[{name: "JavaScript"},{name: "React"},{name: "Tailwind"}],
    image:"/assets/ecommerce.png",
    live:"https://www.propertiesinusa.com",
    github:"https://github.com/jramirez0202/repo-properties-in-usa",
  },
]

const Project = () => {
  const  [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section 
    initial={{ opacity: 0 }} 
    animate={{ 
      opacity: 1,
    transition: {delay:2.4, duration: 0.4, ease:"easeIn" } 
    }}
    className="min-h-[70vh] flex flex-col items-center justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize"> {project.title}
              </h2>
              <h2 className="text-[32px] font-bold leading-none text-accent group-hover:text-accent transition-all duration-500 capitalize">{project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index != project.stack.length -1 && ","}
                  </li>
                  );
                })} 
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex gap-4 text-center">
                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex group items-center justify-center">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Proyecto activo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex group items-center justify-center">
                        <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Repositorio Github</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
          <Swiper 
              spaceBetween={30} 
              slidesPerView={1} 
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}>
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 left-0 w-full h-full bg--black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill
                      />
                    </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-auto xl:justify-none"
                btnStyles="bg-accent hover:bg-white text-primary text-[22px] w-[30px] h-[30px] flex items-center justify-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Project;