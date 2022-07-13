class quatre {

  constructor(profil) {
    this.data = {
      cost: "9184E72A000",
      bonus: 0.5,
    }
    this.type = "snigger"
    this.bonusType = "cost"
    this.effect = "Divise coût par 2 des Sniggers"
    this.cond = profil.snigger.number >= 200
    this.err = "Tu dois avoir au moins 200 sniggers pour acheter cet object."
    this.id = 4
    this.name = "Plus de Sniggers? (200)"
  }
}

module.exports = quatre