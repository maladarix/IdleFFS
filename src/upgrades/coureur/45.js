class quarantecinq {

  constructor(profil) {
    this.data = {
      cost: "4E93F3FD41A2A2742917F00000000",
      bonus: 0.5,
    }
    this.type = "coureur"
    this.bonusType = "cost"
    this.effect = "Divise coût par 2 de Coureur"
    this.cond = profil.coureur.number >= 400
    this.err = "Tu dois avoir au moins 400 Coureur pour acheter cet object."
    this.id = 45
    this.name = "Plus de Coureur? (400)"
  }
}

module.exports = quarantecinq