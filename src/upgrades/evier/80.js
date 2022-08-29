class quatreving {

  constructor(profil) {
    this.data = {
      cost: "11CB0A65614917C00CF99791BB0000000000",
      bonus: 0.5,
    }
    this.type = "evier"
    this.bonusType = "cost"
    this.effect = "Divise coût par 2 de evier"
    this.cond = profil.evier.number >= 400
    this.err = "Tu dois avoir au moins 400 evier pour acheter cet object."
    this.id = 80
    this.name = "Plus d'evier? (400)"
  }
}

module.exports = quatreving