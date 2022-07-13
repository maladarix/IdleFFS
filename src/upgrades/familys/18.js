class dixhuit {

    constructor(profil) {
      this.data = {
        cost: 60000000000,
        bonus: 5,
      }
      this.type = "familys"
      this.bonusType = "cps"
      this.effect = "x5 sur Family's bot"
      this.cond = profil.familys.number >= 100
      this.err = "Tu dois avoir au moins 100 Family's bot pour acheter cet object."
      this.id = 18
      this.name = "x5 sur Family's bot"
    }
  }
  
  module.exports = dixhuit