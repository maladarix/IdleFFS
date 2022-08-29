class quaranteneuf {

  constructor(profil) {
    this.data = {
      cost: "7F0E10AF47C1C700000",
      bonus: 0.5,
    }
    this.type = "remparts"
    this.bonusType = "cost"
    this.effect = "Divise coût par 2 de remparts"
    this.cond = profil.remparts.number >= 200
    this.err = "Tu dois avoir au moins 200 remparts pour acheter cet object."
    this.id = 49
    this.name = "Plus de remparts? (200)"
  }
}

module.exports = quaranteneuf