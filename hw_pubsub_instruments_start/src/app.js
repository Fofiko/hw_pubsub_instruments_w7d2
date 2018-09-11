const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const InstrumentInfoView = require('./views/instrument_info_view.js');


document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript Loaded');



  const instrumentsDataSource = new InstrumentFamilies();
  instrumentsDataSource.bindEvents();
});
