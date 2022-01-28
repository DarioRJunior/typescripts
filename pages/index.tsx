const mensagemInicial: string = 'Olá pessoas, este site mostra meu Nome, Bio e meu site do github no console, Inspecione a página e abra o console para visualizar';

interface RespostaDaAPIDoGithub {
    bio: string;
    name: string;
    blog: string;
}
function pegaDadosDoGithub(): Promise<RespostaDaAPIDoGithub> {
    return fetch('https://api.github.com/users/DarioRJunior')
        .then((resposta) => resposta.json())
        .then((respostaDaAPI) => {
            return {
                ...respostaDaAPI,
                bio: respostaDaAPI.bio,
            };
        })
}

export default function Home() {

    pegaDadosDoGithub()
        .then((dados) => {
            console.log('Dados:', dados.name, dados.bio, dados.blog);
        })

    return (
        <div>
            {mensagemInicial}
        </div>
    )
}