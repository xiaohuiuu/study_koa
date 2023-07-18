import KoaRouter from '@koa/router'
const router = new KoaRouter()

//前缀
router.prefix('/user')

router.get('/list',(ctx,next)=>{
    ctx.body = JSON.stringify({
        title:'list'
    })
})

//动态参数传参  params
router.get('/item/:id',(ctx,next)=>{
    console.log(ctx.params.id)
    ctx.body = JSON.stringify({
        title:`id为${ctx.params.id}的用户信息`
    })
})
// query传参
router.get('/additem',(ctx,next)=>{
    console.log(ctx.query)
    ctx.body = JSON.stringify({
        title:`添加商品成功`,
        profile:ctx.query
    })
})


//post方法的使用
router.post('/add',(ctx,next)=>{
    console.log(ctx.request.body)
    ctx.body = JSON.stringify({
        title:'post传参'
    })
})


//重定向
router.get('/',(ctx,next)=>{
    ctx.redirect('/user/list')   //前面不会加/user
    //把响应码也改一下
    ctx.status = 301       //301表示重定向
})






export default router