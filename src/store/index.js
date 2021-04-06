import { createStore } from 'vuex'
import user from './modules/user'
import lists from './modules/lists'

export default createStore({
  modules: {
    user,
    lists
  }
})
