import axios from 'axios';

export default class Api {
    
    static loadUsers = async (page = null) => {
        const response = axios.get(getUrl(page)()).then(response => response.data)
                                                  .catch(error => console.error(error));
        return response;
    };

    static loadUserInfo = async id => {
        const response = await axios.get(getUrl()(id)).then(response => response.data)
                                                      .catch(error => { throw new Error(error) });
        return response;
    };

}

const getUrl = page => {
    let path = page ? `?page=${page}` : '/';
    return (user_id='') => {
        path += user_id
        return `https://reqres.in/api/users${path}`
    }
}