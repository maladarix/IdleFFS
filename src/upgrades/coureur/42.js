class quarantedeux {

  constructor(profil) {
    this.data = {
      cost: "E7EBD06AF000",
      bonus: 2,
    }
    this.type = "coureur"
    this.bonusType = "cps"
    this.effect = "x2 sur Coureur des bois"
    this.cond = profil.coureur.number >= 50
    this.err = "Tu dois avoir au moins 50 Coureur des bois pour acheter cet object."
    this.id = 42
    this.name = "Double Coureur des bois (50)"
  }
}

module.exports = quarantedeux