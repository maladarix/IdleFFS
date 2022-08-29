class cinquanteetun  {

  constructor(profil) {
    this.data = {
      cost: "5AF3107A4000",
      bonus: 2,
    }
    this.type = "pot"
    this.bonusType = "cps"
    this.effect = "x2 sur mayo"
    this.cond = profil.pot.number >= 10
    this.err = "Tu dois avoir au moins 10 mayo pour acheter cet object."
    this.id = 51
    this.name = "Double mayo (10)"
  }
}

module.exports = cinquanteetun