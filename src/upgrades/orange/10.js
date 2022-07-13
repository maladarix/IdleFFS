class dix {

  constructor(profil) {
    this.data = {
      cost: "69E10DE76676D0800000",
      bonus: 0.5,
    }
    this.type = "orange"
    this.bonusType = "cost"
    this.effect = "Divise coût par 2 de Orange glo"
    this.cond = profil.orange.number >= 400
    this.err = "Tu dois avoir au moins 400 Orange glo pour acheter cet object."
    this.id = 10
    this.name = "Encore plus d'orange glo?! (400)"
  }
}

module.exports = dix