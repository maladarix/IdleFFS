class vingtcinq {

    constructor(profil) {
      this.data = {
        cost: "8344365EDC7659AA510000000",
        bonus: 0.5,
      }
      this.type = "cocomb"
      this.bonusType = "cost"
      this.effect = "Divise coût par 2 de Cocomb"
      this.cond = profil.cocomb.number >= 400
      this.err = "Tu dois avoir au moins 400 Cocomb pour acheter cet object."
      this.id = 20
      this.name = "Encore plus de Cocomb?! (400)"
    }
  }
  
  module.exports = vingtcinq