const Discord = require("discord.js")
const bot = new Discord.Client()
const fs = require('fs')
const Profil = require('./src/profil')
const roles = require('./src/farm/farm')
const upgrade = require('./src/upgrades/upgrades')
const progressbar = require('string-progressbar');
var approx = require('approximate-number');
require("dotenv").config()

let prefix = "$"
let colorRouge = "#ED4245"
let colorVert = "#57F287"   
let colorTurq = "#00ffdd"    
let colorJaune = "#F1C40F"               //test                //vrai
let infoChanOff = "828518673244618752" //828518673244618752  990098889275244554
let liste = ["snigger", "orange", "pine", "familys", "cocomb", "douchebag", "corolla", "bagarreur", "coureur", "remparts", "pot", "gwen", "fringale", "remi", "cereales", "evier", "penis", "dieu", "biscuit", "carte"]
let listeFarm = ["snigger ", "orange glo", "pine sol" , "familys bot", "cocomb ", "douchebag ", "corolla ", "bagarreur ", "coureur bois", "remparts ", "pot mayo", "gwen ", "fringale ", "rémi ", "céréales ", "évier pisse", "penis ", "dieu bilou", "biscuit chateau", "carte inspire"]
let listeProfiles = []
let lastProfilMsg = null
let lastProfil = null
let reactionPrestige = null
let go = 0
let prixPres = 0
let numPrestige = 0
let basePrestige = 1000000
let augPrestige = 1.07
let gainPrestige = 1.02
let variables = []
let mapAchievements = []
function mapAchiv(profil) {
  return mapAchievements = [{name: "Avoir 500 sniggers", cond: profil.snigger.number >= 500}, {name: "Avoir une carte inspire", cond: profil.carte.number >= 1},
  {name: "Donner 1 000 000$", cond: profil.argentDonne >= 1000000}, {name: "Donner 1 000 000 000$", cond: profil.argentDonne >= 1000000000},
  {name: "Donner 1 000 000 000 000$", cond: profil.argentDonne >= 1000000000000}, {name: "Être prestige 25", cond: profil.prestige >= 25},
  {name: "Être prestige 50", cond: profil.prestige >= 50}, {name: "Être prestige 100", cond: profil.prestige >= 100}, {name: "Être prestige 200", cond: profil.prestige >= 200},
  {name: "Être prestige 500", cond: profil.prestige >= 500}, {name: "Avoir 1 000 000$", cond:parseInt(hexToInt(profil.money)) >= 1000000}, {name: "Avoir 1 000 000 000$", cond: parseInt(hexToInt(profil.money)) >= 1000000000},
  {name: "Avoir 1 000 000 000 000$", cond: parseInt(hexToInt(profil.money)) >= parseInt(hexToInt("E8D4A51000"))}, {name: "Avoir 1 000 000 000 000 000$", cond: parseInt(hexToInt(profil.money)) >= parseInt(hexToInt("38D7EA4C68000"))},
  {name: "Avoir 1 000 000 000 000 000 000$", cond: parseInt(hexToInt(profil.money)) >= parseInt(hexToInt("DE0B6B3A7640000"))}, {name: "Avoir 1 000 000 000 000 000 000 000$", cond: parseInt(hexToInt(profil.money)) >= parseInt(hexToInt("3635C9ADC5DEA00000"))}]  
}


fs.readFile('./src/data.json', "utf8", (err, JsonString) => {
  if(err) {
    console.log(err)
  }else{
    listeProfiles = JSON.parse(JsonString)
  }
})

fs.readFile('./src/variable.json', "utf8", (err, JsonString) => {
  if(err) {
    console.log(err)
  }else{
    variables = JSON.parse(JsonString)
  }
})

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function intToHex(int) {
  return (int).toString(16)
}

function hexToInt(hexa) {
  let hex = (hexa).toString(16)
  if (hex.length % 2) { hex = '0' + hex; }
  let bn = BigInt('0x' + hex);
  return bn.toString(10); 
}

function msgProfil(profil, prof) {
  let embedprofil = new Discord.MessageEmbed()
  .setTitle(`Profil de ${prof.displayName}\n**${profil.online ? "En ligne 🟢" : "Hors ligne 🔴"}**  ||  Prestige ${numberWithCommas(profil.prestige)} 💎` )
  .setThumbnail(prof.user.avatarURL())
  .addField("Argent 💰", `${approx(parseInt(hexToInt(profil.money)), {separator: " ", min10k: true, capital: true, decimal: 2})} $`, false)
  .addField("Revenus 💸", `${approx((profil.cps * (profil.online ? 1 : 0.05)), {separator: " ", min10k: true, capital: true, decimal: 2})} $ / sec\n (${approx((profil.cps * (gainPrestige ** profil.prestige)) * (profil.online ? 1 : 0.05) , {separator: " ", min10k: true, capital: true, decimal: 2})} $) (+${approx(((gainPrestige ** profil.prestige * 100) - 100) , {separator: " ", min10k: true, capital: true, decimal: profil.cps > 10000 ? 0 : 2})}%💎)`, false)
  .addField("Argent dépensé 📉", `${approx(profil.dispense, {separator: " ", min10k: true, capital: true, decimal: 2})} $`, false)
  .setColor(colorTurq)

  for (let a = 0; a < liste.length; a++) {
    let bonus = 0
    if(profil[liste[a]].number > 0) {
      for (let b = 0; b < upgrade.prototype.getAll(profil).length; b++) {
        if(upgrade.prototype.getAll(profil)[b].type == liste[a]) {
          if(upgrade.prototype.getAll(profil)[b].bonusType == "cost") {
            if(profil.upgradeId == undefined) break
            if(profil.upgradeId.includes(upgrade.prototype.getAll(profil)[b].id)) {
              bonus = upgrade.prototype.getAll(profil)[b].data.bonus
            }
          }
        }
      }
      embedprofil.addField(roles.prototype.getAll(profil)[a].name, "Prix: " +`\`${approx(hexToInt(Math.round(((hexToInt(profil[liste[a]].data.cost) * (1.15 ** (profil[liste[a]].number + 1) - 1.15 ** profil[liste[a]].number)) / 0.15) * (bonus > 0 ? bonus : 1 ))) , {separator: " ", min10k: true, capital: true, decimal: 2} )} $${bonus > 0 ? ` (${bonus * 100} %)` : ""}\`\n` + "Revenus: " + `\`+${approx(profil[liste[a]].data.profit, {separator: " ", min10k: true, capital: true, decimal: 2})}/sec\`\n` + "Tu possède: " + `\`${numberWithCommas(profil[liste[a]].number)}\`\n` + `Cps: \`+${approx((profil[liste[a]].number * profil[liste[a]].data.profit).toFixed(1), {separator: " ", min10k: true, capital: true, decimal: 2})}${profil[liste[a]].multi > 1 ? ` (x${profil[liste[a]].multi})` : ""}\`` )
    }
    if(profil[liste[a]].number > 0 && profil[liste[a + 1]] != undefined) {
      if(profil[liste[a]].number > 0 && profil[liste[a + 1]].number == 0) {
        embedprofil.addField("===Prochain objet===", `**${roles.prototype.getAll()[a + 1].name}**\nPrix: \`${approx(hexToInt(profil[liste[a + 1]].data.cost), {separator: " ", min10k: true, capital: true, decimal: 2})}$\`\n Cps: \`+${numberWithCommas(profil[liste[a + 1]].data.profit)}\``)
      }
    }
  }
  return embedprofil
}

