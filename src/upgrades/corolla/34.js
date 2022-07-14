class trentequatre {

    constructor(profil) {
      this.data = {
        cost: "8AC7230489E80000",
        bonus: 0.5,
      }
      this.type = "corolla"
      this.bonusType = "cost"
      this.effect = "Divise coût par 2 de Corolla"
      this.cond = profil.corolla.number >= 200
      this.err = "Tu dois avoir au moins 200 Corolla pour acheter cet object."
      this.id = 34
      this.name = "Plus de Corolla? (200)"
    }
  }
  
  module.exports = trentequatre