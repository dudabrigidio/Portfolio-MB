import Animation from "./Animation";

export default function Journey() {

    const estudos = [
        {title: 'Ensino Médio', local: 'Coimbra, Portugal', data: 'Concluído em 2021'},
        {title: 'Análise e Desenvolvimento de Sistemas', local: 'FIAP, São Paulo', data: 'atualmente'},
        {title: 'Francês (1 ano), Alemão e Espanhol (6 meses)', local: 'Universidade de Coimbra', data: '2020'}
    ]

    const trabalhos = [
        {title: 'Assistente de Marketing (Freelance)', local: 'Miss Hair Studio', data: 'atualmente'},
        {title: 'Vendedora (Setor de Moda)', local: 'El Corte Inglés Portugal, Lisboa', data: 'ago 2022- fev 2023'},
        {title: 'Vendedora (Setor de Tecnologia)', local: 'Altice Portugal, Lisboa', data: 'mar 2022 - jul 2022'}
    ]

    const ListEstudos = () => (
        <div className="border-t-[1.5px] border-custom-dark">
            <h1 className="text-[2.5rem] mt-10">Estudos</h1>
            <ul className="">
                {estudos.map((estudo, index) => (
                    <li key={index} className="py-5">
                        <p>{estudo.title}</p>
                        <p>{estudo.local} | {estudo.data}</p>
                    </li>
                    ))}
            </ul>
        </div>
    )

    const ListTrabalhos = () => (
        <div className="border-t-[1.5px] border-custom-dark">
            <h1 className="text-[2.5rem] mt-10">Trabalhos</h1>
            <ul className="">
                {trabalhos.map((trabalho, index) => (
                    <li key={index} className="py-5">
                        <p>{trabalho.title}</p>
                        <p>{trabalho.local} | {trabalho.data}</p>
                    </li>
                    ))}
            </ul>
        </div>
    )


    return (
        <Animation>
            <div className="flex pb-20  lg:flex-col sm:p-10 sm:justify-center">
                <div className="w-full ">
                    <h1 className="text-[4.5rem] mt-[20%] sm:mt-10 lg:text-[3rem] md:text-[3.5rem] leading-none"> MINHA <br/> JORNADA </h1>
                    <Animation>
                    <div className="flex justify-end itens-end sm:flex-col md:flex-col py-20 space-x-20 sm:space-x-0 sm:space-y-20 md:space-x-0 md:space-y-20">
                    
                        <ListEstudos/>
                        <ListTrabalhos/>
                    
                    </div>
                    </Animation>
                </div>
            </div>
        </Animation>
    );
}