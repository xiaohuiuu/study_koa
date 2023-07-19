import KoaRouter from '@koa/router'
import jwt from 'koa-jsonwebtoken'
import jwtAuth from 'koa-jwt'


const router = new KoaRouter()

router.prefix('/user')

const secret = 'gkkl2342052klw123lkmvfd23414gd'

//登录接口
router.post('/login',(ctx,next)=>{
    //1.得到用户信息
    let userinfo = ctx.request.body.username
    //2.生成token
    let token = jwt.sign({
        data:userinfo,       //不要存放敏感信息   密码
        exp:Math.floor(Date.now() /1000) + (60 * 60 * 24)  //24小时候令牌失效
    },secret)
    //console.log(token)
    //3.给客户端响应数据
    ctx.body = JSON.stringify({
        status:200,
        message:'登陆成功',
        user:userinfo,
        token:token
    })

})

//退出登录接口
router.get('/layout',async(ctx,next)=>{
    ctx.body = JSON.stringify({
        title:'退出成功'
    })
})
 

//获取用户信息
router.get('/getuser',jwtAuth({secret}),async(ctx,next)=>{
    console.log(1)
    ctx.body = JSON.stringify({
        status:200,
        message:'获取用户令牌',
        user:ctx.state.user.data
    })
})




//鉴权方案

//第三方登陆

//短信登录










export default router