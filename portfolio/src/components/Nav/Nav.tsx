'use client';
import Image from 'next/image';
import { useState } from 'react';


type MenuProps = {
    onNavigate: (section: string) => void;
};

export default function Menu({ onNavigate }: MenuProps)  {

    
        const [isOpen, setIsOpen] = useState(false);

        const openMenu = () => {
            setIsOpen(!isOpen);
        };

        return (
            <div>
            <button
                onClick={openMenu}
                className="w-12 h-12 flex items-center justify-center rounded-full hover:scale-105 transition-transform"
            >
                <Image
                src="/img/menu.png"
                alt="Menu de Navegação"
                width={32}
                height={32}
                />
            </button>

            {isOpen && (
                <div className="absolute right-0 top-14 backdrop-blur-md bg-black/30 rounded-xl overflow-hidden w-[200%] shadow-lg">
                <ul>

                    <li
                        onClick={() => onNavigate('about')}
                        className="p-3 flex justify-end hover:bg-gray-200 cursor-pointer text-[0.9rem]">
                            
                            Sobre Mim
                    </li>

                    <li 
                    onClick={() => onNavigate('projects')} 
                    className="p-3 flex justify-end hover:bg-gray-200 cursor-pointer text-[0.9rem]">
                        Projetos
                        
                    </li>
                    <li 
                    onClick={() => onNavigate('skills')}
                    className="p-3 flex justify-end hover:bg-gray-200 cursor-pointer text-[0.9rem]">
                        Skills
                    </li>

                

                </ul>
                </div>
                
            )}
            
            </div>
        );

}