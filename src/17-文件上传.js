import Koa from 'koa'
//import KoaRouter from '@koa/router'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'
//控制台打印错误日志
import logger from 'koa-logger'
//错误处理中间件
import onError from 'koa-onerror'
import userRouter from './routes/17-index'

const app = new Koa()

app.use(bodyParser())
app.use(userRouter.routes()).use(userRouter.allowedMethods())
app.use(cors())
app.use(logger())
onError(app)








app.listen(3000,()=>{
    console.log('server running at http://localhost:3000')
})
