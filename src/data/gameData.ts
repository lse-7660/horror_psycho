// data/gameData.ts
export const gameData = {
    start: {
        description: 'You wake up in a mysterious forest. Which way will you go?',
        image: '/images/pattern/image.png',
        choices: [
            { text: 'Go left', next: 'left_path' },
            { text: 'Go right', next: 'right_path' },
        ],
    },
    left_path: {
        description: 'You encounter a river. What will you do?',
        image: '/images/pattern/image.png',
        choices: [
            { text: 'Swim across', next: 'swim_across' },
            { text: 'Build a raft', next: 'build_raft' },
        ],
    },
    right_path: {
        description: 'A bear blocks your path. How will you react?',
        image: '/images/pattern/image.png',
        choices: [
            { text: 'Run away', next: 'run_away' },
            { text: 'Climb a tree', next: 'climb_tree' },
        ],
    },
    // Add more paths and endings here
};
