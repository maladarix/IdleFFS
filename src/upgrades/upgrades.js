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
const vingtetun = require('./cocomb/21')
const vingtdeux = require('./cocomb/22')
const vingttrois = require('./cocomb/23')
const vingtquatre = require('./cocomb/24')
const vingtcinq = require('./cocomb/25')
const vingtsix = require('./douchebag/26')
const vingtsept = require('./douchebag/27')
const vingthuit = require('./douchebag/28')
const vingtneuf = require('./douchebag/29')
const trente = require('./douchebag/30')
const trenteetun = require('./corolla/31')
const trentedeux = require('./corolla/32')
const trentetrois = require('./corolla/33')
const trentequatre = require('./corolla/34')
const trentecinq = require('./corolla/35')
const trentetsix = require('./bagarreur/36')
const trentetsept = require('./bagarreur/37')
const trentethuit = require('./bagarreur/38')
const trentetneuf = require('./bagarreur/39')
const quarante = require('./bagarreur/40')
const quaranteetun = require('./coureur/41')
const quarantedeux = require('./coureur/42')
const quarantetrois = require('./coureur/43')
const quarantequatre = require('./coureur/44')
const quarantecinq = require('./coureur/45')
const quarantesix = require('./rempart/46')
const quarantesept = require('./rempart/47')
const quarantehuit = require('./rempart/48')
const quaranteneuf = require('./rempart/49')
const cinquante = require('./rempart/50')
const cinquanteetun = require('./mayo/51')
const cinquantedeux = require('./mayo/52')
const cinquantetrois = require('./mayo/53')
const cinquantequatre = require('./mayo/54')
const cinquantecinq = require('./mayo/55')
const cinquantesix = require('./gwen/56')
const cinquantesept = require('./gwen/57')
const cinquantehuit = require('./gwen/58')
const cinquanteneuf = require('./gwen/59')
const soixante = require('./gwen/60')
const soixanteetun = require('./fringale/61')
const soixantedeux = require('./fringale/62')
const soixantetrois = require('./fringale/63')
const soixantequatre = require('./fringale/64')
const soixantecinq = require('./fringale/65')
const soixantesix = require('./remi/66')
const soixantesept = require('./remi/67')
const soixantehuit = require('./remi/68')
const soixanteneuf = require('./remi/69')
const soixantedix = require('./remi/70')
const soixanteetonze = require('./cereales/71')
const soixantedouze = require('./cereales/72')
const soixantetreize = require('./cereales/73')
const soixantequatorze = require('./cereales/74')
const soixantequinze = require('./cereales/75')
const soixanteseize = require('./evier/76')
const soixantedixsept = require('./evier/77')
const soixantedixhuit = require('./evier/78')
const soixantedixneuf = require('./evier/79')
const quatreving = require('./evier/80')
const quatrevingun = require('./penis/81')
const quatrevingdeux = require('./penis/82')
const quatrevingtrois = require('./penis/83')
const quatrevingquatre = require('./penis/84')
const quatrevingcinq = require('./penis/85')
const quatrevingsix = require('./bilou/86')
const quatrevingsept = require('./bilou/87')
const quatrevinghuit = require('./bilou/88')
const quatrevingneuf = require('./bilou/89')
const quatrevingdix = require('./bilou/90')


class upgrade{

