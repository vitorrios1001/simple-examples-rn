import { Home, Counter, Users } from '../screens'
import UserDetails from '../screens/Users/Details'

export const SCREEN_NAMES = {
  home: 'Home',
  counter: 'Counter',
  users: 'Users',
  userDetails: 'UserDetails',
}

export const ROUTES = [
  { name: SCREEN_NAMES.home, component: Home, isMenu: false },
  { name: SCREEN_NAMES.counter, component: Counter, isMenu: true },
  { name: SCREEN_NAMES.users, component: Users, isMenu: true },
  { name: SCREEN_NAMES.userDetails, component: UserDetails, isMenu: false }
]
