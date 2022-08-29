class soixantedixhuit {

  constructor(profil) {
    this.data = {
      cost: "14839AB1A2409ECC00000",
      bonus: 5,
    }
    this.type = "evier"
    this.bonusType = "cps"
    this.effect = "x5 sur evier"
    this.cond = profil.evier.number >= 100
    this.err = "Tu dois avoir au moins 100 evier pour acheter cet object."
    this.id = 78
    this.name = "x5 sur evier (100)"
  }
}

module.exports = soixantedixhuit