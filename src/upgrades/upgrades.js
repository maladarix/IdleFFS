const un = require('./snigger/1')
const deux = require('./snigger/2')
const trois = require('./snigger/3')
const quatre = require('./snigger/4')
const cinq = require('./snigger/5')
const six = require('./orange/6')
const sept = require('./orange/7')
const huit = require('./orange/8')
const neuf = require('./orange/9')
const dix = require('./orange/10')
const onze = require('./pinesol/11')
const douze = require('./pinesol/12')
const treize = require('./pinesol/13')
const quatorze = require('./pinesol/14')
const quinze = require('./pinesol/15')
const seize = require('./familys/16')
const dixsept = require('./familys/17')
const dixhuit = require('./familys/18')
const dixneuf = require('./familys/19')
const vingt = require('./familys/20')

class upgrade{

  getAll(profil){
    return [this.getUn(profil), this.getDeux(profil), this.getTrois(profil), this.getQuatre(profil), this.getCinq(profil), this.getSix(profil), this.getSept(profil), this.getHuit(profil),
    this.getNeuf(profil), this.getDix(profil), this.getOnze(profil), this.getDouze(profil), this.getTreize(profil), this.getQuatorze(profil), this.getQuinze(profil), this.getSeize(profil), 
    this.getDixsept(profil), this.getDixhuit(profil), this.getDixneuf(profil), this.getVingt(profil)]
  }

  getUn(profil){
    return new un(profil)
  }

  getDeux(profil){
    return new deux(profil)
  }

  getTrois(profil){
    return new trois(profil)
  }

  getQuatre(profil){
    return new quatre(profil)
  }

  getCinq(profil){
    return new cinq(profil)
  }

  getSix(profil){
    return new six(profil)
  }

  getSept(profil){
    return new sept(profil)
  }

  getHuit(profil){
    return new huit(profil)
  }

  getNeuf(profil){
    return new neuf(profil)
  }

  getDix(profil){
    return new dix(profil)
  }

  getOnze(profil){
    return new onze(profil)
  }

  getDouze(profil){
    return new douze(profil)
  }

  getTreize(profil){
    return new treize(profil)
  }

  getQuatorze(profil){
    return new quatorze(profil)
  }

  getQuinze(profil){
    return new quinze(profil)
  }

  getSeize(profil){
    return new seize(profil)
  }

  getDixsept(profil){
    return new dixsept(profil)
  }

  getDixhuit(profil){
    return new dixhuit(profil)
  }

  getDixneuf(profil){
    return new dixneuf(profil)
  }

  getVingt(profil){
    return new vingt(profil)
  }
}

module.exports = upgrade