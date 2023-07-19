import KoaRouter from '@koa/router'
import Multer from '@koa/multer'
const router = new KoaRouter()



let storage=Multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"public/upload")
    },
    filename:function(req,file,cb){
        var fileFormat = (file.originalname).split(".");
        cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
})
let upload=Multer({storage:storage})



router.post('/upload',upload.single('touxiang'),(ctx,next)=>{
    console.log('ctx.request.body: ',ctx.request.body)
    console.log('ctx.request.file: ',ctx.request.file)
    console.log('ctx.file: ',ctx.file)
    ctx.body = JSON.stringify({
        status:200,
        message:'上传成功'
    })
})













export default router