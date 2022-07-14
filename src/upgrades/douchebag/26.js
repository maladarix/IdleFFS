class vingtsix {

    constructor(profil) {
      this.data = {
        cost: "8583B00",
        bonus: 2,
      }
      this.type = "douchebag"
      this.bonusType = "cps"
      this.effect = "x2 sur Douchebag"
      this.cond = profil.douchebag.number >= 10
      this.err = "Tu dois avoir au moins 10 Douchebag pour acheter cet object."
      this.id = 26
      this.name = "Double Douchebag (10)"
    }
  }
  
  module.exports = vingtsix