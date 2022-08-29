class quarantesept {

  constructor(profil) {
    this.data = {
      cost: "D529AE9E86000",
      bonus: 2,
    }
    this.type = "remparts"
    this.bonusType = "cps"
    this.effect = "x2 sur remparts"
    this.cond = profil.remparts.number >= 50
    this.err = "Tu dois avoir au moins 50 remparts pour acheter cet object."
    this.id = 47
    this.name = "Double remparts (50)"
  }
}

module.exports = quarantesept