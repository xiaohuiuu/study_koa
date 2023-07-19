import KoaRouter from '@koa/router'

const router = new KoaRouter()



router.get('/',ctx =>{
    ctx.body = JSON.stringify({
        title:'hello world'
    })
})



















export default router