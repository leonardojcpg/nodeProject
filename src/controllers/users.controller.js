import createUsersService from '../services/users/createUser.service'
import listUsersService from '../services/users/listUsers.service'

export default class UserController{
    async store(request, response){
        const {email, name, password, isAdm} = request.body
        const user = await createUsersService({email, name, password, isAdm})

        return response.status(200).json(user)
    }

    index(request, response){
        const users = listUsersService()

        return response.json(users)
    }
}