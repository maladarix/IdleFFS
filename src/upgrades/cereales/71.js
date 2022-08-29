class soixanteetonze  {

  constructor(profil) {
    this.data = {
      cost: "29A2241AF62C0000",
      bonus: 2,
    }
    this.type = "cereales"
    this.bonusType = "cps"
    this.effect = "x2 sur cereales"
    this.cond = profil.cereales.number >= 10
    this.err = "Tu dois avoir au moins 10 cereales pour acheter cet object."
    this.id = 71
    this.name = "Double cereales (10)"
  }
}

module.exports = soixanteetonze