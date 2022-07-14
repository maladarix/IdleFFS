class trente {

    constructor(profil) {
      this.data = {
        cost: "585A3849B1ED328167C0000000",
        bonus: 0.5,
      }
      this.type = "douchebag"
      this.bonusType = "cost"
      this.effect = "Divise coût par 2 de Douchebag"
      this.cond = profil.douchebag.number >= 400
      this.err = "Tu dois avoir au moins 400 Douchebag pour acheter cet object."
      this.id = 30
      this.name = "Encore plus de Douchebag?! (400)"
    }
  }
  
  module.exports = trente