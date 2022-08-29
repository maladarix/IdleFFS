class soixanteneuf {

  constructor(profil) {
    this.data = {
      cost: "3648A260E3486A65A000000",
      bonus: 0.5,
    }
    this.type = "remi"
    this.bonusType = "cost"
    this.effect = "Divise coût par 2 de remi"
    this.cond = profil.remi.number >= 200
    this.err = "Tu dois avoir au moins 200 remi pour acheter cet object."
    this.id = 69
    this.name = "Plus de remi? (200)"
  }
}

module.exports = soixanteneuf