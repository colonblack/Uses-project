
import axios from '../axios/axios'
const state={
    users:[]
}

//getter

const getters={
    allUsers:state=>state.users
       
}

const actions={
    async fetchUsers({commit}){
        const res = await axios.get('user');

        commit('SetUsers', res.data.data)
    },
    
    

}

const mutations = {
    SetUsers: (state, users) => (state.users = users)
};

export default{
    state,
    getters,
    actions,
    mutations
}

