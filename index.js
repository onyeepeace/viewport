const click = document.getElementById('click');
const boxInput = document.getElementById('url');
const source = document.querySelectorAll('iframe');

// options display for the iframe.
const view = document.getElementById('view');
const mobileView = document.getElementById('mobileView');
const tabletView = document.getElementById('tabletView');
const laptopView = document.getElementById('laptopView');
const desktopView = document.getElementById('desktopView');
const groupedView = document.getElementById('groupedView');

let screenshot = () => {
    for (let i = 0; i < source.length; i++) {
        source[i].src = boxInput.value;
    }
    boxInput.value = '';
}

click.addEventListener('click', function (e) {
    e.preventDefault();
    screenshot();
})

mobileView.style.display = 'none';
tabletView.style.display = 'none'
laptopView.style.display = 'none'
desktopView.style.display = 'none'
groupedView.style.display = 'none'

view.addEventListener('change', function (e) {
    e.preventDefault();
    (e.currentTarget.value === 'mobile') ? mobileView.style.display = 'block' : mobileView.style.display = 'none';
    (e.currentTarget.value === 'tablet') ? tabletView.style.display = 'block' : tabletView.style.display = 'none';
    (e.currentTarget.value === 'laptop') ? laptopView.style.display = 'block' : laptopView.style.display = 'none';
    (e.currentTarget.value === 'desktop') ? desktopView.style.display = 'block' : desktopView.style.display = 'none';
    (e.currentTarget.value === 'grouped') ? groupedView.style.display = 'block' : groupedView.style.display = 'none';
})