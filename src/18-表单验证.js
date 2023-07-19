
import Koa from 'koa'
//import KoaRouter from '@koa/router'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'
//控制台打印错误日志
import logger from 'koa-logger'
//错误处理中间件
import onError from 'koa-onerror'
import bouncer from 'koa-bouncer'
import userRouter from './routes/18-index'

const app = new Koa()

app.use(bouncer.middleware()) //必须放在router之前
app.use(bodyParser())
app.use(userRouter.routes()).use(userRouter.allowedMethods())
app.use(cors())
app.use(logger())
onError(app)







//表单验证  npm i koa-bouncer





app.listen(3000,()=>{
    console.log('server running at http://lcoalhost:3000')
})

