import Image from "next/image";
import Menu from "../Nav/Nav";

type MainProps = {
    onNavigate: (section: string) => void;
};

export default function Main({ onNavigate }: MainProps) {
    


    return (
        <div className="flex flex-col sm:pt-0">
            <div>
            
                <div className="flex flex-row mb-0 items-end md:my-20 lg:pt-20">
                    
                    
                        <div className="max-w-[50%] sm:max-w-0">
                            
                            <Image
                                src="/img/home-1.png"
                                alt="Computador"
                                className="sm:max-w-0 sm:h-auto"
                                width={550}
                                height={100}
                            /> 
                        </div>
                        <div className="max-w-[27%] ml-5 sm:max-w-0">
                            <Image
                                src="/img/home-2.png"
                                alt="Código"
                                className="md:max-w-0"
                                width={340}
                                height={100}
                            /> 
                        </div>
                    
                        


                    <Menu onNavigate={onNavigate} />
                    
                    <h1 className="text-[6.0rem] sm:p-0 sm:mr-10  lg:text-[4rem] sm:text-[4rem] leading-none mb-0 pl-20 mr-10 ">MARIA BRIGIDIO</h1>

                </div>
        
                
            </div>

            <div className="flex ">
                <p className="w-[40%] sm:w-[60%] sm:pt-0 mt-10 pt-20 mb-20 mr-20 sm:mr-0 text-[1rem]  md:mt-0">Estudante de Análise e Desenvolvimento de Sistemas, com experiência acadêmiem desenvolvimento web, estratégias digitais e back-end. Apaixonada por tecnologia e lógica, foco no aprimoramento contínuo, na colaboração e na criação de soluções inovadoras e eficazes.</p>
            
                <div className="max-w-[40%] ml-20 pl-20 sm:pt-0 sm:mt-0 mr-10 sm:ml-0 sm:mr-10 sm:max-w-[100%]">
                    <Image
                        src="/img/home-3.png"
                        alt="Developer"
                        className=""
                        width={300}
                        height={300}
                    />
                </div>
            </div>
            

        </div>
    );
}