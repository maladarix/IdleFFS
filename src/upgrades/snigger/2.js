class deux {

  constructor(profil) {
    this.data = {
      cost: "989680",
      bonus: 2,
    }
    this.type = "snigger"
    this.bonusType = "cps"
    this.effect = "x2 sur les sniggers"
    this.cond = profil.snigger.number >= 50
    this.err = "Tu dois avoir au moins 50 sniggers pour acheter cet object."
    this.id = 2
    this.name = "Double Snigger (50)"
  }
}

module.exports = deux