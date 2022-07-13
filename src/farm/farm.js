const snigger = require('./snigger')
const orange = require('./orangeglow')
const pine = require('./pinesol')
const Familys = require('./Familys')
const cocomb = require('./cocomb')
const douchebag = require('./un douchebag du dag')
const corolla = require('./corollamcdo')
const bagarreur = require('./bagarreur pas bagarreur')
const coureur = require('./Du courreur des bois')
const remparts = require('./Les remparts')
const potMayo = require('./Pot de mayo')
const gwen = require('./Gwen')
const fringale = require('./Une fringale fringante')
const remi = require('./rémi le rat')
const céréales = require('./des bonnes céréales protéinées a la vanille')
const évier = require('./lévier à pisse')
const penis = require('./LE penis')
const bilou = require('./dieux bilou')
const biscuit = require('./les biscuits chateau frontnac')
const carte = require('./carte inspire')

class Roles{
  
  getAll(){
    return [this.getSnigger(), this.getOrange(), this.getPine(), this.getFamily(), this.getCocomb(), this.getDouchebag(), this.getCorolla(), this.getBagarreur(), this.getCoureur(), this.getRemparts(),
    this.getMayo(), this.getGwen(), this.getFringale(), this.getRemi(), this.getCéréales(), this.getÉvier(), this.getPenis(), this.getBilou(), this.getBiscuit(), this.getCarte()]
  }
  getSnigger(){
    return new snigger()
  }

  getOrange(){
    return new orange()
  }

  getPine(){
    return new pine()
  }

  getFamily(){
    return new Familys()
  }

  getCocomb(){
    return new cocomb()
  }

  getDouchebag(){
    return new douchebag()
  }

  getCorolla(){
    return new corolla()
  }

  getBagarreur(){
    return new bagarreur()
  }

  getCoureur(){
    return new coureur()
  }

  getRemparts(){
    return new remparts()
  }

  getMayo(){
    return new potMayo()
  }

  getGwen(){
    return new gwen()
  }

  getFringale(){
    return new fringale()
  }

  getRemi(){
    return new remi()
  }

  getCéréales(){
    return new céréales()
  }

  getÉvier(){
    return new évier()
  }

  getPenis(){
    return new penis()
  }

  getBilou(){
    return new bilou()
  }

  getBiscuit(){
    return new biscuit()
  }

  getCarte(){
    return new carte()
  }
}

module.exports = Roles