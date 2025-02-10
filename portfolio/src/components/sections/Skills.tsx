import Image from "next/image";
import Animation from "./Animation";

export default function Skillls() {
    const soft = ['Trabalho em equipe','Adaptabilidade', 'Criatividade', 'Resolução de Problemas', 'Comunicação ', 'Inteligência Emocional', 'Resiliência', 'Gestão de Tempo', 'Organização', 'Pensamento Crítico', 'Aprendizado Contínuo', 'Empatia']

    const hard = [
        {title: 'Linguagens de programação', skills: ['Java', 'Python', 'HTML/CSS', 'JavaScript', 'Linguagens de programação']},
        {title: 'Frameworks', skills: ['React', 'Next.js', 'Tailwind CSS']},
        {title: 'Bancos de Dados', skills: ['MySQL', 'SQL']},
        {title: 'Controle de versão', skills: ['Git', 'GitHub']},
    ]

    const idiomas = [ 'Inglês (Fluente)', 'Espanhol (Intermediário)', 'Francês (Intermediário)', 'Alemão (Básico)', 'Italiano (Básico)']

    const ListSoft = () => (
        <ul className="grid grid-cols-2 md:flex md:flex-col gap-2 gap-w-20 leading-tight p-10">
            {soft.map((skill, index) => (
                <li key={index} className="list-disc ">
                    <p>{skill}</p>
                </li>
                
            ))}
        </ul>
    );

    const ListHard = () => (
        <div className="grid grid-cols-2 gap-2 gap-w-0 sm:flex sm:flex-col leading-tight py-10 md:">
            {hard.map((skill, index) => (
                <div key={index} className="py-8 sm:py-4">
                    <h2 className="text-lg uppercase max-w-[55%]">{skill.title}</h2>
                    <ul className="leading-tight p-5">
                        {skill.skills.map((skill, index) => (
                            <li key={index} className="list-disc">
                                <p>{skill}</p>
                            
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
            
    );

    const ListIdiomas = () => (
        <div>
            <h1 className="text-[4.0rem] sm:mt-10 lg:text-[2.7rem] md:text-[3.5rem]">IDIOMAS</h1>
            {idiomas.map((idioma, index) => (
                <li key={index} className="list-disc">
                    {idioma}
                </li>
                

            ))}
        </div>
    );
        
    return (
        <div className="flex flex-col">
            <Animation>
                <div className="flex flex-row">
                    <div className="flex flex-col flex-1">
                        <h1 className="text-[4.0rem] sm:mt-10 lg:text-[2.7rem] md:text-[3.5rem]">SOFT SKILLS</h1>
                        <ListSoft/>
                    </div>
                    <div className="flex-1 items-end">
                        <Image
                            src="/img/skills-1.png"
                            alt="coffee"
                            className="ml-20 md:pr-20 md:mt-[90%]  sm:max-w-0"
                            width={400}
                            height={200}
                        />

                    </div>
                    
                
                </div>
            </Animation>

            <Animation>
                <div className="flex flex-row md:flex md:flex-col lg:flex-col">
                    <div className="flex flex-col">
                        <h1 className="text-[4.0rem] sm:mt-[50%] lg:text-[2.7rem] md:text-[3.5rem]">HARD SKILLS</h1>
                        <ListHard/>
                    </div>
                
                    <div className="flex-1 flex-col flex">
                        <Image
                            src="/img/skills-2.png"
                            alt="coffee"
                            className="mr-20 pr-20 "
                            width={300}
                            height={200}
                        />
                        <div className=" flex flex-col items-end lg:items-start mt-[30%] lg:my-20">
                            <ListIdiomas/>
                        </div>


                    </div>
                    
                </div>
            </Animation>

            
        </div>
            

    );
}
