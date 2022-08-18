class trentehuit {

  constructor(profil) {
    this.data = {
      cost: "5AF3107A4000",
      bonus: 5,
    }
    this.type = "bagarreur"
    this.bonusType = "cps"
    this.effect = "x5 sur Bagarreur"
    this.cond = profil.bagarreur.number >= 100
    this.err = "Tu dois avoir au moins 100 Bagarreur pour acheter cet object."
    this.id = 38
    this.name = "x5 sur Bagarreur (100)"
  }
}

module.exports = trentehuit