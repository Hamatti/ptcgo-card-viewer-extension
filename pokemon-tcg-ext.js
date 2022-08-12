const PTCGO_CARD_PATTERN = new RegExp(/([A-Z-]{3,6} \d{1,3})/g)

browser.runtime.onMessage.addListener(message => {
    if (message.action === 'scanAndHighlight') {
        scanAndHighlight()
    }
})

function showImage(element) {
    const imageSrc = element.dataset.imageSrc;
    if (!imageSrc || imageSrc === 'n/a') {
        return;
    }

    const popUp = document.createElement('img');
    popUp.src = imageSrc;
    popUp.style = 'width: 200px; position: absolute; z-index: 999';

    element.appendChild(popUp)
}

function highlightCard(event) {
    const element = event.target
    const ptcgoCode = element.dataset?.ptcgo;
    const imageSrc = element.dataset?.imageSrc;
    if (ptcgoCode && !imageSrc) {
        browser.runtime.sendMessage({ action: 'download', ptcgoCode }).then(response => {
            if (response.status === 0) {
                element.dataset.imageSrc = response.image
                showImage(element)
            } else {
                element.dataset.imageSrc = "n/a"
            }
        });
    }
    if (imageSrc) {
        showImage(element)
    }
}

function hideCard(event) {
    const element = event.target;
    const image = element.querySelector('img');
    if(!image) {
        setTimeout(() => hideCard(event), 50)
    }
    element.removeChild(image)
}

function scanAndHighlight() {
    const location = window.location.href;
    let content = ''
    /* Youtube needs a special case, otherwise it'll clear the DOM */
    if(location.includes('youtube') || location.includes('youtu.be')) {
        content = document.querySelectorAll('.yt-formatted-string');
    } else {
        content =  document.querySelectorAll('div');
    }
  
    Object.values(content).forEach(node => {
        if (node.textContent.match(PTCGO_CARD_PATTERN)) {
            node.innerHTML = node.innerHTML.replaceAll(
                PTCGO_CARD_PATTERN,
                '<span class="pokemon-tcg-card" style="text-decoration: underline dashed red 3px;" data-ptcgo="$&">$&</span>')
        }
    })

    document.querySelectorAll('.pokemon-tcg-card').forEach(node => node.addEventListener('mouseenter', highlightCard));
    document.querySelectorAll('.pokemon-tcg-card').forEach(node => node.addEventListener('mouseleave', hideCard));

}

