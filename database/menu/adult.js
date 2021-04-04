const adult = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefijo* : 「  ${prefix}  」
   ┠≽ *Creadorr* : ${ownerName}
   ┠≽ *Version* : 4
   ╿
┯┷ *〈 ABOUT 〉*
╽
┠≽ *${prefix}info* (error)
┃ *Desc* : Mostrar detalles del bot
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Mostrar usuarios bloqueados
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : Mostrar todo el usuario de chat
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Mostrar velocidad del bot
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Reportar error al bot propietario
╿
┷┯ *〈 18+ 〉*
   ╽
   ┠≽ *${prefix}randomhentai*
   ┃ *Desc* : Imágenes aleatorias de Hentai
   ┠──────────────╼
   ┠≽ *${prefix}nsfwtrap*
   ┃ *Desc* :  Imagen NSFW aleatoria (nsfw on)
   ┠──────────────╼
   ┠≽ *${prefix}nsfwneko*
   ┃ *Desc* : Imágenes aleatorias de NSFW Neko(nsfw on)
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.adult = adult
