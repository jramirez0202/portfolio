"use client";
import CountUp from "react-countup";

const stats = [
  { num: "12",
    text:"Años Experiencia",
  },
  { num: "2",
    text:"Varios Proyectos",
  },
  { num: "12",
    text:"code commits",
  },
  { num: "100",
    text:"code commits",
  }

];

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
          return (
          <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
            <CountUp 
              end={item.num} 
              duration={5} 
              delay={2} 
              className="text-4xl xl:text-6xl font-extrabold"
            />
            <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80` }>
              {item.text}
            </p>
          </div>
        )})}
        </div>
      </div>
    </section>
  )
}

export default Stats