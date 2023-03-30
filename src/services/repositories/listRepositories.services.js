import repositories from '../../database'


// UTILIZANDO SERVICES, É POSSIVEL UTILIZAR CLASSES TAMBEM.
// SEGUINDO O SRP, DEVE APENAS TER O METODO execute()
const listRepositoriesService = () => {
    return repositories
}

export default listRepositoriesService