class soixantesix  {

  constructor(profil) {
    this.data = {
      cost: "17508F1956A8000",
      bonus: 2,
    }
    this.type = "remi"
    this.bonusType = "cps"
    this.effect = "x2 sur remi"
    this.cond = profil.remi.number >= 10
    this.err = "Tu dois avoir au moins 10 remi pour acheter cet object."
    this.id = 66
    this.name = "Double remi (10)"
  }
}

module.exports = soixantesix