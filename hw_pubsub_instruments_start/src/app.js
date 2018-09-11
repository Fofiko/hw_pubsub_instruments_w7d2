const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const InstrumentInfoView = require('./views/instrument_info_view.js');


document.addEventListener('DOMContentLoaded', function() {
  // console.log('JavaScript Loaded');
  const selectElement = document.querySelector('select#instrument-families-dropdown');
  const instrumentFamiliesDropdown = new SelectView(selectElement);
  instrumentFamiliesDropdown.bindEvents();

  const infoDiv = document.querySelector('div#animal-info')
  const instrumentInfoDisplay = new InstrumentInfoView(infoDiv);
  instrumentInfoDisplay.bindEvents();

  const instrumentsDataSource = new InstrumentFamilies();
  instrumentsDataSource.bindEvents();
});
