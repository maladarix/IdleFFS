class neuf {

  constructor(profil) {
    this.data = {
      cost: "2D79883D2000",
      bonus: 0.5,
    }
    this.type = "orange"
    this.bonusType = "cost"
    this.effect = "Divise coût par 2 de Orange glo"
    this.cond = profil.orange.number >= 200
    this.err = "Tu dois avoir au moins 200 Orange glo pour acheter cet object."
    this.id = 9
    this.name = "Plus d'orange glo?"
  }
}

module.exports = neuf