

export default async (ctx,next)=>{
    if(ctx.session.userInfo){
        await next()
    }else{
        ctx.body = {
            code:401,
            message:'请先登录'
        }
    }
}