class vingtsept {

    constructor(profil) {
      this.data = {
        cost: "104C533C00",
        bonus: 2,
      }
      this.type = "douchebag"
      this.bonusType = "cps"
      this.effect = "x2 sur Douchebag"
      this.cond = profil.douchebag.number >= 50
      this.err = "Tu dois avoir au moins 50 Douchebag pour acheter cet object."
      this.id = 27
      this.name = "Double Douchebag (50)"
    }
  }
  
  module.exports = vingtsept 