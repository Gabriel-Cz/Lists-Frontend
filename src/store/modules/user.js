import router from "../../router"
import axios from 'axios'
import decode from 'jwt-decode'

const state = () => ({
    token: localStorage.getItem('token') || '',
    userDB: '',
    message: '',
    loading: false,
    userError: false,
    userInput: {
      email: '',
      password: ''
    },
    newUserInput: {
      username: '',
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

        payload === '' ? 
        state.userDB = '' :
        state.userDB = decode(payload); 
    },

    cleanUserInput(state) {
      state.userInput.email = "";
      state.userInput.password = "";
    },

    cleanNewUserInput(state) {
      state.newUserInput.name = "";
      state.newUserInput.email = "";
      state.newUserInput.password = "";
    },

    setUserError(state, payload) {
      state.userError = payload;
    }

}

const actions = {

    async registerUser({commit, state, dispatch}, user) {
      user = state.newUserInput;
      commit('setLoading', true);
      try {
        await axios.post('/user/signUp', user);
        await dispatch('loginUser', { email: user.email, password: user.password });
        commit('setLoading', false);
        commit('cleanNewUserInput');
      } catch (error) {
          commit('setLoading', false);
          dispatch('userError', error.response.data.message);
      }
    }, 

    async loginUser({commit, dispatch}, user) {
      commit('setLoading', true);
      try {
        let loginResponse = await axios.post('/login', user);
        const { token, username } = loginResponse.data;
        await dispatch('saveUser', token, username);
        commit('setLoading', false);
        commit('cleanUserInput');
        router.push({
          path: `/user/${username}` 
        });
      } catch (error) {
          commit('setLoading', false);
          dispatch('userError', error.response.data.message);
      }
    },

    saveUser({commit}, token, username) {
      localStorage.setItem('username', username);
      localStorage.setItem('token', token);
      commit('getUser', token);
    },

    readToken({commit}) {
      const token = localStorage.getItem('token');      
      if(token) commit('getUser', token);
      else commit('getUser', '');
    },

    async signOut({commit}) {
      await commit('getUser', '');
      localStorage.removeItem('token');
      router.push({
        name: 'Login'
      });
    },

    userError({commit}, error) {
      commit('setUserError', error);
      setTimeout(() => {
        commit('setUserError', false);
      }, 2500);
    }
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