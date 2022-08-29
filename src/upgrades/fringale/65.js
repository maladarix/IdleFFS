class soixantecinq {

  constructor(profil) {
    this.data = {
      cost: "27F780B970179860D5116232000000000",
      bonus: 0.5,
    }
    this.type = "fringale"
    this.bonusType = "cost"
    this.effect = "Divise coût par 2 de fringale"
    this.cond = profil.fringale.number >= 400
    this.err = "Tu dois avoir au moins 400 fringale pour acheter cet object."
    this.id = 65
    this.name = "Plus de fringale? (400)"
  }
}

module.exports = soixantecinq