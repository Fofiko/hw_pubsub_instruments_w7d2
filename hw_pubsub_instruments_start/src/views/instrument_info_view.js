const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(container) {
  this.container = container;
};

InstrumentInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('InstrumentFamilies:selected-family-ready', (evt) => {
    const familyInfo = evt.detail;
    // console.log("familyInfo:", familyInfo);
    this.render(familyInfo);
  });
};

InstrumentInfoView.prototype.render = function(family){
  this.container.innerHTML = '';
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `${family.name}\r\n ${family.description}\r\n Instruments include: ${family.instruments}.`;
  // console.log("infoParagraph:", infoParagraph);
  this.container.appendChild(infoParagraph);
};



module.exports = InstrumentInfoView;
