import { init } from './utils/GA'

if (process.env.NODE_ENV === 'production') {
  init()
}
