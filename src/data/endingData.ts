// app/data/endingData.ts

export type Ending = {
    description: string;
    image: string;
};

export const endingData: { [key: string]: Ending } = {
    ending1: {
        description: 'Ending 1: 새로운 보금자리',
        image: 'images/pattern/image.png',
    },
    ending2: {
        description: 'Ending 2: 충직한 제자',
        image: 'images/pattern/image.png',
    },
    ending3: {
        description: 'Ending 3: 집?',
        image: 'images/pattern/image.png',
    },
};
