import router from '../../router/index'
import axios from 'axios'

const state = () => ({
    newListInput: {
      title: "",
      items: ""
    },
    updateListInput: {
      listId: "",
      newTitle: "",
      newItems: "",
    },
    sharedUser: '',
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

    setNewTitle(state, payload) {
      state.updateListInput.newTitle = payload
    },

    setNewItems(state, payload) {
      state.updateListInput.newItems = payload
    },

    setList(state, payload) {
        state.listData = payload
    },

    setLists(state, payload) {
      state.listsData = payload
    },
    
    setSharedUser(state, payload) {
      state.sharedUser = payload
    }
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
        })
        .catch(e => {window.alert(e)})
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
        .catch(e => {window.alert(e)})
      },
  
    postList({dispatch, rootState}, list) {
        let config = {
          headers: {
            token: rootState.user.token
          }
        }
        return new Promise((resolve, reject) => {
          axios.post('/api/new-list', list, config)
          .then(() => {
            setTimeout(() => {
              dispatch('getLists')
              router.push({
                name: 'UserLists'
              })
            }, 20)
          },
          resolve())
          .catch(e => {
            window.alert(e)
            reject()
          })
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
    updateTitle({dispatch, state, rootState}, id, body) {
      let config = {
        headers: {
          token: rootState.user.token
        }
      }
      body = {newTitle: state.updateListInput.newTitle};
      return new Promise((resolve, reject) => {
        axios.put('/api/list/updateTitle/' + id, body, config)
        .then(res => {
          console.log(res.data)
          setTimeout(() => {
            dispatch('getLists')
            dispatch('getList', id)
            router.push({
              path: '/'
            })
          }, 20)
        }, resolve())
        .catch(e => {console.log(e)}, reject())
      })
    },
    addNewItems({dispatch, state, rootState}, id, body) {
      let config = {
        headers: {
          token: rootState.user.token
        }
      }
      body = {
        newItems: state.updateListInput.newItems.split(',')
      };
      console.log(body)
      return new Promise((resolve, reject) => {
        axios.put('/api/list/addNewItems/' + id, body, config)
        .then(res => {
          console.log(res.data)
          setTimeout(() => {
            dispatch('getLists')
            dispatch('getList', id)
            
          }, 20)
        }, resolve())
        .catch(e => {console.log(e)}, reject())
      })
    },
    addSharedUser({dispatch, state, rootState}, id) {
      let config = {
        headers: {
          token: rootState.user.token
        }
      }
      const body = {
        sharedUserId: state.sharedUser,
      }
      return new Promise((resolve, reject) => {
        axios.put('/api/list/shareList/' + id, body, config)
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