class dixneuf {

    constructor(profil) {
      this.data = {
        cost: "1550F7DCA70000",
        bonus: 0.5,
      }
      this.type = "familys"
      this.bonusType = "cost"
      this.effect = "Divise coût par 2 de Family's bot"
      this.cond = profil.familys.number >= 200
      this.err = "Tu dois avoir au moins 200 Family's bot pour acheter cet object."
      this.id = 19
      this.name = "Plus de Family's bot?"
    }
  }
  
  module.exports = dixneuf