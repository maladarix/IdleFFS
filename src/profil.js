const item = require('./farm/farm')
class Profil {

  constructor(message, money, dispense, prestige, achievements, upId) {

    this.name = (message.member.nickname) ? message.member.nickname : message.author.username
    this.id = message.author.id
    this.online = true
    this.timeOut = 0
    this.money = money
    this.dispense = dispense
    this.totalmoney = 15
    this.cps = 0
    this.argentDonne = 0
    this.prestige = prestige
    this.upgradeId = upId
    this.achievements = achievements
    this.snigger = {number: 0, multi:1 , data: item.prototype.getSnigger().data}
    this.orange = {number: 0, multi:1 , data: item.prototype.getOrange().data}
    this.pine = {number: 0, multi:1 , data: item.prototype.getPine().data}
    this.familys = {number: 0, multi:1 , data: item.prototype.getFamily().data}
    this.cocomb = {number: 0, multi:1 , data: item.prototype.getCocomb().data}
    this.douchebag = {number: 0, multi:1 , data: item.prototype.getDouchebag().data}
    this.corolla = {number: 0, multi:1 , data: item.prototype.getCorolla().data}
    this.bagarreur = {number: 0, multi:1 , data: item.prototype.getBagarreur().data}
    this.coureur = {number: 0, multi:1 , data: item.prototype.getCoureur().data}
    this.remparts = {number: 0, multi:1 , data: item.prototype.getRemparts().data}
    this.pot = {number: 0, multi:1 , data: item.prototype.getMayo().data}
    this.gwen = {number: 0, multi:1 , data: item.prototype.getGwen().data}
    this.fringale = {number: 0, multi:1 , data: item.prototype.getFringale().data}
    this.rémi = {number: 0, multi:1 , data: item.prototype.getRemi().data}
    this.céréales = {number: 0, multi:1 , data: item.prototype.getCéréales().data}
    this.évier = {number: 0, multi:1 , data: item.prototype.getÉvier().data}
    this.penis ={number: 0, multi:1 , data: item.prototype.getPenis().data}
    this.dieu = {number: 0, multi:1 , data: item.prototype.getBilou().data}
    this.biscuit = {number: 0, multi:1 , data: item.prototype.getBiscuit().data}
    this.carte = {number: 0, multi:1 , data: item.prototype.getCarte().data}
  }
}

module.exports = Profil