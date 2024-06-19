import { DownloadCvButton } from "@/components/ui/button"


//////compoents///// 
import Social from "@/components/Social"
import Photo from "@/components/Photo"
import Stats from "@/components/Stats"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row  items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none"> 
            <span className="text-xl">Software developer</span>
            <h1 className="h1">
              Hola Soy <br/><span className="text-accent">Johan Ramirez</span>
            </h1>
            <p className="max-w-[500px] mv-9 text-white">
              Apasionado desarrollador fullstack en constante aprendizaje.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <DownloadCvButton/> 
                <div className="mb-8 xl:mb-0">
                  <Social 
                    containerStyles="flex gap-6"
                    iconStyles="w-7 h-7 flex justify-center items-center text-accent text-base hover:bg-primary hover:text-white hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          <div className=" order-1 xl:order-none mb-8 xl:mb-0 ">
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  )
}


export default Home