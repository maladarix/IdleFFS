class soixantedix {

  constructor(profil) {
    this.data = {
      cost: "1EDB52710D2146960DE9A80C4000000000",
      bonus: 0.5,
    }
    this.type = "remi"
    this.bonusType = "cost"
    this.effect = "Divise coût par 2 de remi"
    this.cond = profil.remi.number >= 400
    this.err = "Tu dois avoir au moins 400 remi pour acheter cet object."
    this.id = 70
    this.name = "Plus de remi? (400)"
  }
}

module.exports = soixantedix