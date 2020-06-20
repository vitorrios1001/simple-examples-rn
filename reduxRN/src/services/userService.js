import * as apiUsers from '../api/user'
import { Actions } from '../store/ducks/user'
import { isActive } from '../helpers/transform'


export const loadUsers = (page) => async (dispatch) => {
  dispatch(Actions.fetchUsers())

  const { result } = await apiUsers.fetchUsers(page)

  if (!result) {
    dispatch(Actions.fetchUsersFailure())
    return
  }

  const list = result.map((user) => ({
    avatar: user._links.avatar.href,
    first_name: user.first_name,
    last_name: user.last_name,
    active: isActive(user.status),
    email: user.email,
    id: user.id
  }))

  dispatch(Actions.fetchUsersSuccess(list))
}

export const loadUserById = (id) => async (dispatch) => {
  dispatch(Actions.fetchDetails())

  const { result } = await apiUsers.fetchUser(id)

  if (!result) {
    dispatch(Actions.fetchDetailsFailure())
    return
  }

  const user = {
    id: result.id,
    first_name: result.first_name,
    last_name: result.last_name,
    email: result.email,
    avatar: result._links.avatar.href,
    active: isActive(result.status),
    address: result.address,
    dob: result.dob,
    gender: result.gender,
    website: result.website,
    phone: result.phone,
  }

  dispatch(Actions.fetchDetailsSuccess(user))
}
