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
    },
    {
        id: 2,
        image: 'assets/images/sci_fi_corridor_curving_left.jpeg',
        text: 'You exit the room containing the machine & enter a long corridor which curves to the left. At the end of the corridor you find a matter exchange terminal.',
        options[{
            text: 'Exchange pistol for a rocket launcher',
            requiredState: (currentState) => currentState.stunPistol,
            setState: {
                stunPistol: false,
                rocketLauncher: true
            },
            nextText: 3,
        }, {
            text: 'Exchange pistol for a body shield',
            requiredState: (currentState) => currentState.stunPistol,
            setState: {
                stunPistol: false,
                bodyShield: true,
            },
            nextText: 3
        }, {
            text: 'Ignore the terminal',
            nextText: 3
        }]
    },

]

startGame()