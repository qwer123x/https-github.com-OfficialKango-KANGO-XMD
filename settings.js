/*
  project_name : 𝙆𝘼𝙉𝙂𝙊-𝙓𝙈𝘿 Bot
  Version : 2.4.0
  Owner : Hector Manuel
  Do Not Clone 


*/

//----------------------[ 𝙆𝘼𝙉𝙂𝙊-𝙓𝙈𝘿]----------------------//

const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~7MEihaKZ#mugrA5sl5KRf9gOvQ9LdQMUbP6uQRa6Qa7b-q7Td3hc' 
//Enter your 𝙆𝘼𝙉𝙂𝙊-𝙓𝙈𝘿 session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'BEN-𝙓𝙈𝘿' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '254727374449' 

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'BENSON' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "NGUGI-𝙓𝙈𝘿" 

//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "BEN" 

//----------------------[ TIMEZONE ]--------------------//

global.timezones = process.env.TIMEZONE || "Africa/Nairobi" 
//Don't edit this if you don't know!

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";
// Not really necessary on panels/vps/termux, just put it when bot settings reset when bot restarts.

//Go to https://github.com/settings/tokens, select 'Tokens (classic)', then tap 'Generate new token' and select 'Generate new token (classic)'. Enter any note, choose 'No expiration', and under 'Select scopes', tick 'repo'. Scroll down, generate the token, and copy it. Paste it here. If using a single token for multiple bots, change the owner number to avoid settings mixups.


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@official_manuel"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©BEN-𝙓𝙈𝘿"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '> © BEN-𝙓𝙈𝘿', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------[ DEVELOPER SETTINGS ]---------------//
/* Do not change anything here!!! */

//😞 

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ 𝙆𝘼𝙉𝙂𝙊-𝙓𝙈𝘿 ]----------------------//
