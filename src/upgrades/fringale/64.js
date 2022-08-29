class soixantequatre {

  constructor(profil) {
    this.data = {
      cost: "464F733BAA0AE675000000",
      bonus: 0.5,
    }
    this.type = "fringale"
    this.bonusType = "cost"
    this.effect = "Divise coût par 2 de fringale"
    this.cond = profil.fringale.number >= 200
    this.err = "Tu dois avoir au moins 200 fringale pour acheter cet object."
    this.id = 64
    this.name = "Plus de fringale? (200)"
  }
}

module.exports = soixantequatre