class un {

  constructor(profil) {
    this.data = {
      cost: 100,
      bonus: 2,
    }
    this.type = "snigger"
    this.bonusType = "cps"
    this.effect = "x2 sur les sniggers"
    this.cond = profil.snigger.number >= 10
    this.err = "Tu dois avoir au moins 10 sniggers pour acheter cet object."
    this.id = 1
    this.name = "Double Snigger"
  }
}

module.exports = un