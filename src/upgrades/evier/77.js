class soixantedixsept {

  constructor(profil) {
    this.data = {
      cost: "34841B6057AFAB00000",
      bonus: 2,
    }
    this.type = "evier"
    this.bonusType = "cps"
    this.effect = "x2 sur evier"
    this.cond = profil.evier.number >= 50
    this.err = "Tu dois avoir au moins 50 evier pour acheter cet object."
    this.id = 77
    this.name = "Double evier (50)"
  }
}

module.exports = soixantedixsept