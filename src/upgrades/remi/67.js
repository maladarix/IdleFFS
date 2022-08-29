class soixantesept {

  constructor(profil) {
    this.data = {
      cost: "5B12AEFAFA8040000",
      bonus: 2,
    }
    this.type = "remi"
    this.bonusType = "cps"
    this.effect = "x2 sur remi"
    this.cond = profil.remi.number >= 50
    this.err = "Tu dois avoir au moins 50 remi pour acheter cet object."
    this.id = 67
    this.name = "Double remi (50)"
  }
}

module.exports = soixantesept