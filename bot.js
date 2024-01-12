import * as dotenv from 'dotenv' 
import {Telegraf} from 'telegraf'
import {Markup} from 'telegraf'
import { getAllPretindent } from './checker.js'
import fs from 'fs'
dotenv.config()

export  function getMainMenu() {
    return  Markup.keyboard([
        ['Raiting']
    ]).resize()
}

const bot = new Telegraf(process.env.token_tg)

export  function bot_listener(){
    try {
    bot.start(async context => {
        const jsonData =  fs.readFileSync('users.json', 'utf-8')
        const data = await JSON.parse(jsonData)

        if (data.users.indexOf(context.chat.id) == -1) {
            await data.users.push(context.chat.id)
            const updatedJsonData = JSON.stringify(data, null, 2)
            fs.writeFileSync('users.json', updatedJsonData, 'utf-8')
            return context.reply('Welcome to Taraxa',getMainMenu())
        } else {
            return context.reply('Hello Taraxa',getMainMenu())
        }
    })
    bot.hears("Raiting", async context=>{
        getAllPretindent(context.chat.id)
    })
        bot.launch();
        process.once("SIGINT", () => bot.stop("SIGINT"));
        process.once("SIGTERM", () => bot.stop("SIGTERM"));
    } catch (error) {
        console.log("Error in connection of API!")
    }
}
export async function sendInfo(txt, chat_id){
        await bot.telegram.sendMessage(chat_id,txt)
}