function deleteMsg(sent, message) {
  setTimeout(function () {
    message.delete()
    sent.delete();
  }, 6000);
}

let pasCompte = new Discord.MessageEmbed()
  .setDescription(`Tu n'as pas de compte.`)
  .setColor(colorRouge)


bot.on("ready", () => {
  console.log("bot online")
  console.log(new Date().toLocaleString())
  bot.user.setActivity(`${prefix}help`)
  variables[0].privProf = []
  fs.writeFileSync('./src/variable.json', JSON.stringify(variables), "utf8" , function(err) {
    if(err) throw err;})
})

bot.on("presenceUpdate", (oldMember, newMember) => {
  let online = false
  switch (newMember.status) {
    case "online":
      online = true
      break;

    default :
      online = false
      break;
  }
  for (let i = 0; i < listeProfiles.length; i++) {
    if(listeProfiles[i].name == newMember.member.displayName) {
      listeProfiles[i].online = online
    }
  }
  fs.writeFileSync('./src/data.json', JSON.stringify(listeProfiles), "utf8" , function(err) {
    if(err) throw err;})
})

setInterval(() => {
  go ++
  listeProfiles.forEach(profil => {
    
    for (let i = 0; i < listeProfiles.length; i++) {
      for (let a = 0; a < liste.length; a++) {
        listeProfiles[i][liste[a]].multi = 1
      }
    }

    for (let i = 0; i < upgrade.prototype.getAll(profil).length; i++) {
      let up = upgrade.prototype.getAll(profil)[i]
      if(up.bonusType == "cps") {
        if(profil.upgradeId == undefined) break
        if(profil.upgradeId.includes(up.id)) {
          profil[up.type].multi = up.data.bonus * profil[up.type].multi
        }
      }
    }

    let profit = parseFloat((((roles.prototype.getSnigger().data.profit * profil.snigger.multi) * profil.snigger.number) + ((roles.prototype.getOrange().data.profit * profil.orange.multi) * profil.orange.number) + ((roles.prototype.getPine().data.profit * profil.pine.multi) * profil.pine.number) + ((roles.prototype.getFamily().data.profit * profil.familys.multi) * profil.familys.number) + ((roles.prototype.getCocomb().data.profit * profil.cocomb.multi) * profil.cocomb.number)
      + ((roles.prototype.getDouchebag().data.profit * profil.douchebag.multi) * profil.douchebag.number) + ((roles.prototype.getCorolla().data.profit * profil.corolla.multi) * profil.corolla.number) + ((roles.prototype.getBagarreur().data.profit * profil.bagarreur.multi) * profil.bagarreur.number) + ((roles.prototype.getCoureur().data.profit * profil.coureur.multi) * profil.coureur.number) + ((roles.prototype.getRemparts().data.profit * profil.remparts.multi) * profil.remparts.number)
      + ((roles.prototype.getMayo().data.profit * profil.pot.multi) * profil.pot.number) + ((roles.prototype.getGwen().data.profit * profil.gwen.multi) * profil.gwen.number) + ((roles.prototype.getFringale().data.profit * profil.fringale.multi) * profil.fringale.number) + ((roles.prototype.getRemi().data.profit * profil.remi.multi) * profil.remi.number) + ((roles.prototype.getCéréales().data.profit * profil.cereales.multi) * profil.cereales.number) + ((roles.prototype.getÉvier().data.profit * profil.evier.multi) * profil.evier.number)
      + ((roles.prototype.getPenis().data.profit * profil.penis.multi) * profil.penis.number) + ((roles.prototype.getBilou().data.profit * profil.dieu.multi) * profil.dieu.number) + ((roles.prototype.getBiscuit().data.profit * profil.biscuit.multi) * profil.biscuit.number) + ((roles.prototype.getCarte().data.profit * profil.carte.multi) * profil.carte.number)).toFixed(2))

    profil.cps = profit
    profil.timeOut == 0 ? profil.timeOut = 0 : profil.timeOut --
    
    if(profil.online == false) {
      profil.totalmoney = intToHex(parseInt(hexToInt(profil.money)) + Math.ceil((gainPrestige ** profil.prestige) * profil.cps * 0.05) + profil.dispense)
      profil.money = parseInt(hexToInt(profil.money)) < 1000000 ? intToHex(parseInt(hexToInt(profil.money)) + Math.ceil((gainPrestige ** profil.prestige) * (profil.cps * 0.05))) : intToHex(BigInt(hexToInt(profil.money)) + BigInt(Math.ceil((parseInt(gainPrestige ** profil.prestige)) * (parseInt(profil.cps * 0.05)))))
      if(lastProfil && go >= 5) {

        if(lastProfil.prm == profil.name) {
          if(lastProfilMsg != null) {
            lastProfilMsg.edit(msgProfil(profil, lastProfil.dex))
          }
          go = 0
        }
      }
    }else{
      profil.totalmoney = intToHex(parseInt(hexToInt(profil.money)) + parseInt((gainPrestige ** profil.prestige) * profil.cps) + profil.dispense)
      profil.money = parseInt(hexToInt(profil.money)) < 1000000 ? intToHex(parseInt(hexToInt(profil.money)) + parseInt((gainPrestige ** profil.prestige) * profil.cps)) : intToHex(BigInt(hexToInt(profil.money)) + BigInt(Math.ceil((parseInt(gainPrestige ** profil.prestige)) * (parseInt(profil.cps)))))
      if(lastProfil && go >= 5) {
    
        if(lastProfil.prm == profil.name) {
          if(lastProfilMsg != null) {
            lastProfilMsg.edit(msgProfil(profil, lastProfil.dex))
          }
          go = 0
        }
      }  
    }

    if(parseFloat(Math.round((basePrestige * (augPrestige ** (profil.prestige + 1) - augPrestige ** profil.prestige)) / (augPrestige - 1))) <= hexToInt(profil.money) && !variables[0].messagePrestige.includes(profil.id)) {
      variables[0].messagePrestige.push(profil.id)
      fs.writeFileSync('./src/variable.json', JSON.stringify(variables), "utf8" , function(err) {
        if(err) throw err;})
      bot.channels.cache.get(infoChanOff).send(`<@${profil.id}>, tu peut maintenant ${prefix}prestige pour **${approx(parseFloat(Math.round((basePrestige * (augPrestige ** (profil.prestige + 1) - augPrestige ** profil.prestige)) / (augPrestige - 1))), {separator: " ", min10k: true, capital: true, decimal: 2})}$** ou attendre!`)
    }
    fs.writeFileSync('./src/data.json', JSON.stringify(listeProfiles), "utf8" , function(err) {
      if(err) throw err;})
    //console.log(listeProfiles)
  });

  fs.writeFileSync('./src/data2.json', JSON.stringify(listeProfiles), "utf8" , function(err) {
    if(err) throw err;})
}, 1000);

