const $vehicleSelect = $('[data-nav-vehicle-select]');
const $vehicleMenuDropdown = $('[data-nav-vehicle-menu]');

$vehicleSelect.on('click', () => {
    $vehicleMenuDropdown.toggleClass('dropdown-translation')
})