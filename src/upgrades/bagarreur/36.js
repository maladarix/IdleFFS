class trentetsix {

    constructor(profil) {
      this.data = {
        cost: "6FC23AC00",
        bonus: 2,
      }
      this.type = "bagarreur"
      this.bonusType = "cps"
      this.effect = "x2 sur Bagarreur"
      this.cond = profil.bagarreur.number >= 10
      this.err = "Tu dois avoir au moins 10 Bagarreur pour acheter cet object."
      this.id = 36
      this.name = "Double Bagarreur (10)"
    }
}

module.exports = trentetsix