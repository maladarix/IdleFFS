class soixanteetun  {

  constructor(profil) {
    this.data = {
      cost: "3C6568F12E8000",
      bonus: 2,
    }
    this.type = "fringale"
    this.bonusType = "cps"
    this.effect = "x2 sur fringale"
    this.cond = profil.fringale.number >= 10
    this.err = "Tu dois avoir au moins 10 fringale pour acheter cet object."
    this.id = 61
    this.name = "Double fringale (10)"
  }
}

module.exports = soixanteetun