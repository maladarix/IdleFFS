class soixante {

  constructor(profil) {
    this.data = {
      cost: "34A98275D8F7EFEF06AD7E6000000000",
      bonus: 0.5,
    }
    this.type = "gwen"
    this.bonusType = "cost"
    this.effect = "Divise coût par 2 de gwen"
    this.cond = profil.gwen.number >= 400
    this.err = "Tu dois avoir au moins 400 gwen pour acheter cet object."
    this.id = 60
    this.name = "Plus de gwen? (400)"
  }
}

module.exports = soixante