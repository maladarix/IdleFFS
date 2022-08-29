class quatrevingquatre {

  constructor(profil) {
    this.data = {
      cost: "1C012AFBEE1C536FDFBE0000000",
      bonus: 0.5,
    }
    this.type = "penis"
    this.bonusType = "cost"
    this.effect = "Divise coût par 2 de penis"
    this.cond = profil.penis.number >= 200
    this.err = "Tu dois avoir au moins 200 penis pour acheter cet object."
    this.id = 84
    this.name = "Plus de penis? (200)"
  }
}

module.exports = quatrevingquatre