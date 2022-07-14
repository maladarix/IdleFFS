class trentetrois {

    constructor(profil) {
      this.data = {
        cost: "5AF3107A4000",
        bonus: 5,
      }
      this.type = "corolla"
      this.bonusType = "cps"
      this.effect = "x5 sur Corolla"
      this.cond = profil.corolla.number >= 100
      this.err = "Tu dois avoir au moins 100 Corolla pour acheter cet object."
      this.id = 33
      this.name = "x5 sur Corolla (100)"
    }
  }
  
  module.exports = trentetrois