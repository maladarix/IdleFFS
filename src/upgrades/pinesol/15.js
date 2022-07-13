class quinze {

  constructor(profil) {
    this.data = {
      cost: 5500000000000000000000000000,
      bonus: 0.5,
    }
    this.type = "pine"
    this.bonusType = "cost"
    this.effect = "Divise coût par 2 de Pine sol"
    this.cond = profil.pine.number >= 400
    this.err = "Tu dois avoir au moins 400 Pine sol pour acheter cet object."
    this.id = 15
    this.name = "Encore plus de Pine sol?! (400)"
  }
}

module.exports = quinze