setInterval(() => {
  let topic = ""
  listeProfiles.sort((a, b) => parseInt(hexToInt(a.money)) < parseInt(hexToInt(b.money)) ? 1 : -1).slice(0, 10)
  for (let i = 0; i < listeProfiles.length; i++) {
    topic = topic  + (`${listeProfiles[i].name}: ${approx(parseInt(hexToInt(listeProfiles[i].money)) , {separator: " ", min10k: true, capital: true, decimal: 2})}$ | `) 
  }

  bot.channels.cache.get(infoChanOff == undefined ? infoChanTest : infoChanOff).setTopic(topic)
}, 300000);

setInterval(() => {
  for (let i = 0; i < listeProfiles.length; i++) {
    mapAchiv(listeProfiles[i])
    for (let a = 0; a < mapAchievements.length; a++) {
      if(mapAchiv(listeProfiles[i])[a].cond) {
        if(listeProfiles[i].achievements != undefined) {
          if(!listeProfiles[i].achievements.includes(mapAchievements[a].name)) {
            bot.channels.cache.get(infoChanOff).send(new Discord.MessageEmbed()
            .setColor(colorJaune)
            .setDescription(`Bravo **${listeProfiles[i].name}!**, tu as débloquer le succès: **${mapAchievements[a].name}**!`))
            listeProfiles[i].achievements.push(mapAchievements[a].name)
          }
        }
      }
    }
  }
}, 5000);

