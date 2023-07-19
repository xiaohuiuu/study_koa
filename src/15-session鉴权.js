import Koa from 'koa'
//import KoaRouter from '@koa/router'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'
//控制台打印错误日志
import logger from 'koa-logger'
//错误处理中间件
import onError from 'koa-onerror'
import session from 'koa-session'
import userRouter from './routes/15-user'

const app = new Koa()

//对cookie进行加密签名
app.keys = ['some secret hurr'];
//session的配置信息 
const SESSION_CONFIG = {
    keys:'wc',               //设置cookie的名字
    maxAge:86400000,         //设置cookie存活的时间
    httpOnly:true,           //设置 仅在服务器修改
    signed:true,             //签名cookie
    //secure:true              //保护cookie
}
//koa使用session
app.use(session(SESSION_CONFIG,app))
app.use(bodyParser())
app.use(userRouter.routes()).use(userRouter.allowedMethods())
app.use(cors())
app.use(logger())
onError(app)




//登录接口                  登录成功后获得用户信息
//推出登录接口              如果推出登录了，不能获得信息
//获取用户信息接口          获得信息的接口


//也就是说   有些接口是登录才能使用的








app.listen(3000,()=>{
    console.log('server running at http://lcoalhost:3000')
})