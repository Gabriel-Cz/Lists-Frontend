import router from '../../router/index'
import axios from 'axios'

function config(token) {
  let config = {
    headers: {
      token: token
    }
  }
  return config;
}

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
    editTitle: false,
    sharedUser: '',
    newList: '',
    listsData: [],
    listData: '',
    listsError: false,
    userId: '',
})

const mutations = {
  
    setInput(state, payload) {
      state.newListInput = payload
    },

    setEditTitle(state, payload) {
      state.editTitle = payload;
    },
    
    setNewTitle(state, payload) {
      state.updateListInput.newTitle = payload
    },

    setNewItems(state, payload) {
      state.updateListInput.newItems = payload
    },

    cleanNewListInputs(state) {
      state.newListInput.title = '';
      state.newListInput.items = '';
    },

    cleanUpdateListInputs(state) {
      state.updateListInput.newTitle = '';
      state.updateListInput.newItems = '';
    },

    setList(state, payload) {
        state.listData = payload
    },

    setLists(state, payload) {
      state.listsData = payload
    },

    setNewList(state, list) {
      state.listsData = [...state.listsData, list];
    },

    setUpdatedList(state, updatedList, filter) {
      let updatedArray = state.lists.map(list => (
        list._id === updatedList._id ?
        list[filter] = updatedList[filter] : false
      ));
      state.listsData = updatedArray;
    },
     
    setDeleteList(state, id) {
      state.listsData = state.listsData.filter(list => list._id !== id);
    }, 
    
    setSharedUser(state, payload) {
      state.sharedUser = payload
    },

    setListsError(state, error) {
      state.listsError = error;
    },

}

const actions = {

    async getLists({rootState, commit, dispatch}) {
      try {
        let listsResponse = await axios.get('/api/lists', config(rootState.user.token));
        console.log(listsResponse.data);
        commit('setLists', listsResponse.data);
      } catch (error) {
        dispatch('listsError',  error.response.data.message);
      }
    },  
  
    async getList({commit, rootState, dispatch}, id) {
      try {
        let listResponse = await axios.get('/api/list/' + id, config(rootState.user.token));
        commit('setList', listResponse.data);
      } catch (error) {
        dispatch('listsError',  error.response.data.message);
      }
    },
  
    async postList({commit, rootState , dispatch}, list) {
      try {
        let postedList = await axios.post('/api/new-list', list, config(rootState.user.token));
        await commit('setNewList', postedList.data);
        commit('cleanNewListInputs');
        router.push({
          name: 'UserLists'
        })
      } catch (error) {
        dispatch('listsError', error.response.data.message);
      }
    },

    async deleteList({commit, rootState, dispatch}, id) {
      try {
        await axios.delete('/api/list/' + id, config(rootState.user.token));
        commit('setDeleteList');
        router.push({
          name: 'UserLists'
        })
      } catch (error) {
        dispatch('listsError',  error.response.data.message);
      }
    },

    editTitle({commit}, title) {
      commit('setEditTitle', title)
    },

    async updateTitle({commit, dispatch, state, rootState}, id, body) {
      body = { newTitle: state.updateListInput.newTitle };
      try {
        let editedListResponse = await axios.put('/api/list/updateTitle/' + id, body, config(rootState.user.token));
        await commit('setUpdatedList', editedListResponse.data, 'list_title');
        dispatch('editTitle', false);
      } catch (error) {
        dispatch('listsError',  error.response.data.message);
      }
    },

    async addNewItems({commit, state, rootState, dispatch}, id, body) {
      body = {
        newItems: state.updateListInput.newItems.split(',')
      };
      try {
        let newItemsResponse = await axios.put('/api/list/addNewItems/' + id, body, config(rootState.user.token));
        await commit('setUpdatedList', newItemsResponse.data, 'list_items');
        commit('cleanUpdateListInputs');
      } catch (error) {
        dispatch('listsError',  error.response.data.message);
      }
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
    },

    listsError({commit}, error) {
      router.push({
        name: 'UserLists'
      })
      commit('setListsError', error);
      setTimeout(() => {
        commit('setListsError', false);
      }, 2500)
    },

}

const getters = {
    countLists: state => state.listsData.length === 0 || null ? false : true
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }