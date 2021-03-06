import { Card } from '../interfaces/card.interfaces';
import { valorantLogo, rainbowLogo, overwatchLogo, csgoLogo, apexLogo, dutyLogo, fortniteLogo, analytical, reaction, speed, reactionTime, searchNumber, findImpostor, searchColor, colorText, captureColor, shapeChange, soundReaction, schulteTable, visualMemory, trafficLights, pressKey, targetShoot, longestLine, clickLimit, typingTest } from '../assets';

export const cards: Card[] = [
    {
        media: analytical,
        title: 'Analytical',
        text: 'Brain exercises'
    },
    {
        media: reaction,
        title: 'Reaction',
        text: 'Improve your reaction'
    },
    {
        media: speed,
        title: 'Speed',
        text: 'You will be faster'
    },
]

interface CardWithUrl extends Card{
    to: string
}

export const cardsExercisesLeader: CardWithUrl[] = [
    {
        media: reactionTime,
        title: 'Reaction Time',
        text: 'React as soon as possible to the color change',
        to: '/leaderboard/reaction-time'
    },
    {
        media: searchNumber,
        title: 'Search Number',
        text: 'According to the representation of the text',
        to: '/leaderboard/search-number'

    },
    {
        media: findImpostor,
        title: 'Find Impostor',
        text: 'Remove the boxes that do not match the others',
        to: '/leaderboard/find-impostor'

    },
    {
        media: searchColor,
        title: 'Search Color',
        text: 'According to the representation of the text',
        to: '/leaderboard/search-color'

    },
    {
        media: colorText,
        title: 'Color Text',
        text: 'Reaction when color matching text',
        to: '/leaderboard/color-text'

    },
    {
        media: captureColor,
        title: 'Capture Color',
        text: 'Capture the green color on the board',
        to: '/leaderboard/capture-color'

    },
    {
        media: shapeChange,
        title: 'Shape Change',
        text: 'React to shape change when they are the same',
        to: '/leaderboard/shape-change'

    },
    {
        media: soundReaction,
        title: 'Sound Reaction',
        text: 'React as fast as you can to the sound',
        to: '/leaderboard/sound-reaction'

    },
    {
        media: schulteTable,
        title: 'Schulte Table',
        text: 'Find the numbers in numerical order',
        to: '/leaderboard/schulte-table'

    },
    {
        media: visualMemory,
        title: 'Visual Memory',
        text: 'Memorize and click the orange boxes',
        to: '/leaderboard/visual-memory'

    },
    {
        media: trafficLights,
        title: 'Traffic Lights',
        text: 'React when the traffic light is green',
        to: '/leaderboard/traffic-lights'

    },
    {
        media: pressKey,
        title: 'Press Key',
        text: 'Press the key in the correct direction',
        to: '/leaderboard/press-key'

    },
    {
        media: targetShoot,
        title: 'Target Shoot',
        text: 'React as soon as possible to the color change',
        to: '/leaderboard/target-shoot'

    },
    {
        media: longestLine,
        title: 'Longest Line',
        text: 'Find and click on the longest line',
        to: '/leaderboard/longest-line'

    },
    {
        media: clickLimit,
        title: 'Click Limit',
        text: 'Reach the maximum number of clicks',
        to: '/leaderboard/click-limit'

    },
    {
        media: typingTest,
        title: 'Typing Test',
        text: 'Write a series of words as fast as you can',
        to: '/leaderboard/typing-test'

    },
]

export const cardsExercises: CardWithUrl[] = [
    {
        media: reactionTime,
        title: 'Reaction Time',
        text: 'React as soon as possible to the color change',
        to: '/exercise/reaction-time'
    },
    {
        media: searchNumber,
        title: 'Search Number',
        text: 'According to the representation of the text',
        to: '/exercise/search-number'

    },
    {
        media: findImpostor,
        title: 'Find Impostor',
        text: 'Remove the boxes that do not match the others',
        to: '/exercise/find-impostor'

    },
    {
        media: searchColor,
        title: 'Search Color',
        text: 'According to the representation of the text',
        to: '/exercise/search-color'

    },
    {
        media: colorText,
        title: 'Color Text',
        text: 'Reaction when color matching text',
        to: '/exercise/color-text'

    },
    {
        media: captureColor,
        title: 'Capture Color',
        text: 'Capture the green color on the board',
        to: '/exercise/capture-color'

    },
    {
        media: shapeChange,
        title: 'Shape Change',
        text: 'React to shape change when they are the same',
        to: '/exercise/shape-change'

    },
    {
        media: soundReaction,
        title: 'Sound Reaction',
        text: 'React as fast as you can to the sound',
        to: '/exercise/sound-reaction'

    },
    {
        media: schulteTable,
        title: 'Schulte Table',
        text: 'Find the numbers in numerical order',
        to: '/exercise/schulte-table'

    },
    {
        media: visualMemory,
        title: 'Visual Memory',
        text: 'Memorize and click the orange boxes',
        to: '/exercise/visual-memory'

    },
    {
        media: trafficLights,
        title: 'Traffic Lights',
        text: 'React when the traffic light is green',
        to: '/exercise/traffic-lights'

    },
    {
        media: pressKey,
        title: 'Press Key',
        text: 'Press the key in the correct direction',
        to: '/exercise/press-key'

    },
    {
        media: targetShoot,
        title: 'Target Shoot',
        text: 'React as soon as possible to the color change',
        to: '/exercise/target-shoot'

    },
    {
        media: longestLine,
        title: 'Longest Line',
        text: 'Find and click on the longest line',
        to: '/exercise/longest-line'

    },
    {
        media: clickLimit,
        title: 'Click Limit',
        text: 'Reach the maximum number of clicks',
        to: '/exercise/click-limit'

    },
    {
        media: typingTest,
        title: 'Typing Test',
        text: 'Write a series of words as fast as you can',
        to: '/exercise/typing-test'

    },
]

export const games: any[] = [
    {
        image: valorantLogo,
        name: 'Valorant',
    },
    {
        image: rainbowLogo,
        name: 'Rainbow Six',
    },
    {
        image: overwatchLogo,
        name: 'Overwatch',
    },
    {
        image: csgoLogo,
        name: 'CSGO',
    },
    {
        image: apexLogo,
        name: 'Apex',
    },
    {
        image: dutyLogo,
        name: 'Call of Duty',
    },
    {
        image: fortniteLogo,
        name: 'Fortnite',
    },

]

export const skills: string[] = [
    'flicking',
    'tracking',
    'switching',
    'strafe'
]