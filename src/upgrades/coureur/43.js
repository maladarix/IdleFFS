class quarantetrois {

  constructor(profil) {
    this.data = {
      cost: "5A981D69C5C000",
      bonus: 5,
    }
    this.type = "coureur"
    this.bonusType = "cps"
    this.effect = "x5 sur Coureur"
    this.cond = profil.coureur.number >= 100
    this.err = "Tu dois avoir au moins 100 Coureur pour acheter cet object."
    this.id = 43
    this.name = "x5 sur Coureur (100)"
  }
}

module.exports = quarantetrois