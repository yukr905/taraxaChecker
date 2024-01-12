import express from "express"
import { getAllPretindent } from "./checker.js"
import { bot_listener } from "./bot.js"

const app = express()

export function start(){
    try{
    app.listen(3000,()=>{
        console.log("Server started")
        bot_listener()
    })

}catch(e){
    console.log(e)
}
}
start()