class soixanteseize  {

  constructor(profil) {
    this.data = {
      cost: "1A055690D9DB80000",
      bonus: 2,
    }
    this.type = "evier"
    this.bonusType = "cps"
    this.effect = "x2 sur evier"
    this.cond = profil.evier.number >= 10
    this.err = "Tu dois avoir au moins 10 evier pour acheter cet object."
    this.id = 76
    this.name = "Double evier (10)"
  }
}

module.exports = soixanteseize