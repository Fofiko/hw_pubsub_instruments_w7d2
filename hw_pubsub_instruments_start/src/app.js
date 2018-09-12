const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const InstrumentInfoView = require('./views/instrument_info_view.js');


document.addEventListener('DOMContentLoaded', function() {
  // console.log('JavaScript Loaded');

  //select view
  const selectElement = document.querySelector('#instrument-families');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  // //instrument family info view
  const infoDiv = document.querySelector('div#instrument-info')
  const instrumentInfoDisplay = new InstrumentInfoView(infoDiv);
  instrumentInfoDisplay.bindEvents();

  //instrument families
  const instrumentsDataSource = new InstrumentFamilies();
  instrumentsDataSource.bindEvents();
});