bot.on("message", async (message) => {
  if(message.author.bot) return
  if(message.channel.type == "dm") return
  try {
    var taggerUser = message.mentions.members.first()
  } catch (error) {}
  
  
  for (let i = 0; i < listeProfiles.length; i++) {
    if(listeProfiles[i].name == message.member.displayName) {
      if(message.member.user.presence.status == "online") {
        listeProfiles[i].online = true
      }else{
        listeProfiles[i].online = false
      }
    }
    if(message.member.displayName == listeProfiles[i].name && listeProfiles[i].timeOut == 0) {
      if(!message.content.startsWith(prefix)) {
        listeProfiles[i].timeOut = 60
        listeProfiles[i].money = intToHex(BigInt(hexToInt(listeProfiles[i].money)) + 1n)
      
        fs.writeFile('./src/data.json', JSON.stringify(listeProfiles), "utf8" , function(err) {
        if(err) throw err;})
      }
    }
  }  
  
  if(!message.content.startsWith(prefix)) return

  let MessageArray = message.content.split(" ")
  let cmd = MessageArray[0].slice(prefix.length)
  let args = MessageArray.slice(1)

  if(cmd == "play") {
    for (let i = 0; i < listeProfiles.length; i++) {
      if(listeProfiles[i].name == message.member.displayName) {
        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`Tu es déja inscrit! Fait **${prefix}profil**`)
        .setColor(colorRouge))
        return
      }
    }
    
    message.react("👍")
    listeProfiles.push(new Profil(message, "F", 0, 0, [], []))
    console.log(listeProfiles)
    fs.writeFile('./src/data.json', JSON.stringify(listeProfiles), "utf8" , function(err) {
      if(err) throw err;})
  }

  else if(cmd == "test") {
    listeProfiles.forEach(profil => {
      profil.money = "F"
    });
  }

  else if(cmd == "prestige") {
    for (let i = 0; i< listeProfiles.length; i++) {
      if(listeProfiles[i].name == message.member.displayName) {

        numPrestige = -1
        prixPres = 0
        let currentPrice = (augPrestige ** listeProfiles[i].prestige) * basePrestige
        do  {
          prixPres += currentPrice;
          currentPrice *= augPrestige;
          numPrestige++;

        }while (Math.round(prixPres) <= (hexToInt(listeProfiles[i].money)))
        prixPres = Math.round((basePrestige * (augPrestige ** (listeProfiles[i].prestige + numPrestige) - augPrestige ** listeProfiles[i].prestige)) / (augPrestige - 1))

        if(numPrestige == 0) return message.channel.send(new Discord.MessageEmbed()
        .setDescription(`Tu n'as pas asser d'argent! **${approx(hexToInt(listeProfiles[i].money) , {separator: " ", min10k: true, capital: true, decimal: 2})}$ / ${approx(Math.round((basePrestige * (augPrestige ** (listeProfiles[i].prestige + 1) - augPrestige ** listeProfiles[i].prestige)) / (augPrestige - 1)) , {separator: " ", min10k: true, capital: true, decimal: 2})}$**`)
        .setColor(colorRouge))
        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`**Prestige || ${listeProfiles[i].name}**\n\nChaque fois que tu prestige, tu gagnes 2% plus de profits par prestige.\n\n**Ce que tu perds après avoir prestige:**\n-Tout ton argent\n-Tes fermes\n\n**Coût**:\n${approx(hexToInt(intToHex(prixPres)), {separator: " ", min10k: true, capital: true, decimal: 2})}$\n\n+ ${numberWithCommas(numPrestige)} 💎`)
        .setFooter(`Clique sur le ✅ pour passer au prestige ${listeProfiles[i].prestige + numPrestige} 💎`)
        .setColor("#0099E1")).then(sent => sent.react("✅"))
        reactionPrestige = message
        return

      }else if(i + 1 == listeProfiles.length){
        message.channel.send(pasCompte)
        return
      }
    }
  }

  else if(cmd == "upgrade" || cmd == "u") {
    if(!args[0]) {
      let description = ""
      let messageUpgrade = new Discord.MessageEmbed().setColor(colorJaune).setTitle(`Liste d'améliorations disponibles pour __${message.member.displayName}__`)
      for (let i = 0; i < listeProfiles.length; i++) {
        if(listeProfiles[i].name == message.member.displayName) { 
          for (let a = 0; a < upgrade.prototype.getAll(listeProfiles[i]).length; a++) {
            let goodUpgrade = upgrade.prototype.getAll(listeProfiles[i])[a]

            if(upgrade.prototype.getAll(listeProfiles[i])[a].cond || listeProfiles[i].upgradeId.includes(goodUpgrade.id)) {
              if(listeProfiles[i].upgradeId.includes(goodUpgrade.id)){
                description = description
              
              }else{
                description += `${listeProfiles[i].upgradeId.includes(goodUpgrade.id) ? `✅`: `🟩`} **${goodUpgrade.name}**\nPrix: \`${approx(parseInt(hexToInt(goodUpgrade.data.cost)) , {separator: " ", min10k: true, capital: true, decimal: 1})}$\`\nEffet: \`${goodUpgrade.effect}\`\nID: \`${goodUpgrade.id}\`\n`
              }
              
            }else{

              if((!description.toLowerCase().includes(goodUpgrade.type)) && (goodUpgrade.type == "familys" ? !description.toLowerCase().includes("family's") : true) && (goodUpgrade.type == "pot" ? !description.toLowerCase().includes("mayo") : true)) {
                description += `🟥 **${goodUpgrade.name}**\nPrix: \`${approx(parseInt(hexToInt(goodUpgrade.data.cost)) , {separator: " ", min10k: true, capital: true, decimal: 1})}$\`\nEffet: \`${goodUpgrade.effect}\`\nID: \`${goodUpgrade.id}\`\n`
              }
            }
          }
          messageUpgrade.setDescription(description)
          message.channel.send(messageUpgrade)
        }
      }
    }else{
      for (let i = 0; i < listeProfiles.length; i++) {
        if(listeProfiles[i].name == message.member.displayName) {
          for (let a = 0; a < upgrade.prototype.getAll(listeProfiles[i]).length; a++) {
            if(upgrade.prototype.getAll(listeProfiles[i])[a].id == args[0]) {
              let goodUpgrade = upgrade.prototype.getAll(listeProfiles[i])[a]
              if(goodUpgrade.cond == true) {
                if(listeProfiles[i].upgradeId.includes(goodUpgrade.id)) return message.channel.send(new Discord.MessageEmbed().setDescription("Tu as déja cet item!").setColor(colorRouge)).then(sent => deleteMsg(sent, message))

                if(parseInt(hexToInt(goodUpgrade.data.cost)) <= parseInt(hexToInt(listeProfiles[i].money))) {
                  listeProfiles[i].upgradeId.push(goodUpgrade.id)
                  listeProfiles[i].money = intToHex(hexToInt(listeProfiles[i].money) - hexToInt(intToHex(goodUpgrade.data.cost)))
                  listeProfiles[i].dispense = (parseInt(listeProfiles[i].dispense) + parseInt(hexToInt(goodUpgrade.data.cost)))

                  if(listeProfiles[i].upgradeId.includes(upgrade.prototype.getAll(listeProfiles[i])[a].id)) {
                    let goodUpgrade = upgrade.prototype.getAll(listeProfiles[i])[a]
                    if(goodUpgrade.bonusType == "cps") {
                      listeProfiles[i][goodUpgrade.type].multi *= goodUpgrade.data.bonus
                    }
                  }

                  message.channel.send(new Discord.MessageEmbed()
                  .setDescription(`Tu as acheté l'amélioration **${goodUpgrade.name}**`)
                  .setColor(colorVert)).then(sent => deleteMsg(sent, message))
                }else{
                  message.channel.send(new Discord.MessageEmbed()
                  .setDescription(`Tu n'as pas asser d'argent! **${approx(parseInt(hexToInt(listeProfiles[i].money)) , {separator: " ", min10k: true, capital: true, decimal: 1})} / ${approx(parseInt(hexToInt(goodUpgrade.data.cost)) , {separator: " ", min10k: true, capital: true, decimal: 1})}**`)
                  .setColor(colorRouge)).then(sent => deleteMsg(sent, message))
                }
              }else{
                message.channel.send(new Discord.MessageEmbed()
                .setDescription(goodUpgrade.err)
                .setColor(colorRouge)).then(sent => deleteMsg(sent, message))
              }
              return

            }else if(a + 1 == upgrade.prototype.getAll(listeProfiles[i]).length) {
              message.channel.send(new Discord.MessageEmbed()
              .setDescription(`Article inconnu. ${prefix}upgrade (entre le ID)`)
              .setColor(colorRouge)).then(sent => deleteMsg(sent, message))
            }
          }
          return
        }else if(i + 1 == listeProfiles.length){
          message.channel.send(pasCompte).then(sent => deleteMsg(sent, message))
          return
        }
      }
    }
  }

  else if(cmd == "buy" || cmd == "b") {
    
    if(args[0]){
      args[0] = args[0].toLowerCase()
      args[0] = args[0].normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
    }

    if(args[1]){
      args[1] = args[1].toLowerCase()
      args[1] = args[1].normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
    }

    if(args[2]){
      args[2] = args[2].toLowerCase()
      args[2] = args[2].normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
    }

    let x = 1
    let number = 1
    if(!isNaN(parseInt(args[0]))) {
      number = parseInt(args[0])
    }else {
      if(args[0] != "max") {
        x--
      }
    }
    
    if (number < 0 || number > 1000) return message.channel.send(new Discord.MessageEmbed()
    .setDescription(`Action Impossible`)
    .setColor(colorRouge))
    for (let i = 0; i < listeProfiles.length; i++) {
      if(listeProfiles[i].name == message.member.displayName) {
        let type = undefined
        switch (`${args[x]} ${args[1+x] ? args[1+x] : ""}`) {
          case "snigger ":
            type = roles.prototype.getSnigger()
            break;
          
          case "orange glo":
          case "orange ":
          case "glo ":
            type  = roles.prototype.getOrange()
            args[x] = "orange"
            break;
          
          case "pine sol":
          case "pine ":
          case "sol ":
            type  = roles.prototype.getPine()
            args[x] = "pine"
            break;

          case "familys bot":
          case "familys ":
          case "family ":
          case "bot ":
            type  = roles.prototype.getFamily()
            args[x] = "familys"
            break;

          case "cocomb ":
            type  = roles.prototype.getCocomb()
            break;

          case "douchebag ":
            type  = roles.prototype.getDouchebag()
            break;

          case "corolla ":
            type  = roles.prototype.getCorolla()
            break;

          case "bagarreur ":
            type  = roles.prototype.getBagarreur()
            break;
            
          case "coureur bois":
          case "coureur ":
          case "bois ":
            type  = roles.prototype.getCoureur()
            args[x] = "coureur"
            break;
          
          case "remparts ":
            type  = roles.prototype.getRemparts()
            break;

          case "pot mayo":
          case "pot ":
          case "mayo ":
            type  = roles.prototype.getMayo()
            args[x] = "pot"
            break;

          case "gwen ":
            type  = roles.prototype.getGwen()
            break;

          case "fringale ":
            type  = roles.prototype.getFringale()
            break;

          case "remi ":
            type  = roles.prototype.getRemi()
            break;

          case "cereales ":
            type  = roles.prototype.getCéréales()
            break;

          case "evier pisse":
          case "evier ":
          case "pisse ":
            type  = roles.prototype.getÉvier()
            args[x] = "evier"
            break;

          case "penis ":
            type  = roles.prototype.getPenis()
            break;

          case "dieu bilou":
          case "dieu ":
          case "bilou ":
            type  = roles.prototype.getBilou()
            args[x] = "dieu"
            break;

          case "biscuit chateau":
          case "biscuit ":
          case "chateau ":
            type  = roles.prototype.getBiscuit()
            args[x] = "biscuit"
            break;

          case "carte inspire":
          case "carte ":
          case "inspire ":
            type  = roles.prototype.getCarte()
            args[x] = "carte"
            break;
        }
        if(type == undefined) return message.channel.send(new Discord.MessageEmbed()
        .setDescription(`Article inconnu. ${prefix}shop`)
        .setColor(colorRouge)).then((sent) => {deleteMsg(sent, message)})

        let bonus = 1
        for (let a = 0; a < upgrade.prototype.getAll(listeProfiles[i]).length; a++) {
          if(listeProfiles[i].upgradeId == undefined) break
          if(listeProfiles[i].upgradeId.includes(upgrade.prototype.getAll(listeProfiles[i])[a].id)) {
            let goodUpgrade = upgrade.prototype.getAll(listeProfiles[i])[a]
            if(args[x] == goodUpgrade.type && goodUpgrade.bonusType == "cost") {
              bonus = goodUpgrade.data.bonus
            }
          }
        }

       prix = hexToInt(type.data.cost)
        
        if(args[0] == "max") {
          number = -1
          let coutTotal = 0
          let currentPrice = ((1.15 ** listeProfiles[i][args[x]].number) * prix) * bonus
          do  {
              coutTotal += currentPrice;
              currentPrice *= 1.15;
              number++;

          }while (Math.round(coutTotal) <= parseInt(hexToInt(listeProfiles[i].money)))
        }

        console.log(args[x])
        console.log(listeProfiles[i][args[x]])


        let cost = Math.round(((prix * (1.15 ** (listeProfiles[i][args[x]].number + parseInt(number)) - 1.15 ** listeProfiles[i][args[x]].number)) / 0.15) * bonus)
        
        if(cost == 0) return message.channel.send(new Discord.MessageEmbed()
        .setDescription(`Tu n'as pas assez d'argent!`)
        .setColor(colorRouge)).then((sent) => {deleteMsg(sent, message)})

        if(cost > hexToInt(listeProfiles[i].money)) return message.channel.send(new Discord.MessageEmbed()
        .setDescription(`Tu n'as pas assez d'argent! **${approx(hexToInt(listeProfiles[i].money) , {separator: " ", min10k: true, capital: true, decimal: 2})}$/${numberWithCommas(approx(cost , {separator: " ", min10k: true, capital: true, decimal: 2}))}$**\n${progressbar.filledBar(cost, parseInt(hexToInt(listeProfiles[i].money)), 20)}` )
        .setColor(colorRouge)).then((sent) => {deleteMsg(sent, message)})

        listeProfiles[i][args[x]].number += parseInt(number)
        listeProfiles[i].money = intToHex(hexToInt(listeProfiles[i].money) - hexToInt(intToHex(cost)))
        listeProfiles[i].dispense += cost

        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`Vous avez acheté **${number} ${type.name}** pour **${approx(hexToInt(intToHex(cost)) , {separator: " ", min10k: true, capital: true, decimal: 2})}$**`)
        .setColor(colorVert)
        .setImage(type.img)).then((sent) => {deleteMsg(sent, message)})
        
        fs.writeFile('./src/data.json', JSON.stringify(listeProfiles), "utf8" , function(err) {
          if(err) throw err;})
        
        return
      }else if(i + 1 == listeProfiles.length){
        message.channel.send(pasCompte)
        return
      }
    }
  }

  else if(cmd == "succes" || cmd == "s") {
    let profil = message.member
    if(taggerUser != undefined) {
      profil = taggerUser
    }
    let messageAchivememts = ""
    for (let i = 0; i < listeProfiles.length; i++) {
      if(listeProfiles[i].name == profil.displayName) {
        mapAchiv(listeProfiles[i])
        	for (let a = 0; a < mapAchievements.length; a++) {
          if(listeProfiles[i].achievements.includes(mapAchievements[a].name)) {
            messageAchivememts += `✅ **${mapAchievements[a].name}**\n\n`
          }else{
            messageAchivememts += `🟥 **${mapAchievements[a].name}**\n\n`
          }
        }
      }
    
    	if(listeProfiles[i].name == profil.displayName) {
      	message.channel.send(new Discord.MessageEmbed()
        .setColor(colorJaune)
      	.setTitle(`__Succès de ${listeProfiles[i].name}__`)
      	.setDescription(messageAchivememts))
      	return
    	}
    }
  }

  else if(cmd == "give" || cmd == "g") {
    if(!taggerUser) return message.channel.send(new Discord.MessageEmbed()
    .setDescription("A qui veut tu envoyer l'argent")
    .setColor(colorRouge))
    if(isNaN(args[0]) || args[0] < 0) return message.channel.send(new Discord.MessageEmbed()
    .setDescription("Tu dois insérer un nombre plus haut que 0")
    .setColor(colorRouge))
    if(taggerUser.displayName == message.member.displayName) return message.channel.send(new Discord.MessageEmbed()
    .setDescription("Action impossible")
    .setColor(colorRouge))

    for (let i = 0; i < listeProfiles.length; i++) {
      if(listeProfiles[i].name == message.member.displayName) {
        if(parseInt(args[0]) > parseInt(hexToInt(listeProfiles[i].money))) return message.channel.send(new Discord.MessageEmbed()
        .setDescription("Tu n'as pas assez d'argent")
        .setColor(colorRouge))

        let montant = parseInt(args[0])

        for (let a = 0; a < listeProfiles.length; a++) {
          if(listeProfiles[a].name == taggerUser.displayName) {
            listeProfiles[i].money = intToHex(BigInt(hexToInt(listeProfiles[i].money)) - BigInt(Math.round(montant)))
            listeProfiles[a].money = intToHex(BigInt(hexToInt(listeProfiles[a].money)) + BigInt(Math.round(montant)))
            listeProfiles[i].argentDonne += montant

            message.channel.send(new Discord.MessageEmbed()
            .setDescription(`**${listeProfiles[i].name}** a donné **${approx(montant , {separator: " ", min10k: true, capital: true, decimal: 2})}$** à **${listeProfiles[a].name}**`)
            .setColor(colorVert))
            fs.writeFile('./src/data.json', JSON.stringify(listeProfiles), "utf8" , function(err) {
              if(err) throw err;})
            return
          }
          if(a + 1 == listeProfiles.length) {
            message.channel.send(new Discord.MessageEmbed()
            .setDescription("Aucun profil associé avec ce compte")
            .setColor(colorRouge)).then((sent) => {deleteMsg(sent, message)})
          }
        }
        return
      }

      if(i + 1 == listeProfiles.length) {
        message.channel.send(new Discord.MessageEmbed()
        .setDescription("Tu n'as pas de compte. Fait !play")
        .setColor(colorRouge)).then((sent) => {deleteMsg(sent, message)})
      }
    }
  }

  else if(cmd == "roulette") {
    if(!args[1] || isNaN(args[1])) return message.channel.send(new Discord.MessageEmbed()
    .setDescription(`Tu dois mettre un nombre! (${prefix}roulette [montant] [nombre])`)
    .setColor(colorRouge)).then((sent) => {deleteMsg(sent, message)})

    if(args[0] < 1) return message.channel.send(new Discord.MessageEmbed()
    .setDescription("Action impossible")
    .setColor(colorRouge)).then((sent) => {deleteMsg(sent, message)})

    if(!args[0] || isNaN(args[0])) return message.channel.send(new Discord.MessageEmbed()
    .setDescription(`Tu dois mettre un nombre! (${prefix}roulette [montant] [nombre])`)
    .setColor(colorRouge)).then((sent) => {deleteMsg(sent, message)})

    if(args[1] > 36 || args[1] < 0) return message.channel.send(new Discord.MessageEmbed()
    .setDescription("Tu ne peut pas parier sur un nombre plus haut que 36 et plus bas que 0")
    .setColor(colorRouge)).then((sent) => {deleteMsg(sent, message)})
    
    let fois = 1
    if(args[2]) {
      if(isNaN(args[2]) || args[2] < 0 || args[2] > 100000) return message.channel.send(new Discord.MessageEmbed()
      .setDescription("Ton nombre de pari doit être positif et sous 100000.")
      .setColor(colorRouge)).then((sent) => {deleteMsg(sent, message)})
      fois = parseFloat(args[2])
    }

    for (let i = 0; i < listeProfiles.length; i++) {
      if(listeProfiles[i].name == message.member.displayName) {
        if((parseFloat(args[0]) * fois) > parseInt(hexToInt(listeProfiles[i].money))) return message.channel.send(new Discord.MessageEmbed()
        .setDescription("Tu ne peut pas parrier plus d'argent que tu as.")
        .setColor(colorRouge)).then((sent) => {deleteMsg(sent, message)})
        let profit = 0
        let nombre = 0
        for (let a = 0; a < fois; a++) {
          nombre = (Math.floor(Math.random() * 37))
          if(nombre == args[1]) {
            profit += args[0] * 36
          }else{
            profit -= args[0]
          }
        }
        listeProfiles[i].dispense = + parseInt(listeProfiles[i].dispense) + profit
        if(profit > 0) {
          listeProfiles[i].money = parseInt(hexToInt(listeProfiles[i].money)) + profit
          message.channel.send(new Discord.MessageEmbed()
          .setDescription(`NICE! Tu as réussit ton pari! Tu viens de gagner **${numberWithCommas(parseInt(profit))}$**`)
          .setColor(colorVert)).then((sent) => {deleteMsg(sent, message)})
        }else{
          message.channel.send(new Discord.MessageEmbed()
          .setDescription(`Malheureusement, tu as perdu ton pari. Meilleur chance la prochaine fois!\n**${numberWithCommas(profit)}$**`)
          .setColor(colorRouge)).then((sent) => {deleteMsg(sent, message)})

          listeProfiles[i].money = intToHex(hexToInt(listeProfiles[i].money) + profit)
        }
        return
      }else if(i + 1 == listeProfiles.length){
        message.channel.send(pasCompte).then((sent) => {deleteMsg(sent, message)})
        return
      }
    }
  }

  else if(cmd == "profil" || cmd == "p") {
    fs.readFile('./src/data.json', "utf8", (err, JsonString) => {
      if(err) {
        console.log(err)
      }else{
        listeProfiles = JSON.parse(JsonString)
      }
    })
    let profil = message.member
    if(taggerUser != undefined) {
      profil = taggerUser
    }

    for (let i = 0; i < listeProfiles.length; i++) {
      if(listeProfiles[i].name == profil.displayName) {
        message.channel.send(msgProfil(listeProfiles[i], profil)).then(sent => {
          lastProfilMsg = sent
        })
        lastProfil = {prm: listeProfiles[i].name, dex: profil}
        return
        
      }
      if(i + 1 == listeProfiles.length) return message.channel.send(new Discord.MessageEmbed()
      .setDescription("Aucun profil associé avec ce compte")
      .setColor(colorRouge)).then((sent) => {deleteMsg(sent, message)})
    }
  }

  else if(cmd == "rank" || cmd == "r") {
    try {
      fs.readFile('./src/data.json', "utf8", (err, jsonString) => {
        if(err) {
          console.log(err);
        }else{
          listeProfiles = JSON.parse(jsonString);
        }
      })
    } catch (error) {
      console.log(error)
    }
    if (listeProfiles.length < 3) return message.channel.send(new Discord.MessageEmbed()
    .setDescription(`Il n'y a pas assez de joueurs pour l'instant!`)
    .setColor(colorRouge))
    listeProfiles.sort((a, b) => parseInt(hexToInt(a.money)) < parseInt(hexToInt(b.money)) ? 1 : -1).slice(0, 10)

    let embedRank = new Discord.MessageEmbed()
    .setTitle("Classement des plus riches du serveur")
    .setColor("#F1C40F")
    .addFields(
      {name: '\u200b', value: '\u200b', inline: true},
      {name: `🥇 ${listeProfiles[0].name}`, value: `${numberWithCommas(hexToInt(listeProfiles[0].money))} $`, inline: true},
      {name: '\u200b', value: '\u200b', inline: true},
      {name: `\🥈 ${listeProfiles[1].name}`, value: `${numberWithCommas(hexToInt(listeProfiles[1].money))} $`, inline: true},
      {name: '\u200b', value: '\u200b', inline: true},
      {name: `\🥉 ${listeProfiles[2].name}`, value: `${numberWithCommas(hexToInt(listeProfiles[2].money))} $`, inline: true}
    )

    message.channel.send(embedRank)
  }

  else if(cmd == "shop") {
    let messageShop = ""
    let type = roles.prototype.getAll()
    for (let i = 0; i < listeFarm.length; i++) {

      messageShop += `**${type[i].name.split(" ")[0]} ${listeFarm[i]}**\nPrix: \`${approx(hexToInt(type[i].data.cost), {separator: " ", min10k: true, capital: true, decimal: 0})}$\`\nRevenus:\`+${approx(type[i].data.profit, {separator: " ", min10k: true, capital: true, decimal: 2})}/sec\`\n\n`
    }
    message.channel.send(new Discord.MessageEmbed()
    .setTitle("Liste des articles du shop")
    .setDescription(messageShop)
    .setColor("0099E1"))
  }

  else if(cmd == "help") {
    message.channel.send(new Discord.MessageEmbed()
    .setDescription(`Chaque message écrit donne 1$. Commence par faire ${prefix}play pour jouer et ensuite regarde ${prefix}shop pour voir la liste des items à acheter.`)
    .setTitle("Commandes de IdleFFS")
    .addFields(
      {name:"play", value: "Pour jouer"},
      {name:"shop", value: "Voir la liste des objets à acheter"},
      {name:"buy || b (nombre) [item]", value: "Acheter un objet"},
      {name:"prestige", value: "Passer au prochain prestige"},
      {name:"upgrade || u (id)", value: "Améliorer une ferme pour créer plus de revenus"},
      {name:"give || g [montant] [joueur]", value: "Donner de l'argent à un autre joueur"},
      {name:"roulette [montant d'argent] [numéro choisi] (nombre de fois)", value: "Jouer a la roulette. Donne 36 fois la mise."},
      {name:"profil || p (joueur)", value: "Voir son profil ou le profil d'un joueur",},
      {name:"rank", value: "Voir le classement du serveur"},
      {name:"prefix [nouveau prefix]", value: "Changer le prefix du bot"}
    )
    .setColor("#F1C40F"))
  }

  else if(cmd == "prefix") {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Tu n'es pas admin.")
    if(!args[0]) return message.channel.send("Quel prefix veut tu mettre?")
    prefix = args[0]
    message.channel.send(`Le nouveau prefix est **${prefix}**`)
    bot.user.setActivity(`${prefix}help`)
  }
})

