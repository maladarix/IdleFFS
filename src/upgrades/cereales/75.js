class soixantequinze {

  constructor(profil) {
    this.data = {
      cost: "17E092146EBB45DBBB87175ED0000000000",
      bonus: 0.5,
    }
    this.type = "cereales"
    this.bonusType = "cost"
    this.effect = "Divise coût par 2 de cereales"
    this.cond = profil.cereales.number >= 400
    this.err = "Tu dois avoir au moins 400 cereales pour acheter cet object."
    this.id = 75
    this.name = "Plus de cereales? (400)"
  }
}

module.exports = soixantequinze