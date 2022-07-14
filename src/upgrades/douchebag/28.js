class vingthuit {

    constructor(profil) {
      this.data = {
        cost: "65DD0837000",
        bonus: 5,
      }
      this.type = "douchebag"
      this.bonusType = "cps"
      this.effect = "x5 sur Douchebag"
      this.cond = profil.douchebag.number >= 100
      this.err = "Tu dois avoir au moins 100 Douchebag pour acheter cet object."
      this.id = 28
      this.name = "x5 sur Douchebag (100)"
    }
  }
  
  module.exports = vingthuit