import router from "../../router"
import axios from 'axios'
import decode from 'jwt-decode'

const state = () => ({
    token: localStorage.getItem('token') || '',
    userDB: '',
    message: '',
    loading: false,
    userInput: {
      email: '',
      password: ''
    },
    newUserInput: {
      name: '',
      email: '',
      password: '',
    },
})

const mutations = {
    setNewUserInput(state, payload) {
      state.newUserInput = payload
    },
    setUserInput(state, payload) {
      state.userInput = payload
    },
    setUser(state, payload) {
        state.newUser = payload
    },
    setMessage(state, payload) {
      state.message = payload
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    getUser(state, payload) {
        state.token = payload
        if(payload === '') {
            state.userDB = ''
        } else {
            state.userDB = decode(payload)
      }
    },
    cleanUserInput(state) {
      state.userInput.email = "";
      state.userInput.password = "";
    },
    cleanNewUserInput(state) {
      state.newUserInput.name = "";
      state.newUserInput.email = "";
      state.newUserInput.password = "";
    }
}

const actions = {

    registerUser({commit, state, dispatch}, payload) {
        return new Promise((resolve, reject) => {
          payload = state.newUserInput;
          commit('setLoading', true);
          axios.post('/users/new-user', payload)
          .then(() => {
            setTimeout(async() => {
              await dispatch('loginUser', {email: payload.email, password: payload.password})
              setTimeout(() => {
                 commit('cleanNewUserInput');
              }, 100)
            }, 200)
          }, resolve())
          .catch(err => {
            commit('setLoading', false);
            const message = err.response.data.message;
            commit('setMessage', message);
            setTimeout(() => {
            commit('setMessage', '');
            }, 3000)
            reject();
          })
        })
    }, 

    loginUser({commit, state, dispatch}, user) {
      commit('setLoading', state.loading === false ? true : false);
        axios.post('/login', user)
         .then(res => {
           let token = res.data.token;
           let username = res.data.userDB.name;
           console.log(username);
           let userInfo = {
             token: token,
             username: username
           }
           dispatch('saveUser', userInfo);
           commit('setLoading', false);
           router.push({
             path: '/user/' + username 
           });
           setTimeout(() => {
            commit('cleanUserInput');
           }, 200)
           commit('setLoading', false);
         })
         .catch(err => {
           commit('setLoading', false);
           const message = err.response.data.message;
           commit('setMessage', message);
           setTimeout(() => {
            commit('setMessage', '');
           }, 3000)
       })
    },

    saveUser({commit}, userInfo) {
        localStorage.setItem('username', userInfo.username);
        localStorage.setItem('token', userInfo.token);
        commit('getUser', userInfo.token);
    },

    readToken({commit}) {
      const token = localStorage.getItem('token');
      if(token) {
        commit('getUser', token);
      } else {
        commit('getUser', '');
      }
    },

    signOut({commit}) {
        commit('getUser', '');
        localStorage.removeItem('token');
        setTimeout(() => {
          router.push({
            name: 'Register'
          });
        }, 200)
    },
}

const getters = {
    isActive: state => !!state.token,
    cleanNewUserInput: (state) => {
      return state.newUserInput = "";
    },
    cleanUserInput: state => state.cleanUserInput = {},
    checkLoadingStatus: state => state.loading = !state.loading
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }