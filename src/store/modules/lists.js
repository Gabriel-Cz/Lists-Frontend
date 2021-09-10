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

    setEditTitle(state, payload) {
      state.editTitle = payload;
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

    setInput(state, payload) {
      state.newListInput = payload
    },

    setNewList(state, list) {
      state.listsData = [...state.listsData, list];
    },

    setDeletedList(state, id) {
      const updatedList = state.listsData.filter(list => list._id !== id);
      state.listsData = [...updatedList];
    },

    setUpdatedLists(state, updatedList, filter) {
      let updatedArray = state.lists.map(list => (
        list._id === updatedList._id ?
        list[filter] = updatedList[filter] : false
      ));
      state.listsData = updatedArray;
    },
    
    setUpdatedListTitle(state, title) {
      const updatedList  = {...state.listData};
      updatedList.list_title = title;
      state.listData = updatedList;
    },
    
    setUpdatedListItems(state, newItems) {
      const updatedList  = {...state.listData};
      updatedList.list_items = [...updatedList.list_items, ...newItems];
      state.listData = updatedList; 
    },

    cleanNewListInputs(state) {
      state.newListInput.title = '';
      state.newListInput.items = '';
    },

    cleanUpdateListInputs(state) {
      state.updateListInput.newTitle = '';
      state.updateListInput.newItems = '';
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
        commit('setLists', listsResponse.data);
      } catch (error) {
        dispatch('listsError',  error.response.data.message);
      }
    },  
  
    async getList({commit, rootState, dispatch}, id) {
      try {
        let listResponse = await axios.get(`/api/lists/list/${id}`, config(rootState.user.token));
        commit('setList', listResponse.data);
      } catch (error) {
        dispatch('listsError',  error.response.data.message);
      }
    },
  
    async postList({commit, rootState , dispatch}, list) {
      try {
        let postedList = await axios.post('/api/lists/new-list', list, config(rootState.user.token));
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
        commit('setDeletedList');
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
        let editedListResponse = await axios.put(`/api/lists/list/${id}/updateTitle`, body, config(rootState.user.token));
        await commit('setUpdatedList', editedListResponse.data, 'list_title');
        dispatch('editTitle', false);
        await commit('setUpdatedListTitle', body.newTitle);
        commit('cleanUpdateListInputs');
      } catch (error) {
        dispatch('listsError',  error.response.data.message);
      }
    },

    async addNewItems({commit, dispatch, state, rootState}, id, body) {
      body = { newItems: state.updateListInput.newItems.split(',') }
      try {
        let newItemsResponse = await axios.put(`/api/lists/list/${id}/addNewItems`, body, config(rootState.user.token));
        console.log(newItemsResponse.data);
        await commit('setUpdatedListItems', body.newItems);
        commit('cleanUpdateListInputs');
      } catch (error) {
        console.log(error);
        dispatch('listsError',  error);
      }
    },

    listsError({commit}, error) {
      router.push({
        name: 'UserLists'
      })
      commit('setListsError', error);
      setTimeout(() => {
        commit('setListsError', false);
      }, 3000);
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