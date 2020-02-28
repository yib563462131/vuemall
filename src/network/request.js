import axios from "axios"
// export function request(config,success,faliure){
//     const instance=axios.create({
//         baseURL:'http://123.207.32.32:80000',
//         timeout:5000
//     })
//     instance(config).then(res=>{
//         success(res);
//     }).catch(err=>{
//         faliure(err)
//     }) 
// }
// export function request(config){
//     return new Promise((resolve,reject)=>{
//         const instance=axios.create({
//             baseURL:'http://123.207.32.32:80000',
//             timeout:5000
//         })
//         instance(config).then(res=>{
//             resolve(res);
//         }).catch(err=>{
//             reject(err)
//         })

//     })
// }
   
// }
export function request(config){
    
        const instance=axios.create({
            // baseURL:'http://123.207.32.32:8000',
            baseURL:'http://106.54.54.237:8000/api/wh',
            timeout:5000
        })
        instance.interceptors.request.use(config=>{
            // console.log(config)
            return config
        },err=>{
            console.log(err)
        })
        instance.interceptors.response.use(res=>{
            // console.log(res)
            return res.data
        },err=>{
            console.log(err)
        })
       return instance(config)

    

}