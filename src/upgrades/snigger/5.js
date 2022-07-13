class cinq {

  constructor(profil) {
    this.data = {
      cost: 10000000000000000000000,
      bonus: 0.5,
    }
    this.type = "snigger"
    this.bonusType = "cost"
    this.effect = "Divise coût par 2 des Sniggers"
    this.cond = profil.snigger.number >= 400
    this.err = "Tu dois avoir au moins 400 sniggers pour acheter cet object."
    this.id = 5
    this.name = "Encore plus de Sniggers?!"
  }
}

module.exports = cinq