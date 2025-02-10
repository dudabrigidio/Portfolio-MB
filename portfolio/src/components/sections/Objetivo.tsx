import Image from "next/image";
import Animation from "./Animation";

export default function Objetivo () {
    return (
        <div className=" w-full px-20 pb-20 sm:py-20">
            <Animation>
            <div className="flex flex-col items-center">
                <h1 className="text-center leading-none text-[4.5rem] mt-[20%] sm:my-10 lg:text-[2.5rem] md:text-[3.5rem] ">OBJETIVO<br/>PROFISSIONAL</h1>

                <Image 
                                    src="/img/objetivo.png" 
                                    alt="imagem"
                                    width={350} 
                                    height={350} 
                                    className="mt-0" 
                                />
                <p className="text-center max-w-[60%] sm:max-w-full text-[0.8rem] py-10">Busco um estágio em Desenvolvimento de Software para aplicar e aprimorar minhas habilidades técnicas, contribuindo para a criação de soluções tecnológicas que melhorem a vida das pessoas. Acredito que a tecnologia tem poder para transformar o mundo e promover um impacto positivo na sociedade.</p>
            </div >
            </Animation>

        </div>
        
    );
}