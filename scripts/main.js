const $navSelect = $('[data-nav-select]');
const $menuDropdown = $('[data-nav-menu]');

$navSelect.on('click', (event) => {
    $navSelect.not(event.target)
        .children()
        .addClass('hidden')
        .removeClass('dropdown-animation');
    $(event.target).children()
        .toggleClass('hidden dropdown-animation');
});