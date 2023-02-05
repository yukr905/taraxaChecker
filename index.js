import express from "express"
import { getAllPretindent } from "./checker.js"

const app = express()

export function start(){
    try{
    app.listen(3000,()=>{
        console.log("Server started")
        getAllPretindent()
    })

}catch(e){
    console.log(e)
}
}
start()