import router from '../../router/index'
import axios from 'axios'

const state = () => ({
    newListInput: {
      title: "",
      items: ""
    },
    listUpdateInput: {
      listId: "",
      newItems: ""
    },
    newList: '',
    listsData: '',
    listData: '',
    userId: '',
    listsTotal: 0,
    listsLimit: 12,
    actualPage: 0,
})

const mutations = {
    setInput(state, payload) {
      state.newListInput = payload
    },
  
    setList(state, payload) {
        state.listData = payload
      },

    setLists(state, payload) {
      state.listsData = payload
    },
}

const actions = {

    getLists({rootState}){
        let config = {
            headers: {
                token: rootState.user.token
            }
        }
        axios.get('/api/lists', config)
        .then(res => {
          console.log(res.data)
          this.state.listsData = res.data
          console.log(rootState.lists.listsData)
        })
        .catch(e => {console.log(e)})
      },  
  
    getList({commit, rootState}, id) {
        let config = {
          headers: {
            token: rootState.user.token
          }
        }
        axios.get('/api/list/' + id, config)
        .then(res => {
          commit('setList', res.data)
        })
        .catch(e => {console.log(e)})
      },
  
    postList({dispatch, rootState}, list) {
        let config = {
          headers: {
            token: rootState.user.token
          }
        }
        return new Promise((resolve, reject) => {
          axios.post('/api/new-list', list, config)
          .then(res => {
            console.log(res.data)
            setTimeout(() => {
              dispatch('getLists')
              router.push({
                name: 'UserLists'
              })
            }, 20)
          },
          resolve())
          .catch(e => {console.log(e)}, reject())
        })
      },
    deleteList({dispatch, rootState}, id) {
        let config = {
          headers: {
            token: rootState.user.token
          }
        }
        return new Promise((resolve, reject) => {
          axios.delete('/api/list/' + id, config)
          .then(res => {
            console.log(res.data)
            setTimeout(() => {
              dispatch('getLists')
              router.push({
                name: 'UserLists'
              })
            }, 20)
          }, resolve())
          .catch(e => {console.log(e)}, reject())
        })
      },
      updateList({dispatch, rootState}, body) {
        let config = {
          headers: {
            token: rootState.user.token
          }
        }
        return new Promise((resolve, reject) => {
          let id = body.id
          axios.put('/api/list/' + id, body, config)
          .then(res => {
            console.log(res.data)
            setTimeout(() => {
              dispatch('getLists')
              router.push({
                name: 'UserLists'
              })
            }, 20)
          }, resolve())
          .catch(e => {console.log(e)}, reject())
        })
      }
}

const getters = {
    countLists: (state) => {
      const listDataLenght = state.listsData.lenght;
      const size = state.listsLimit;
      return Math.ceil(listDataLenght/size);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }