class cinquantedeux {

  constructor(profil) {
    this.data = {
      cost: "B1A2BC2EC50000",
      bonus: 2,
    }
    this.type = "pot"
    this.bonusType = "cps"
    this.effect = "x2 sur mayo"
    this.cond = profil.pot.number >= 50
    this.err = "Tu dois avoir au moins 50 mayo pour acheter cet object."
    this.id = 52
    this.name = "Double mayo (50)"
  }
}

module.exports = cinquantedeux