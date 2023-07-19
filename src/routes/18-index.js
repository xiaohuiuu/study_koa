import Koarouter from '@koa/router'
import bouncer from 'koa-bouncer'
const router = new Koarouter()



router.post('/animal', (ctx, next) => {

    try {
        ctx.validateBody('name')
            .required('name required')
            .isString()
            .trim()
        ctx.validateBody('location')
            .isString()
            .trim()
            .isLength(2, 4, '场所名称为2-4')
        ctx.validateBody('email')
            .optional()
            .isString()
            .trim()
            .isEmail()

            console.log(ctx.vals)
        ctx.body = JSON.stringify({
            message: '成功'
        })
    } catch (error) {
        if (error instanceof bouncer.ValidationError) {
            ctx.body = JSON.stringify({
                status: 400,
                message: error.message
            })
            return
        }
        throw error
    }
})





export default router