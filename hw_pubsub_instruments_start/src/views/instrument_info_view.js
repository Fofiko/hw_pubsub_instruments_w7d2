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

  // const infoParagraph = document.createElement('p');
  // infoParagraph.textContent = `${family.name}\r\n ${family.description}\r\n Instruments include: ${family.instruments}.`;
  // // console.log("infoParagraph:", infoParagraph);
  // this.container.appendChild(infoParagraph);

  const heading = this.createHeading(family);
  const bodyCopy = this.createBodyCopy(family);
  const instrument_list = this.createInstrumentList(family);

  this.container.appendChild(heading);
  this.container.appendChild(bodyCopy);
  this.container.appendChild(instrument_list);
};

InstrumentInfoView.prototype.createHeading = function (family) {
  const heading = document.createElement('h2');
  heading.textContent = family.name;
  return heading;
};

InstrumentInfoView.prototype.createBodyCopy = function (family) {
  const bodyCopy = document.createElement('p');
  bodyCopy.textContent = family.description;
  return bodyCopy;

};

InstrumentInfoView.prototype.createInstrumentList = function (family) {
  const instrument_list = document.createElement('ul');
  instrument_list.textContent = `Instruments include: ${family.instruments}`;
  return instrument_list;
};


module.exports = InstrumentInfoView;
