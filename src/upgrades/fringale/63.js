class soixantetrois {

  constructor(profil) {
    this.data = {
      cost: "2E141EA081CA080000",
      bonus: 5,
    }
    this.type = "fringale"
    this.bonusType = "cps"
    this.effect = "x5 sur fringale"
    this.cond = profil.fringale.number >= 100
    this.err = "Tu dois avoir au moins 100 fringale pour acheter cet object."
    this.id = 63
    this.name = "x5 sur fringale (100)"
  }
}

module.exports = soixantetrois