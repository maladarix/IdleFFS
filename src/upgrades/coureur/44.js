class quarantequatre {

  constructor(profil) {
    this.data = {
      cost: "8A3C5BE1855E180000",
      bonus: 0.5,
    }
    this.type = "coureur"
    this.bonusType = "cost"
    this.effect = "Divise coût par 2 de Coureur"
    this.cond = profil.coureur.number >= 200
    this.err = "Tu dois avoir au moins 200 Coureur pour acheter cet object."
    this.id = 44
    this.name = "Plus de Coureur? (200)"
  }
}

module.exports = quarantequatre