import Image from "next/image";
import Animation from "./Animation";

export default function Projetos() {
    return (
        <div className="flex flex-col mt-20 md:items-center lg:items-center">

            <Animation>
                <div className="flex flex-row max-w-full space-x-0 sm:flex-col md:flex-col lg:flex-col">
                    <div className="flex flex-col w-max-[200px] space-y-0 sm:space-y-[25%] md:space-y-[25%] ">
                        <h1 className="text-[3.0rem] sm:mt-10 lg:text-[2.7rem] md:text-[3.5rem]">PROJETOS <br/> REALIZADOS</h1>
                        
                        <div className="flex space-x-5 items-center pt-[55%] sm:pt-10 md:pt-0 lg:pt-20 sm:pl-2 md:pl-2">
                            <h1 className="text-[4.0rem] lg:text-[3rem] md:text-[3.5rem]">01</h1>
                            <div className="flex flex-col w-[60%]">
                                <h2 className="text-[1.6rem] sm:mt-10 md:mt-3 lg:mt-3">MECHIA - PORTO SEGURO</h2>
                                <p className="text-xs w-[100%]">Desenvolvemos uma solução inovadora em um projeto acadêmico para a Porto Seguro: um portal que permite ao usuário realizar o diagnóstico do veículo de forma 100% online e agendar um horário com o mecânico, proporcionando mais praticidade e otimização de tempo.</p>
                                
                                <a href="https://github.com/andre-abreu20/Challenge-Sprint-4-MechIA.git" className="text-xs px-10 mt-5 mb-2 sm:px-2 backdrop-blur-md bg-black/5 rounded-md shadow-sm hover:bg-black/30 hover:text-white">REPOSITÓRIO GITHUB</a>
                                <a href="https://mechia.vercel.app/" className="text-xs px-10 mb-2 sm:px-2 backdrop-blur-md bg-black/5 rounded-md shadow-sm hover:bg-black/30 hover:text-white">WEBSITE</a>
                            </div>
                        </div> 
                    </div>
                    <Image
                        src="/img/mechia.png"
                        alt="Perfil"
                        className="max-w-full mt-10 h-auto"
                        width={1500}
                        height={100}
                    />
                </div>
            </Animation>

            <Animation>
                <div className="flex flex-row max-w-full sm:flex-col md:flex-col lg:flex-col mt-[20%] ">
                    <div className="flex flex-col space-y-[50%] sm:space-y-[25%] md:space-y-[25%] ">
                        
                        <div className="flex space-x-5 items-center pt-[55%] sm:pt-10 md:pt-0 sm:pl-2 md:pl-2">
                            <h1 className="text-[4.5rem] lg:text-[3rem] md:text-[3.5rem]">02</h1>
                            <div className=" w-[60%]">
                                <h2 className="text-[1.8rem] sm:mt-10 md:mt-3">MISS HAIR STUDIO</h2>
                                <p className="text-xs">Desenvolvimento do design do site e estratégias digitais que resultaram em aumento do engajamento da marca.</p>
                            </div>
                        </div> 
                    </div>
                    <Image
                        src="/img/misshair.png"
                        alt="Perfil"
                        className="max-w-full pl-5 mt-10 h-auto"
                        width={1200}
                        height={100}
                    />
                </div>
            </Animation>
        
                

            <Animation>  
                <div className="flex flex-row sm:flex-col-reverse md:flex-col-reverse lg:flex-col-reverse py-20 space-x-[5%] sm:space-x-0 md:space-x-0 items-start ">
                    <Image
                        src="/img/techvolt.png"
                        alt="Perfil"
                        className="max-w-full mt-10 h-auto"
                        width={1500}
                        height={300}
                    />
                    <div className="flex flex-row space-x-5 mt-[10%]">
                        <h1 className="text-[4.5rem] lg:text-[3rem] md:text-[3.5rem] ">03</h1>
                        <div className="flex flex-col  w-[60%]">
                            <h2 className="text-[1.8rem] mt-5 md:mt-3" >TECHVOLT</h2>
                            <p className="text-xs mb-5">Projeto acadêmico desenvolvido para promover a sustentabilidade, desenvolvido em Next.js Typescript com API RestFul em Java e conexão com banco de dados Sql Oracle.</p>
                            <a href="https://github.com/andre-abreu20/Tech-Volt.git" className="text-xs px-10 mb-2 sm:px-2 backdrop-blur-md bg-black/5 rounded-md shadow-sm hover:bg-black/30 hover:text-white">REPOSITÓRIO GITHUB</a>
                            <a href="https://github.com/dudabrigidio/TechVolt-api.git" className="text-xs px-10 sm:px-2 sm:px-2 backdrop-blur-md bg-black/5 rounded-md shadow-sm hover:bg-black/30 hover:text-white">API RESTFUL GITHUB</a>

                        </div>
                    </div>

                </div>
            </Animation>

            <Animation>

                <div className="flex flex-row sm:flex-col md:flex-col lg:flex-col space-x-[10%] sm:items-center sm:space-x-0 md:items-center ">
                    
                    <div className="flex flex-row space-x-5 mt-[10%] ">
                        <h1 className="text-[4.0rem] lg:text-[3rem] md:text-[3.5rem]">04</h1>
                        <div className="flex flex-col  w-[60%]">
                            <h2 className="text-[1.7rem] mt-5 md:mt-3">OCEAN PROTECH</h2>
                            <p className="text-xs text-justify mb-5">Projeto acadêmico desenvolvido para promover a salvação dos oceanos, desenvolvido em HTML, CSS e JavaScript</p>
                            <a href="https://github.com/dudabrigidio/OceanProTech.git" className="text-xs  px-10 mb-2 sm:px-2 backdrop-blur-md bg-black/5 rounded-md shadow-sm hover:bg-black/30 hover:text-white">REPOSITÓRIO GITHUB</a>
                        </div>
                    </div>
                    
                    <Image
                        src="/img/ocean.png"
                        alt="Perfil"
                        className="max-w-full h-auto"
                        width={1200}
                        height={300}
                    />
                    

                </div>
            </Animation>
        </div>

    );
}