class vingtdeux {

    constructor(profil) {
      this.data = {
        cost: "1836E2100",
        bonus: 2,
      }
      this.type = "cocomb"
      this.bonusType = "cps"
      this.effect = "x2 sur Cocomb"
      this.cond = profil.cocomb.number >= 50
      this.err = "Tu dois avoir au moins 50 Cocomb pour acheter cet object."
      this.id = 22
      this.name = "Double Cocomb (50)"
    }
  }
  
  module.exports = vingtdeux 