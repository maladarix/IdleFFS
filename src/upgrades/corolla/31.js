class trenteetun {

    constructor(profil) {
      this.data = {
        cost: "77359400",
        bonus: 2,
      }
      this.type = "corolla"
      this.bonusType = "cps"
      this.effect = "x2 sur Corolla"
      this.cond = profil.corolla.number >= 10
      this.err = "Tu dois avoir au moins 10 Corolla pour acheter cet object."
      this.id = 31
      this.name = "Double Corolla (10)"
    }
  }
  
  module.exports = trenteetun