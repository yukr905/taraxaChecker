import fs from "fs"
import { getAllPretindent } from "./checker.js"

export  function sending(arr){
    let txt =""
    const db = JSON.parse(fs.readFileSync("./db/db.json"))
    for(let i = 0;i<db.address.length;i++){
        for(let j = 0; j<arr.length;j++){
            if(arr[j].indexOf(db.address[i][1]) !==-1){
                txt += `\n ${db.address[i][0]}  ${arr[j]}`
                break
            }else if(j == arr.length-1 && arr[j].indexOf(db.address[i][1]) ==-1){
                txt += `\n ${db.address[i][0]}  UNWORKED BLOCKS`
            }
        }
    }
    fs.writeFileSync("raiting.txt", txt)
    setTimeout(()=>{
        console.log("circle next")
        return getAllPretindent()
    },10800000) //  how many seconds to update the file 10800 * 1000 = every 3H
}