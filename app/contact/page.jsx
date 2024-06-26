"use client";

import {Button} from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import{FaLinkedin , FaEnvelope, FaMapMarkerAlt} from "react-icons/fa"
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
  SelectItem

} from "@/components/ui/select";

const info = [

  {
    icon: <FaEnvelope />,
    title: "Email",
    description:"johkcolom@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description:"Santiago, Chile",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    description:"",
  },
]

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }} 
      animate={{ 
        opacity: 1,
      transition: {delay:2.4, duration: 0.4, ease:"easeIn" } 
      }}
      className="py-6"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            <div className="xl:h-[54%] order-2 xl:order-none">
              <form className=" flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Trabajemos juntos</h3>
              <p className="text-whithe/60"> Para mi contacto dejo mi CV para descargar en el home y correo electrónico. Siempre me encuentran por estos medios.</p> 
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Nombre" />
                <Input type="lastname" placeholder="Apellido" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Teléfono" />
              </div>
              {/* <Select>
                <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a service"/>
                </SelectTrigger>
                <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value="1">Full Stack Developer</SelectItem>
                  <SelectItem value="2">Full Stack Developer</SelectItem>
                  <SelectItem value="3">Full Stack Developer</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select> */}

              <Textarea
                className="h-[200px]"
                placeholder="Escribe un mensaje"
                />
                <Button
                  size="sm"
                  className="max-w-40"
                  disabled={true}
                  style={{ pointerEvents: "none" }} 
                  >
                    En construcción
                </Button>
              </form>
              </div>
              <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                <ul className="flex flex-col gap-10">
                  {info.map((item, index) => (  
                    <li key={index} className="flex items-center gap-6"> 
                      <div className="w-[52px] h-[52] xl:w-[72px] xl:h-[72] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                        <div className="text-[28px]">
                          {item.icon}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-accent">{item.title}</p>
                        <h3 className="text-sm text-whithe/60">{item.description}</h3>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
          </div>
        </div>
      
    </motion.section>
  )
}

export default Contact