class soixantequatorze {

  constructor(profil) {
    this.data = {
      cost: "2A0159141D968317C8000000",
      bonus: 0.5,
    }
    this.type = "cereales"
    this.bonusType = "cost"
    this.effect = "Divise coût par 2 de cereales"
    this.cond = profil.cereales.number >= 200
    this.err = "Tu dois avoir au moins 200 cereales pour acheter cet object."
    this.id = 74
    this.name = "Plus de cereales? (200)"
  }
}

module.exports = soixantequatorze