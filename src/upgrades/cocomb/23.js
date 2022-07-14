class vingttrois {

    constructor(profil) {
      this.data = {
        cost: "975704E400",
        bonus: 5,
      }
      this.type = "cocomb"
      this.bonusType = "cps"
      this.effect = "x5 sur Cocomb"
      this.cond = profil.cocomb.number >= 100
      this.err = "Tu dois avoir au moins 100 Cocomb pour acheter cet object."
      this.id = 23
      this.name = "x5 sur Cocomb (100)"
    }
  }
  
  module.exports = vingttrois