  getAll(profil){
    return [this.getUn(profil), this.getDeux(profil), this.getTrois(profil), this.getQuatre(profil), this.getCinq(profil), this.getSix(profil), this.getSept(profil), this.getHuit(profil),
    this.getNeuf(profil), this.getDix(profil), this.getOnze(profil), this.getDouze(profil), this.getTreize(profil), this.getQuatorze(profil), this.getQuinze(profil), this.getSeize(profil), 
    this.getDixsept(profil), this.getDixhuit(profil), this.getDixneuf(profil), this.getVingt(profil), this.getVingtetun(profil), this.getVingtdeux(profil), this.getVingttrois(profil), 
    this.getVingtquatre(profil), this.getVingtcinq(profil), this.getVingtsix(profil), this.getVingtsept(profil), this.getVingthuit(profil), this.getVingtneuf(profil), this.getTrente(profil),
    this.getTrenteetun(profil), this.getTrentedeux(profil), this.getTrentetrois(profil), this.getTrentequatre(profil), this.getTrentecinq(profil), this.getTrentesix(profil), this.getTrentesept(profil),
    this.getTrentehuit(profil), this.getTrenteneuf(profil), this.getQuarante(profil), this.getQuaranteetun(profil), this.getQuarantedeux(profil), this.getQuarantetrois(profil), this.getQuarantequatre(profil),
    this.getQuarantecinq(profil), this.getQuarantesix(profil), this.getQuarantesept(profil), this.getQuarantehuit(profil), this.getQuaranteneuf(profil), this.getCinquante(profil),
    this.getCinquanteetun(profil), this.getCinquantedeux(profil), this.getCinquantetrois(profil), this.getCinquantequatre(profil), this.getCinquantecinq(profil), this.getCinquantesix(profil),
    this.getCinquantesept(profil), this.getCinquantehuit(profil), this.getCinquanteneuf(profil), this.getSoixante(profil), this.getSoixanteetun(profil), this.getSoixantedeux(profil),
    this.getSoixantetrois(profil), this.getSoixantequatre(profil), this.getSoixantecinq(profil), this.getSoixantesix(profil), this.getSoixantesept(profil), this.getSoixantehuit(profil),
    this.getSoixanteneuf(profil), this.getSoixantedix(profil), this.getSoixanteetonze(profil), this.getSoixantedouze(profil), this.getSoixantetreize(profil), this.getSoixantequatorze(profil),
    this.getSoixantequinze(profil), this.getSoixanteseize(profil), this.getSoixantedixsept(profil), this.getSoixantedixhuit(profil), this.getSoixantedixneuf(profil), this.getQuatreving(profil),
    this.getQuatrevingun(profil), this.getQuatrevingdeux(profil), this.getQuatrevingtrois(profil), this.getQuatrevingquatre(profil), this.getQuatrevingcinq(profil), this.getQuatrevingsix(profil),
    this.getQuatrevingsept(profil), this.getQuatrevinghuit(profil), this.getQuatrevingneuf(profil), this.getQuatrevingdix(profil)]
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

  getVingtetun(profil){
    return new vingtetun(profil)
  }

  getVingtdeux(profil){
    return new vingtdeux(profil)
  }

  getVingttrois(profil){
    return new vingttrois(profil)
  }

  getVingtquatre(profil){
    return new vingtquatre(profil)
  }

  getVingtcinq(profil){
    return new vingtcinq(profil)
  }

  getVingtsix(profil){
    return new vingtsix(profil)
  }

  getVingtsept(profil){
    return new vingtsept(profil)
  }

  getVingthuit(profil){
    return new vingthuit(profil)
  }

  getVingtneuf(profil){
    return new vingtneuf(profil)
  }

  getTrente(profil){
    return new trente(profil)
  }

  getTrenteetun(profil){
    return new trenteetun(profil)
  }

  getTrentedeux(profil){
    return new trentedeux(profil)
  }

  getTrentetrois(profil){
    return new trentetrois(profil)
  }

  getTrentequatre(profil){
    return new trentequatre(profil)
  }

  getTrentecinq(profil){
    return new trentecinq(profil)
  }

  getTrentesix(profil){
    return new trentetsix(profil)
  }

  getTrentesept(profil){
    return new trentetsept(profil)
  }

  getTrentehuit(profil){
    return new trentethuit(profil)
  }

  getTrenteneuf(profil){
    return new trentetneuf(profil)
  }

  getQuarante(profil){
    return new quarante(profil)
  }

  getQuaranteetun(profil){
    return new quaranteetun(profil)
  }

  getQuarantedeux(profil){
    return new quarantedeux(profil)
  }

  getQuarantetrois(profil){
    return new quarantetrois(profil)
  }

  getQuarantequatre(profil){
    return new quarantequatre(profil)
  }

  getQuarantecinq(profil){
    return new quarantecinq(profil)
  }

  getQuarantesix(profil){
    return new quarantesix(profil)
  }

  getQuarantesept(profil){
    return new quarantesept(profil)
  }

  getQuarantehuit(profil){
    return new quarantehuit(profil)
  }

  getQuaranteneuf(profil){
    return new quaranteneuf(profil)
  }

  getCinquante(profil){
    return new cinquante(profil)
  }

  getCinquanteetun(profil){
    return new cinquanteetun(profil)
  }

  getCinquantedeux(profil){
    return new cinquantedeux(profil)
  }

  getCinquantetrois(profil){
    return new cinquantetrois(profil)
  }

  getCinquantequatre(profil){
    return new cinquantequatre(profil)
  }

  getCinquantecinq(profil){
    return new cinquantecinq(profil)
  }

  getCinquantesix(profil){
    return new cinquantesix(profil)
  }

  getCinquantesept(profil){
    return new cinquantesept(profil)
  }

  getCinquantehuit(profil){
    return new cinquantehuit(profil)
  }

  getCinquanteneuf(profil){
    return new cinquanteneuf(profil)
  }

  getSoixante(profil){
    return new soixante(profil)
  }

  getSoixanteetun(profil){
    return new soixanteetun(profil)
  }

  getSoixantedeux(profil){
    return new soixantedeux(profil)
  }

  getSoixantetrois(profil){
    return new soixantetrois(profil)
  }

  getSoixantequatre(profil){
    return new soixantequatre(profil)
  }

  getSoixantecinq(profil){
    return new soixantecinq(profil)
  }

  getSoixantesix(profil){
    return new soixantesix(profil)
  }

  getSoixantesept(profil){
    return new soixantesept(profil)
  }

  getSoixantehuit(profil){
    return new soixantehuit(profil)
  }

  getSoixanteneuf(profil){
    return new soixanteneuf(profil)
  }

  getSoixantedix(profil){
    return new soixantedix(profil)
  }

  getSoixanteetonze(profil){
    return new soixanteetonze(profil)
  }

  getSoixantedouze(profil){
    return new soixantedouze(profil)
  }

  getSoixantetreize(profil){
    return new soixantetreize(profil)
  }

  getSoixantequatorze(profil){
    return new soixantequatorze(profil)
  }

  getSoixantequinze(profil){
    return new soixantequinze(profil)
  }

  getSoixanteseize(profil){
    return new soixanteseize(profil)
  }

  getSoixantedixsept(profil){
    return new soixantedixsept(profil)
  }

  getSoixantedixhuit(profil){
    return new soixantedixhuit(profil)
  }

  getSoixantedixneuf(profil){
    return new soixantedixneuf(profil)
  }

  getQuatreving(profil){
    return new quatreving(profil)
  }

  getQuatrevingun(profil){
    return new quatrevingun(profil)
  }

  getQuatrevingdeux(profil){
    return new quatrevingdeux(profil)
  }

  getQuatrevingtrois(profil){
    return new quatrevingtrois(profil)
  }

  getQuatrevingquatre(profil){
    return new quatrevingquatre(profil)
  }

  getQuatrevingcinq(profil){
    return new quatrevingcinq(profil)
  }

  getQuatrevingsix(profil){
    return new quatrevingsix(profil)
  }

  getQuatrevingsept(profil){
    return new quatrevingsept(profil)
  }

  getQuatrevinghuit(profil){
    return new quatrevinghuit(profil)
  }

  getQuatrevingneuf(profil){
    return new quatrevingneuf(profil)
  }

  getQuatrevingdix(profil){
    return new quatrevingdix(profil)
  }
}

module.exports = upgrade