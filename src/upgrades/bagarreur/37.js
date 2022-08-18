class trentsept {

  constructor(profil) {
    this.data = {
      cost: "F01B4A38800",
      bonus: 2,
    }
    this.type = "bagarreur"
    this.bonusType = "cps"
    this.effect = "x2 sur Bagarreur"
    this.cond = profil.bagarreur.number >= 50
    this.err = "Tu dois avoir au moins 50 Bagarreur pour acheter cet object."
    this.id = 37
    this.name = "Double Bagarreur (50)"
  }
}

module.exports = trentsept