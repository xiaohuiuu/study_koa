import fs from 'fs'


export const errout = (error)=>{
    let now = new Date()
    let time1 = `${now.getFullYear()}-${now.getMonth()}-${now.getDay()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
    let time = `${now.getFullYear()}-${now.getMonth()}-${now.getDay()}`
    let _input = `[${time1}]     ${error}\n`
    let err_dir = `./src/log/err_log_${time}.txt`

    fs.open(err_dir,'a',function(error){
        if(error){
            throw new Error(error)
        }else{
            fs.writeFile(err_dir,_input,{flag:'a'},function(error){
                if(error){
                    throw new Error(error)
                }else{
                    console.log('错误信息已经写入到日志文件中')
                }
            })
        }
    })
}