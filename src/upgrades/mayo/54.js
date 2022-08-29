class cinquantequatre {

  constructor(profil) {
    this.data = {
      cost: "69E10DE76676D0800000",
      bonus: 0.5,
    }
    this.type = "pot"
    this.bonusType = "cost"
    this.effect = "Divise coût par 2 de mayo"
    this.cond = profil.pot.number >= 200
    this.err = "Tu dois avoir au moins 200 mayo pour acheter cet object."
    this.id = 54
    this.name = "Plus de mayo? (200)"
  }
}

module.exports = cinquantequatre