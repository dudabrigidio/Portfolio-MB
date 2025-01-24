import Image from "next/image";
import Animation from "./Animation";

export default function Habilidades() {
    return (
        <Animation>
            <div className="flex flex-row sm:flex-col items-center">
                <h1 className="text-[3.8rem] sm:text-center sm:mt-10 lg:text-[2.0rem] leading-none">Minha experiência acadêmica e profissional me permitiu desenvolver diversas habilidades.</h1>
                <Image
                    src="/img/blocos.png"
                    alt="Blocos"
                    className="sm:max-w-[300]"
                    width={400}
                    height={400}
                />

            </div>
        </Animation>
    );
}