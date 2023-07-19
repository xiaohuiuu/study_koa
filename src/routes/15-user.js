import KoaRouter from '@koa/router'

//权限验证
import auth from '../middleware/auth'

const router = new KoaRouter()

router.prefix('/user')


//登录接口
router.post('/login',(ctx,next)=>{
    let {body} = ctx.request
    ctx.session.userInfo = body.username
    ctx.body = JSON.stringify({
        status:200,
        message:'登录成功'

    })
})

//退出登录接口
router.get('/layout',auth,async(ctx,next)=>{
    delete ctx.session.userInfo
        ctx.body = JSON.stringify({
            status:200,
            message:'退出成功'
    
        })
})
 

//获取用户信息
router.get('/getUser',auth,async(ctx,next)=>{
    //如果一个项目有很多 接口需要登录才能使用  那这么写太麻烦
    //这时候我们可以创建一个中间件 来解决           middleware

    // if(ctx.session.userInfo){
    //     ctx.body = JSON.stringify({
    //         status:200,
    //         userInfo:ctx.session.userInfo
    //     })
    // }else{
    //     ctx.body = JSON.stringify({
    //         status:'error',
    //         message:'未登录'
    //     })
    // }

    ctx.body = JSON.stringify({
        status:200,
        userInfo:ctx.session.userInfo
    })
})










export default router