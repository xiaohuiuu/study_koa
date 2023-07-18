import Koa from 'koa'
//import KoaRouter from '@koa/router'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'
//控制台打印错误日志
import logger from 'koa-logger'
//错误处理中间件
import onError from 'koa-onerror'

//导入写入日志的方法
import {errout} from './until/errout'

//导入路由
import userRouter from './routes/user'

const app = new Koa()
//const router = new KoaRouter()
//bodyparser得放在 router的前面   要不 解析不出 路由携带的参数
app.use(bodyParser())
app.use(userRouter.routes()).use(userRouter.allowedMethods())
app.use(cors())
app.use(logger())
onError(app)











//全局错误处理
app.on('error',(error)=>{
    console.log("全局错误: ",error.status,error.message,error.data)
    errout(error)
})






//监听3000端口
app.listen(3000,()=>{
    console.log(`server running at http://localhost:3000`)
})