const $navSelect = $('[data-nav-select]');
const $menuDropdown = $('[data-nav-menu]');
const $tileContainer = $('div.tile-container, div.long-tile-container');

$navSelect.on('click', (event) => {
    $navSelect.not(event.target)
        .children()
        .addClass('hidden')
        .removeClass('dropdown-animation');
    $(event.target).children()
        .toggleClass('hidden dropdown-animation');
});

$tileContainer.hover(function() {
    let theLink = $(this).find('a');
    theLink.removeClass('naked');
}, function() {
    $(this).find('a').addClass('naked');
});