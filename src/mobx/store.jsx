import { makeAutoObservable, toJS } from "mobx";

class Store {
    users = [];
    constructor() {
        makeAutoObservable(this)
    }

    getUsers(users) {
        this.users = users;
    }

    updateUser(field, id) {
        this.users = this.users.map(user => user.id === id ? this.handleChangeField(user, field) : user);
    }
    
    handleChangeField = (user, field) => {
        user = Object.keys(user).map(key => key !== Object.keys(field).toString() ? { [key]: user[key] } : field);
       
        return user.reduce((result, item) => {
            let key = Object.keys(item)[0]
            result[key] = item[key]
            return result
        }, {});
    }

    addNewUser(user) {
        this.users.push(user);
    }

    deleteUser(id) {
        this.users = this.users.filter(user => user.id !== id);
    }
}

export default new Store();