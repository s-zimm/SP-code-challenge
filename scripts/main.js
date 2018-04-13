const $navSelect = $('[data-nav-select]');
const $menuDropdown = $('[data-nav-menu]');

$navSelect.on('click', (event) => {
    $(event.target).children().toggleClass('hidden dropdown-animation');
});