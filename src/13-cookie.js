import Koa from 'koa'
//import KoaRouter from '@koa/router'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'
//控制台打印错误日志
import logger from 'koa-logger'
//错误处理中间件
import onError from 'koa-onerror'
import KoaRouter from '@koa/router'
const app = new Koa()
const router = new KoaRouter()

app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods())
app.use(cors())
app.use(logger())
onError(app)







//设置cookie
//cookie数据存储在浏览器中，可以设置存储时间，不设置，关闭浏览器失效
//session 数据存储在服务器中，关闭浏览器失效

router.get('/',(ctx)=>{
    let lastLoginTime = ctx.cookies.get('lastLoginTime')
    let now = new Date()
    let time = now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
    //设置cookie生存时长为 七天
    ctx.cookies.set('lastLoginTime',time,{
        maxAge: 60000 * 60 * 24 * 7
    })
    //console.log(ctx.cookies.get('lastLoginTime'))

    if(!lastLoginTime){
        ctx.body = '第一次访问本站'
    }else{
        ctx.body = `您上一次在${lastLoginTime} 访问本站`
    }
})










app.listen(3000,()=>{
    console.log('server running at http://lcoalhost:3000')
})