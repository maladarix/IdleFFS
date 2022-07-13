class dixsept {

    constructor(profil) {
      this.data = {
        cost: "23C34600",
        bonus: 2,
      }
      this.type = "familys"
      this.bonusType = "cps"
      this.effect = "x2 sur Family's bot"
      this.cond = profil.familys.number >= 50
      this.err = "Tu dois avoir au moins 50 Family's bot pour acheter cet object."
      this.id = 17
      this.name = "Double Family's bot"
    }
  }
  
  module.exports = dixsept