import {User} from './user.js'
import {Task} from './task.js'

const a = new Task('Сделать дела')
const b = new User(a)
b.do()
