import KoaRouter from '@koa/router'
import captcha from 'trek-captcha'
import fs from 'fs'

const router = new KoaRouter()


router.get('/captcha', async (ctx, next) => {

    const {token,buffer} = await captcha()
    // console.log(buffer)
    //token的作用：前端生成的验证码   与 此 token做对比
    ctx.body = buffer
})


export default router