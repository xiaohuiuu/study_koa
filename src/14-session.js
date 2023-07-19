import Koa from 'koa'
//import KoaRouter from '@koa/router'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'
//控制台打印错误日志
import logger from 'koa-logger'
//错误处理中间件
import onError from 'koa-onerror'
import session from 'koa-session'
import userRouter from './routes/14-user'
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






//session数据存储在服务器，是基于cookie的，第一次访问服务器
//会生成一个sid，sid以cookie的形式存储于浏览器中
//客户端后面再去访问服务器是，会携带sid
//服务器回去验证sid的合法性

//session 和 cookie 是为了弥补http无状态而产生的

//安装 koa-session

app.use((ctx)=>{
    if(ctx.path === 'favicon.ico'){
        return
    }else{
        let n = ctx.session.count || 0
        ctx.session.count = ++n
        ctx.body = `第${n}次访问此网址`
    }
})









app.listen(3000,()=>{
    console.log('server running at http://lcoalhost:3000')
})