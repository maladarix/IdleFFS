class vingtetun {

    constructor(profil) {
      this.data = {
        cost: "C65D40",
        bonus: 2,
      }
      this.type = "cocomb"
      this.bonusType = "cps"
      this.effect = "x2 sur Cocomb"
      this.cond = profil.cocomb.number >= 10
      this.err = "Tu dois avoir au moins 10 Cocomb pour acheter cet object."
      this.id = 21
      this.name = "Double Cocomb (10)"
    }
  }
  
  module.exports = vingtetun