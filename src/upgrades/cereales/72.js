class soixantedouze {

  constructor(profil) {
    this.data = {
      cost: "46791FC84E07D00000",
      bonus: 2,
    }
    this.type = "cereales"
    this.bonusType = "cps"
    this.effect = "x2 sur cereales"
    this.cond = profil.cereales.number >= 50
    this.err = "Tu dois avoir au moins 50 cereales pour acheter cet object."
    this.id = 72
    this.name = "Double cereales (50)"
  }
}

module.exports = soixantedouze