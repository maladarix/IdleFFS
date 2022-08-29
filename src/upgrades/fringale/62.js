class soixantedeux {

  constructor(profil) {
    this.data = {
      cost: "75F610F70ED20000",
      bonus: 2,
    }
    this.type = "fringale"
    this.bonusType = "cps"
    this.effect = "x2 sur fringale"
    this.cond = profil.fringale.number >= 50
    this.err = "Tu dois avoir au moins 50 fringale pour acheter cet object."
    this.id = 62
    this.name = "Double fringale (50)"
  }
}

module.exports = soixantedeux