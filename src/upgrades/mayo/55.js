class cinquantecinq {

  constructor(profil) {
    this.data = {
      cost: "3C2F7086AED236C807A1B5000000000",
      bonus: 0.5,
    }
    this.type = "pot"
    this.bonusType = "cost"
    this.effect = "Divise coût par 2 de mayo"
    this.cond = profil.pot.number >= 400
    this.err = "Tu dois avoir au moins 400 mayo pour acheter cet object."
    this.id = 55
    this.name = "Plus de mayo? (400)"
  }
}

module.exports = cinquantecinq