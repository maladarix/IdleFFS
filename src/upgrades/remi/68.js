class soixantehuit {

  constructor(profil) {
    this.data = {
      cost: "2E141EA081CA080000",
      bonus: 5,
    }
    this.type = "remi"
    this.bonusType = "cps"
    this.effect = "x5 sur remi"
    this.cond = profil.remi.number >= 100
    this.err = "Tu dois avoir au moins 100 remi pour acheter cet object."
    this.id = 68
    this.name = "x5 sur remi (100)"
  }
}

module.exports = soixantehuit