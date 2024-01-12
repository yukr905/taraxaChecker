import puppeteer  from "puppeteer"
import { sending } from "./send.js"

export async function getAllPretindent(chat_id){
    console.log(chat_id, "chat id")
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://testnet.explorer.taraxa.io/node")
    let arr =[]
    let count = 1
    function find(text){
        setTimeout(async ()=>{
            let text = await page.evaluate(()=>{
                let elements = document.getElementsByClassName("MuiTableRow-root css-1f9vn3g")
                return Array.from(elements).map(element => element.innerText);
            })
            arr = arr.concat(text)
            if(count<5){
                await page.click('#root > div > div.MuiBox-root.css-1v8uxyp > div.MuiBox-root.css-1r2zjfs > div.MuiTablePagination-root.css-1tw0og1 > div > div.MuiTablePagination-actions > button:nth-child(3)')
                count++           
                console.log(count)
                return find(text)
            }else{
                console.log("ready")
                sending(arr, chat_id)
                await browser.close()
            }      
        },4000)
    }
    find()
}