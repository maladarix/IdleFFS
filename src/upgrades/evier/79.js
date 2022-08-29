class soixantedixneuf {

  constructor(profil) {
    this.data = {
      cost: "1F4D4FEB4C33DA4E078000000",
      bonus: 0.5,
    }
    this.type = "evier"
    this.bonusType = "cost"
    this.effect = "Divise coût par 2 de evier"
    this.cond = profil.evier.number >= 200
    this.err = "Tu dois avoir au moins 200 evier pour acheter cet object."
    this.id = 79
    this.name = "Plus d'evier? (200)"
  }
}

module.exports = soixantedixneuf