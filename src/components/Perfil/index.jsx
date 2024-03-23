import styles from './Perfil.module.css'

const Perfil = ({nomeUsuario}) => {
    const usuario = {
        nome: 'Danillo Guimarães',
        avatar: 'https://github.com/danilloneo.png'
    }
    return (      
        <header className={styles.header}>
        <div className={styles.shadow}>
        </div>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} />
            <h1 className={styles.name}>{nomeUsuario}</h1>  
        </header>
        
    )
}

export default Perfil;

//como passamos na tag customizada nome='Danillo' ao utilizar props.nome 
//o nome printado na tela foi Danillo la da tag <Perfil> e a foto permaneceu a mesma por causa do
//endereço estar correto

// class="perfil-avatar" n é correto, ele entende como uma classe do javascript embora funcione

// exports default () => {

// const usuario = {
//     nome: 'Danillo Guimarães',
//     avatar: 'https://github.com/danilloneo.png'
// }
// return (
//     <div>
//         <img className='perfil-avatar' src={usuario.avatar} />
//         <h3 className='perfil-titulo'>{usuario.nome}</h3>
//     </div>
// )

//}


//ou 

//exports default function () {

// const usuario = {
//     nome: 'Danillo Guimarães',
//     avatar: 'https://github.com/danilloneo.png'
// }
// return (
//     <div>
//         <img className='perfil-avatar' src={usuario.avatar} />
//         <h3 className='perfil-titulo'>{usuario.nome}</h3>
//     </div>
// )

//}

//exportando como uma funçãop anonima
//a gente vai seguir no exercicio exportando a arrow function passando um nome pra ela como Perfil