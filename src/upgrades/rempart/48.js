class quarantehuit {

  constructor(profil) {
    this.data = {
      cost: "340AAD21B3B70000",
      bonus: 5,
    }
    this.type = "remparts"
    this.bonusType = "cps"
    this.effect = "x5 sur remparts"
    this.cond = profil.remparts.number >= 100
    this.err = "Tu dois avoir au moins 100 remparts pour acheter cet object."
    this.id = 48
    this.name = "x5 sur remparts (100)"
  }
}

module.exports = quarantehuit