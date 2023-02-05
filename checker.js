import puppeteer  from "puppeteer"
import { sending } from "./send.js"

export async function getAllPretindent(){
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://explorer.testnet.taraxa.io/nodes")
    let arr =[]
    function find(text){
        setTimeout(async ()=>{
            let text = await page.evaluate(()=>{
                let elements = document.getElementsByClassName("table table-dark")
                return Array.from(elements).map(element => element.innerText);
            })
            let text1 = await page.evaluate(()=>{
                let elements = document.getElementsByClassName("page-item")
                return Array.from(elements).map(element => element.innerText);
            })
            text = text[0].split('\n')
            //text = text[0].slice(36)
            text.shift()
            arr = arr.concat(text)
            if(text1[text1.length-2] == "›\nNext"){
                await page.click(`#__next > div.site-layout-content > ul > li:nth-child(${text1.length-3})`)
                return find(text)
            }else{
                console.log("ready")
                sending(arr)
                await browser.close()
            }       
        },2000)
    }
    find()
}