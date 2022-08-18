class quarante {

  constructor(profil) {
    this.data = {
      cost: "5159ED8AB6661DA56FD080000000",
      bonus: 0.5,
    }
    this.type = "bagarreur"
    this.bonusType = "cost"
    this.effect = "Divise coût par 2 de Bagarreur"
    this.cond = profil.bagarreur.number >= 400
    this.err = "Tu dois avoir au moins 400 Bagarreur pour acheter cet object."
    this.id = 40
    this.name = "Encore plus de Bagarreur?! (400)"
  }
}

module.exports = quarante