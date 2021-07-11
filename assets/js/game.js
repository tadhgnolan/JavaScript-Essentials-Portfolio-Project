const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');
const ERROR_PAGE_ID = 12;

let state = {};

function startGame() {
    state = {};
    showTextNode(1);
}

function showTextNode(textNodeIndex) {
    let textNode;
    try {
        textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
        if (typeof textNode === 'undefined') {
            throw 'textNode not found'
        }
    } catch (error) {
        textNode = textNodes.find(textNode => textNode.id === ERROR_PAGE_ID);

    }

    textElement.innerText = textNode.text;
    document.getElementById("tile-img").src = textNode.image;
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button');
            button.innerText = option.text;
            button.classList.add('btn');
            button.addEventListener('click', () => selectOption(option));
            optionButtonsElement.appendChild(button);
        }
    });
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
    const nextTextNodeId = option.nextText;
    if (nextTextNodeId <= 0) {
        return startGame();
    }
    state = Object.assign(state, option.setState);
    showTextNode(nextTextNodeId);
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
        text: 'You exit the room containing the machine & enter a long corridor which curves to the left. In the middle of the corridor you find a matter exchange terminal.',
        options: [{
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
        }, ]
    },
    {
        id: 3,
        image: 'assets/images/sci_fi_staircase.jpg',
        text: 'You exit the hallway & climb a large staircase. At the top are 3 doors. One a plain red door, one a large door marked "Exit" & the last is  marked "Galley/Dining"',
        options: [{
                text: 'Open the red door',
                nextText: 4
            },
            {
                text: 'Open the exit',
                nextText: 5
            },
            {
                text: 'Enter the galley/dining area',
                nextText: 6
            }
        ]
    },
    {
        id: 4,
        image: 'assets/images/red_door.jpeg',
        text: 'You open the red door & are attacked by a rogue android. You are too weak to put up any kind of defense as it rains blows upon your head & you lose consciousness',
        options: [{
            text: 'Restart',
            nextText: -1
        }]
    },
    {
        id: 5,
        image: 'assets/images/space.jpeg',
        text: 'You press the button to open the door marked "Exit" & are sucked out through a malfunctioning airlock into the vacuum of space',
        options: [{
            text: 'Restart',
            nextText: -1
        }]
    },
    {
        id: 6,
        image: 'assets/images/minimal_kitchen.jpg',
        text: 'You enter the Galley & make your way to the cabinets. You find a box marked rations & consume one of the high nutrient bars inside. Strangely, you feel immediately rejuvinated. There must have been an extra ingredient in that bar. You decide to return to the hallway',
        options: [{
                text: 'Open the Red Door',
                nextText: 7
            },
            {
                text: 'Open the Exit',
                nextText: 5
            }
        ]
    },
    {
        id: 7,
        image: 'assets/images/android.png',
        text: 'You open the red door & dodge as a rogue android swings for your head.',
        options: [{
                text: 'Try to reason with it',
                nextText: 8
            },
            {
                text: 'Attack it with your rocket launcher',
                requiredState: (currentState) => currentState.rocketLauncher,
                nextText: 9
            },
            {
                text: 'Turn on your body shield',
                requiredState: (currentState) => currentState.bodyShield,
                nextText: 10
            },
            {
                text: 'Stun it with your pistol',
                requiredState: (currentState) => currentState.stunPistol,
                nextText: 11
            }
        ]
    },
    {
        id: 8,
        image: 'assets/images/red_door.jpeg',
        text: 'The android is not interested in compromise & pummels you into unconsciousness',
        options: [{
            text: 'Restart',
            nextText: -1
        }]
    },
    {
        id: 9,
        image: 'assets/images/red_door.jpeg',
        text: 'As the smoke clears you realise the rocket had no effect on the android',
        options: [{
            text: 'Restart',
            nextText: -1
        }]
    },
    {
        id: 10,
        image: 'assets/images/red_door.jpeg',
        text: 'The androids fists pass effortlessly through your body shield & knock you unconscious',
        options: [{
            text: 'Restart',
            nextText: -1
        }]
    },
    {
        id: 11,
        image: 'assets/images/ship_bridge.jpg',
        text: 'You shoot at the robot & it collapses. You are able to reset its protocols & it guides you around the ship. Gradually your memory comes back as the cryo-sleep fogginess wears off. You set off on your mission & look forward to new adventures',
        options: [{
            text: 'Congratulations. Play again.',
            nextText: -1
        }]
    },
    {
        id: 12,
        image: 'assets/images/fire.jpeg',
        text: 'We seem to be experiencing technical difficulties.',
        options: [{
            text: 'Please try again.',
            nextText: 1
        }]
    }



];

startGame();