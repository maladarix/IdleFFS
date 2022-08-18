class quaranteetun {

  constructor(profil) {
    this.data = {
      cost: "746A528800",
      bonus: 2,
    }
    this.type = "coureur"
    this.bonusType = "cps"
    this.effect = "x2 sur Coureur des bois"
    this.cond = profil.coureur.number >= 10
    this.err = "Tu dois avoir au moins 10 Coureur des bois pour acheter cet object."
    this.id = 41
    this.name = "Double Coureur des bois (10)"
  }
}

module.exports = quaranteetun