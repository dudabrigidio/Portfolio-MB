"use client";
import Main from "@/components/sections/Main";
import About from "@/components/sections/About";
import Journey from "@/components/sections/Journey";
import Objetivo from "@/components/sections/Objetivo";
import Projetos from "@/components/sections/Projetos";
import Habilidades from "@/components/sections/Habilidades";
import Skillls from "@/components/sections/Skills";
import Animation from "@/components/sections/Animation";
import { useRef } from "react";
import Rodape from "./Rodape";



export default function Home() {
    const aboutSectionRef = useRef<HTMLDivElement | null>(null); 
    const projetosSectionRef = useRef<HTMLDivElement | null>(null); 
    const skillsSectionRef = useRef<HTMLDivElement | null>(null); 
    const contatoSectionRef = useRef<HTMLDivElement | null>(null); 
    

    const handleScroll = (section: string) => {
        if (section === 'about' && aboutSectionRef.current) {
            aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (section === 'projects' && projetosSectionRef.current) {
            projetosSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (section === 'skills' && skillsSectionRef.current) {
            skillsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (section === 'contato' && contatoSectionRef.current) {
            contatoSectionRef.current.scrollIntoView({ behavior: 'smooth'});
        
    };
    }

    

    return (
    

        <div className="h-screen w-max-[100%] overflow-x-hidden">
            <Animation>
                <div className="bg-custom-gray text-white p-20 sm:p-0 sm:pl-10">
                <Main onNavigate={handleScroll}/>
                </div>
            </Animation>

            <div ref={projetosSectionRef} className="bg-custom-beige w-full text-custom-dark-gray py-20 pl-20 pr-[5%] sm:p-20 md:p-12 lg:p-12">
                <Projetos/>
            </div>

            <div ref={aboutSectionRef} className="bg-custom-light  w-max-[100%] overflow-x-hidden text-white p-20 sm:p-0">
                <About/>
                <Journey/>
            </div>
        
            <div className="bg-custom-beige  w-full text-custom-brown px-20 py-10">
                <Habilidades/>
            </div>
            <div ref={skillsSectionRef} className="bg-custom-gray w-full text-white px-20 py-10">
                <Skillls/>
            </div>
            <div className="bg-custom-beige w-full text-custom-brown min-h-screen">
                <Objetivo/>
            </div>
            <div ref={contatoSectionRef} className="bg-custom-light w-full text-white min-h-screen">
                <Rodape/>
            </div>
        </div>
        
    );
}