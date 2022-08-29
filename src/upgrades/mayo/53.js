class cinquantetrois {

  constructor(profil) {
    this.data = {
      cost: "4563918244F40000",
      bonus: 5,
    }
    this.type = "pot"
    this.bonusType = "cps"
    this.effect = "x5 sur mayo"
    this.cond = profil.pot.number >= 100
    this.err = "Tu dois avoir au moins 100 mayo pour acheter cet object."
    this.id = 53
    this.name = "x5 sur mayo (100)"
  }
}

module.exports = cinquantetrois