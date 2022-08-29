class cinquanteneuf {

  constructor(profil) {
    this.data = {
      cost: "5CA4EC2A79A7F67000000",
      bonus: 0.5,
    }
    this.type = "gwen"
    this.bonusType = "cost"
    this.effect = "Divise coût par 2 de gwen"
    this.cond = profil.gwen.number >= 200
    this.err = "Tu dois avoir au moins 200 gwen pour acheter cet object."
    this.id = 59
    this.name = "Plus de gwen? (200)"
  }
}

module.exports = cinquanteneuf