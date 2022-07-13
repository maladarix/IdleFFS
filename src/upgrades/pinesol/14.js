class quatorze {

  constructor(profil) {
    this.data = {
      cost: 550000000000000,
      bonus: 0.5,
    }
    this.type = "pine"
    this.bonusType = "cost"
    this.effect = "Divise coût par 2 de Pine sol"
    this.cond = profil.pine.number >= 200
    this.err = "Tu dois avoir au moins 200 Pine sol pour acheter cet object."
    this.id = 14
    this.name = "Plus de Pine sol?"
  }
}

module.exports = quatorze