const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    document.getElementById("tile-img").src = textNode.image
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [{
    id: 1,
    image: 'assets/images/machine.jpeg',
    text: 'You wake up in a strange room seated & strapped into a large machine. You remove a cable from your right arm and stand up unsteadily. You notice a stun pistol on a table to your left.',
    options: [{
            text: 'Take the stun pistol',
            setState: {
                stunPistol: true
            },
            nextText: 2
        },
        {
            text: 'Leave the stun pistol',
            nextText: 2
        }
    ]
}, ]

startGame()