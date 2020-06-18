import * as apiUsers from '../api/user'
import { Actions } from '../store/ducks/user'

export const loadUsers = () => async (dispatch) => {
  dispatch(Actions.fetchUsers())

  const { data } = await apiUsers.fetchUsers()

  if (!data) {
    dispatch(Actions.fetchUsersFailure())
    return
  }

  dispatch(Actions.fetchUsersSuccess(data))
}

export const loadUserById = (id) => async (dispatch) => {
  dispatch(Actions.fetchDetails())

  const { data } = await apiUsers.fetchUser(id)

  if (!data) {
    dispatch(Actions.fetchDetailsFailure())
    return
  }

  dispatch(Actions.fetchDetailsSuccess(data))
}
