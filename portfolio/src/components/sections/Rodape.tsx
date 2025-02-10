import Image from "next/image";
import Link from "next/link";

export default function Rodape() {

    const links = [
        {
            icon: "/img/logo-1.png",
            title: "LOCALIZAÇÃO",
            text: "05044-000\nVila Romana, SP",
            url: "https://maps.app.goo.gl/KSgPF8kygt5mQYii6",
        },
        {
            icon: "/img/logo-2.png",
            title: "EMAIL",
            text: "dudabrigidioxv@gmail.com",
            url: "mailto:dudabrigidioxv@gmail.com?subject=&body=",
        },
        {
            icon: "/img/logo-3.png",
            title: "TELEFONE",
            text: "+55 11 966185903",
            url: "https://wa.me/5511966185903",
        },
        {
            icon: "/img/logo-4.png",
            title: "GITHUB",
            text: "github.com/dudabrigidio",
            url: "https://github.com/dudabrigidio",
        },
        {
            icon: "/img/logo-5.png",
            title: "LINKEDIN",
            text: "linkedin/mbrigidio/",
            url: "https://www.linkedin.com/in/mbrigidio/",
        },
    ];

    const LinkList = () => (
        <div className="pl-20 ml-20 pb-20 sm:pl-0 sm:ml-0 md:pl-0 md:ml-0 lg:pl-0 lg:ml-5">
            {links.map((link, index) => (
                
                <Link key={index} href={link.url} className="flex items-center gap-2 mb-6 ml-20">
                    <Image 
                    src={link.icon} 
                    alt={link.title}
                    width={24} 
                    height={24} 
                    className="" 
                    
                    />
                    <div className="ml-2">
                        <p className="mt-4 sm:text-s">{link.title}</p> 
                        <p className="text-xs mt-1">{link.text}</p>
                    </div>
                </Link>

            ))}
        </div>

    )

    


    return (


        <div className="flex flex-row pt-10 sm:m-0">

            <div className="flex flex-col">
                <h2 className="text-[3.5rem] sm:text-[2.5rem] p-20" >CONTATO</h2>
                <LinkList/>
            </div>
            <div className="ml-auto p-20 mr-[15%] mt-[15%] pb-0">
                <Image 
                    src="/img/contato-1.png" 
                    alt="imagem"
                    width={300} 
                    height={300} 
                    className="sm:max-w-0 md:max-w-0" 
                />
            
                <Image 
                    src="/img/contato-2.png" 
                    alt="imagem"
                    width={350} 
                    height={350} 
                    className="ml-[40%] mt-0 sm:max-w-0 md:max-w-0" 
                />
            </div>
        </div>
        

        
        
    );
}