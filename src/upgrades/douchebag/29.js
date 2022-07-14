class vingtneuf {

    constructor(profil) {
      this.data = {
        cost: "9B6E64A8EC60000",
        bonus: 0.5,
      }
      this.type = "douchebag"
      this.bonusType = "cost"
      this.effect = "Divise coût par 2 de Douchebag"
      this.cond = profil.douchebag.number >= 200
      this.err = "Tu dois avoir au moins 200 Douchebag pour acheter cet object."
      this.id = 29
      this.name = "Plus de Douchebag? (200)"
    }
  }
  
  module.exports = vingtneuf