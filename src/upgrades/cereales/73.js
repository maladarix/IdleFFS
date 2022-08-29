class soixantetreize {

  constructor(profil) {
    this.data = {
      cost: "1B87506A3E7B0D400000",
      bonus: 5,
    }
    this.type = "cereales"
    this.bonusType = "cps"
    this.effect = "x5 sur cereales"
    this.cond = profil.cereales.number >= 100
    this.err = "Tu dois avoir au moins 100 cereales pour acheter cet object."
    this.id = 73
    this.name = "x5 sur cereales (100)"
  }
}

module.exports = soixantetreize