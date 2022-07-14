class trentedeux {

    constructor(profil) {
      this.data = {
        cost: "E8D4A51000",
        bonus: 2,
      }
      this.type = "corolla"
      this.bonusType = "cps"
      this.effect = "x2 sur Corolla"
      this.cond = profil.corolla.number >= 50
      this.err = "Tu dois avoir au moins 50 Corolla pour acheter cet object."
      this.id = 32
      this.name = "Double Corolla (50)"
    }
  }
  
  module.exports = trentedeux 