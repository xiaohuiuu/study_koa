import Koa from 'koa'
//import KoaRouter from '@koa/router'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'
//控制台打印错误日志
import logger from 'koa-logger'
//错误处理中间件
import onError from 'koa-onerror'
import userRouter from './routes/16-user'

const app = new Koa()

app.use(bodyParser())
app.use(userRouter.routes()).use(userRouter.allowedMethods())
app.use(cors())
app.use(logger())
onError(app)


//token鉴权验证

//1.客户端发送登陆请求，服务器根据客户信息 生成token令牌
//2.服务器响应登陆成功，和token令牌，浏览器可以将token存储到localStorage中
//3.客户端发送请求，需要将token放在请求头里 Authorization
//4.服务器检测token是否有效，如果没有问题 ，服务器响应数据


//koa 实现token鉴权，需要安装两个中间件     koa-jwt     koa-jsonwebtoken











app.listen(3000,()=>{
    console.log('server running at http://lcoalhost:3000')
})
