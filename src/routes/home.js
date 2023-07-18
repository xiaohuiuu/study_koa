import KoaRouter from '@koa/router'
import fs from 'fs'
const router = new KoaRouter()

router.prefix('/home')

router.get('/', (ctx,next)=>{
    ctx.body = 233
    
})





export default router