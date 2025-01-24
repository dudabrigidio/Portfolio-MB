import Image from "next/image";
import Animation from "./Animation";

export default function About() {

    

    return (
        <Animation>
            <div className="flex pb-0 sm:flex-col md:flex-col lg:flex-col sm:p-10 sm:justify-center lg:items-center">
                <div className="max-w-[70%] sm:max-w-full sm:p-8 lg:max-w-[100%] ">
                    <Animation>
                        <h1 className="text-[4.5rem] mt-[20%] sm:mt-10 lg:text-[3rem] md:text-[3.5rem] lg:justify-center"> SOBRE MIM </h1>
                    </Animation>
                    <p className="w-[76%] mt-10 text-[0.9rem] text-justify sm:mt-5 sm:w-[100%] md:w-[100%]">Sou estudante de Análise e Desenvolvimento de Sistemas na FIAP, apaixonada por tecnologia e inovação. Tenho facilidade em aprender rápido e uma forte afinidade com lógica e programação, o que me permite desenvolver soluções criativas e eficientes. Meu objetivo é contribuir para projetos que impactem positivamente a vida das pessoas, unindo habilidades técnicas sólidas com um olhar estratégico.
                    Com uma base em front-end e back-end, gosto de explorar novas ferramentas e metodologias para criar aplicações funcionais e visualmente atraentes. Além disso, valorizo a colaboração e o aprendizado contínuo, acreditando que o trabalho em equipe é essencial para alcançar resultados de excelência.</p>
                </div>

                
                <Image
                src="/img/perfil.png"
                alt="Perfil"
                className="sm:p-5 md:mt-10 lg:pt-10 h-auto"
                width={500}
                height={300}
                />
                
            </div>
        </Animation>
    );
}