bot.on("guildMemberUpdate", (oldMember, newMember) => {
  for (let i = 0; i < listeProfiles.length; i++) {
    if(listeProfiles[i].name == oldMember.displayName) {
      listeProfiles[i].name = newMember.displayName
    }
  }
}) 

bot.on("messageReactionAdd", async (reaction, user) => {
  fs.readFileSync('./src/variable.json', "utf8", (err, JsonString) => {
    if(err) {
      console.log(err)
    }else{
      variables = JSON.parse(JsonString)
    }
  })
  if(user.bot) return
  if(reaction.count > 2) return
  if(reaction.emoji.name == "✅") {
    if(user.username == reactionPrestige.author.username) {
      let ok = false
      for (let i = 0; i < listeProfiles.length; i++) {
        if(listeProfiles[i].name == reactionPrestige.member.displayName) {
          if(hexToInt(listeProfiles[i].money) >= prixPres) {
            for (let a = 0; a < variables[0].messagePrestige.length; a++) {
              if(variables[0].messagePrestige[a] == listeProfiles[i].id) {
                variables[0].messagePrestige.splice(a, 1)
                fs.writeFileSync('./src/variable.json', JSON.stringify(variables), "utf8" , function(err) {
                  if(err) throw err;})
              }
            }

            let dispense = listeProfiles[i].dispense + prixPres
            let prestige = listeProfiles[i].prestige + numPrestige
            let achievements = listeProfiles[i].achievements ? listeProfiles[i].achievements : []
            let upId = listeProfiles[i].upgradeId ? listeProfiles[i].upgradeId : []
            listeProfiles.splice(i, 1)
            listeProfiles.push(new Profil(reactionPrestige, "F", dispense, prestige, achievements, upId))

            for (let a = 0; a < upgrade.prototype.getAll(listeProfiles[i]).length; a++) {
              if(listeProfiles[listeProfiles.length - 1].upgradeId.includes(upgrade.prototype.getAll(listeProfiles[listeProfiles.length - 1])[a].id)) {
                let goodUpgrade = upgrade.prototype.getAll(listeProfiles[i])[a]
                if(goodUpgrade.bonusType == "cps") {
                  listeProfiles[i][goodUpgrade.type].multi *= goodUpgrade.data.bonus
                }
              }
            }

            fs.writeFileSync('./src/data.json', JSON.stringify(listeProfiles), "utf8" , function(err) {
              if(err) throw err;})

            reaction.message.channel.send(new Discord.MessageEmbed()
            .setDescription(`**${listeProfiles[listeProfiles.length - 1].name}** est maintenant prestige **${listeProfiles[listeProfiles.length - 1].prestige}!**`)
            .setColor(colorVert))
            return ok = true
          }else{
            reaction.message.channel.send(new Discord.MessageEmbed()
            .setDescription(`Tu n'as pas assez d'argent! **${numberWithCommas(parseInt(hexToInt(listeProfiles[i].money)))}$/${numberWithCommas(prixPres)}$**`)
            .setColor(colorRouge)).then((sent) => {deleteMsg(sent, message)})
          }
        }
        if(ok == true) return
      }
    }else{
      reaction.users.remove(user.id)
    }
  }
})

bot.login(process.env.BOT_TOKEN)