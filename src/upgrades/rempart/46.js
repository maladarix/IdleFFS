class quarantesix {

  constructor(profil) {
    this.data = {
      cost: "746A5288000",
      bonus: 2,
    }
    this.type = "remparts"
    this.bonusType = "cps"
    this.effect = "x2 sur remparts"
    this.cond = profil.remparts.number >= 10
    this.err = "Tu dois avoir au moins 10 remparts pour acheter cet object."
    this.id = 46
    this.name = "Double remparts (10)"
  }
}

module.exports = quarantesix