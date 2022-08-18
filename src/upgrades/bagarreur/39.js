class trenteneuf {

  constructor(profil) {
    this.data = {
      cost: "8F1D5C1CAE3740000",
      bonus: 0.5,
    }
    this.type = "bagarreur"
    this.bonusType = "cost"
    this.effect = "Divise coût par 2 de Bagarreur"
    this.cond = profil.bagarreur.number >= 200
    this.err = "Tu dois avoir au moins 200 Bagarreur pour acheter cet object."
    this.id = 39
    this.name = "Plus de Bagarreur? (200)"
  }
}

module.exports = trenteneuf