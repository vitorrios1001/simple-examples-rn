import { Home, Counter } from '../screens'

export const SCREEN_NAMES = {
  home: 'Home',
  counter: 'Counter'
}

export const ROUTES = [
  { name: SCREEN_NAMES.home, component: Home },
  { name: SCREEN_NAMES.counter, component: Counter },
]
