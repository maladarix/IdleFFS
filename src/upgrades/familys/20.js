class vingt {

    constructor(profil) {
      this.data = {
        cost: 60000000000000000000000000000,
        bonus: 0.5,
      }
      this.type = "familys"
      this.bonusType = "cost"
      this.effect = "Divise coût par 2 de Family's bot"
      this.cond = profil.familys.number >= 400
      this.err = "Tu dois avoir au moins 400 Family's bot pour acheter cet object."
      this.id = 20
      this.name = "Encore plus de Family's bot?!"
    }
  }
  
  module.exports = vingt