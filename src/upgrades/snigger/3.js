class trois {

  constructor(profil) {
    this.data = {
      cost: "5F5E100",
      bonus: 5,
    }
    this.type = "snigger"
    this.bonusType = "cps"
    this.effect = "x5 sur les sniggers"
    this.cond = profil.snigger.number >= 100
    this.err = "Tu dois avoir au moins 100 sniggers pour acheter cet object."
    this.id = 3
    this.name = "x5 sur Snigger"
  }
}

module.exports = trois