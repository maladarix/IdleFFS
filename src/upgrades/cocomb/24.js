class vingtquatre {

    constructor(profil) {
      this.data = {
        cost: "E6ED27D6668000",
        bonus: 0.5,
      }
      this.type = "cocomb"
      this.bonusType = "cost"
      this.effect = "Divise coût par 2 de Cocomb"
      this.cond = profil.cocomb.number >= 200
      this.err = "Tu dois avoir au moins 200 Cocomb pour acheter cet object."
      this.id = 24
      this.name = "Plus de Cocomb? (200)"
    }
  }
  
  module.exports = vingtquatre