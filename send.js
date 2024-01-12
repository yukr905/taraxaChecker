import fs from "fs"
import { sendInfo } from "./bot.js"

export  function sending(arr, chat_id){
    let txt =""
    const db = JSON.parse(fs.readFileSync("./db/db.json"))
    for(let i = 0;i<db.address.length;i++){
        for(let j = 0; j<arr.length;j++){
            if(arr[j].indexOf(db.address[i][1]) !==-1){
                let text = arr[j]
                text = text.split('\n')
                arr[j] = text
                typeof(arr[j])
                txt += `\n ${db.address[i][0]} Raiting ${arr[j][0]} Blocks ${arr[j][2]}`
                break
            }else if(j == arr.length-1 && arr[j].indexOf(db.address[i][1]) ==-1){
                txt += `\n ${db.address[i][0]}  UNWORKED BLOCKS`
            }
        }
    }
    fs.writeFileSync("raiting.txt", txt)
    sendInfo(txt, chat_id)
}