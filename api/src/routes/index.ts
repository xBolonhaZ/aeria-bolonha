import { createRouter } from 'aeria'
import { listRouter } from './list.js'

export const router = createRouter()

router.group ('/list', listRouter)