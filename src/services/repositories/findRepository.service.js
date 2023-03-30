import {repositories} from '../../database'


const findRepositoryService = ({id}) => {
    const repository = repositories.find((repository) => repository.id === id)

    if(!repository){ 
        throw new Error("Repository not found")
    }
    return repository
}

export default findRepositoryService