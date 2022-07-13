class seize {

    constructor(profil) {
      this.data = {
        cost: 1200000,
        bonus: 2,
      }
      this.type = "familys"
      this.bonusType = "cps"
      this.effect = "x2 sur Family's bot"
      this.cond = profil.familys.number >= 10
      this.err = "Tu dois avoir au moins 10 Family's bot pour acheter cet object."
      this.id = 16
      this.name = "Double Family's bot"
    }
  }
  
  module.exports = seize