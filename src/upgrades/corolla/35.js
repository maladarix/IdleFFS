class trentecinq {

    constructor(profil) {
      this.data = {
        cost: "4EE2D6D415B85ACEF8100000000",
        bonus: 0.5,
      }
      this.type = "corolla"
      this.bonusType = "cost"
      this.effect = "Divise coût par 2 de Corolla"
      this.cond = profil.corolla.number >= 400
      this.err = "Tu dois avoir au moins 400 Corolla pour acheter cet object."
      this.id = 35
      this.name = "Encore plus de Corolla?! (400)"
    }
  }
  
  module.exports = trentecinq