// app/data/gameData.ts

type Choice = {
    text: string;
    next: string;
    required?: boolean;
};

type GameNode = {
    script?: string;
    description?: string;
    image: string;
    choices: Choice[];
};

type GameData = {
    [key: string]: GameNode;
};

export const gameData: GameData = {
    // 시작
    start: {
        script: '머리가 깨질 듯이 아프다. 밖에 너무 오래 있었나... 빨리 쵸미시로 돌아가야 한다. 차도 다니지 않고... 누구에게 연락해야 하지?',
        image: 'images/pattern/image.png',
        choices: [
            {
                text: '세리자와에게 전화한다',
                next: 'call_Serizawa',
            },
            { text: '모브에게 전화한다', next: 'call_Mob' },
        ],
    },
    call_Serizawa: {
        script: '...전화를 받지 않는다. 뭐, 늦은 시간이니까... 묵을 곳이라도 찾아볼까.',
        image: 'images/pattern/image.png',
        choices: [
            {
                text: 'Click to proceed',
                next: 'ababdoned_house',
            },
        ],
    },
    call_Mob: {
        script: '...전화를 받지 않는다. 뭐, 늦은 시간이니까... 묵을 곳이라도 찾아볼까.',
        image: 'images/pattern/image.png',
        choices: [
            {
                text: 'Click to proceed',
                next: 'ababdoned_house',
            },
        ],
    },
    ababdoned_house: {
        description:
            '숲 속을 헤매다 허름한 폐가를 발견했다.',
        script: '폐가인가... 아무래도 좀 꺼림칙한데.',
        image: 'images/pattern/image.png',
        choices: [
            {
                text: '조금 더 둘러보자.',
                next: 'look_around',
            },
            {
                text: '너무 피곤한데... 그냥 여기서 눈 좀 붙이자.',
                next: 'fall_asleep',
            },
        ],
    },
    look_around: {
        script: '창고? 혹시 모르니 살펴볼까.',
        image: 'images/pattern/image.png',
        choices: [
            {
                text: 'Click to proceed',
                next: 'warehouse',
            },
        ],
    },
    warehouse: {
        script: '지갑, 손수건, 핸드폰...? 뭐야 이건. 이런 걸 왜 창고에 보관하지.',
        image: 'images/pattern/image.png',
        choices: [
            {
                text: 'Click to proceed',
                next: 'look_around_again',
            },
        ],
    },
    look_around_again: {
        script: '더 둘러봐도 이 주변엔 이 폐가밖에 없네... 어쩔 수 없지. 잠깐 눈 붙이는 건데 뭐. ',
        image: 'images/pattern/image.png',
        choices: [
            {
                text: 'Click to proceed',
                next: 'fall_asleep',
            },
        ],
    },
    fall_asleep: {
        description:
            '피곤한 탓에 레이겐은 눕자마자 잠에 빠진다.',
        image: 'images/pattern/image.png',
        choices: [
            {
                text: 'Click to proceed',
                next: 'step_sound',
            },
        ],
    },

    // 모브 발소리
    step_sound: {
        description:
            '가까워지는 발소리에 레이겐이 눈을 뜬다. 그리고, 웅얼거리는 목소리. 이 목소리는...',
        script: '...스승님.',
        image: 'images/pattern/image.png',
        choices: [
            {
                text: '"...모브?"',
                next: 'answer_to_mob',
            },
            {
                text: '...?',
                next: 'donot_answer',
            },
        ],
    },

    // 대답한다
    answer_to_mob: {
        description:
            '몸을 일으켜 밖으로 나가보니 모브가 서 있다. 모브는 레이겐을 바라보며 따라오라는 듯 손을 내민다.',
        script: '뭐야, 모브. 깜짝 놀랐잖아. 휴, 다행이다. 여기서 자다가 입 돌아갈 뻔 했네.',
        image: 'images/pattern/image.png',
        choices: [
            {
                text: '"고맙다. 그런데 돌아가는 길은 알고 있어?"',
                next: 'follow_Mob',
            },
            {
                text: '"그런데 너, 시간이 몇 시인데 교복 차림이야?"',
                next: 'doubt_Mob',
            },
        ],
    },
    follow_Mob: {
        description:
            '모브는 말 없이 앞서 걷기 시작한다. 레이겐은 서둘러 모브를 따라간다.',
        image: 'images/pattern/image.png',
        choices: [
            {
                text: 'Click to Proceed',
                next: 'dark_wood',
            },
        ],
    },
    dark_wood: {
        description:
            '모브를 따라가자, 어쩐지 점점 어두운 숲으로 이어진다.',
        image: 'images/pattern/image.png',
        choices: [
            {
                text: '"같이 좀 가자, 모브. 힘들다고."',
                next: 'keep_following',
            },
            {
                text: '"너 진짜 길 알고 있는 거 맞아?"',
                next: 'stop_following',
            },
        ],
    },
    stop_following: {
        description:
            '뒤돌아 레이겐을 노려보던 모브가 레이겐의 손목을 꽉 쥐고 계속 걷는다. ',
        script: '윽...!',
        image: 'images/pattern/image.png',
        choices: [
            {
                text: '갑자기 불러서 화난 건가...?',
                next: 'keep_following_again',
            },
            {
                text: '... 모브가 이상하다.',
                next: 'doubt_Mob_2',
            },
        ],
    },
    keep_following_again: {
        description:
            '손목의 통증을 참으며 모브를 따라간다. 한참 말 없이 걷던 모브가 갑자기 우뚝 멈춰선다. ',
        script: '모브...?',
        image: 'images/pattern/image.png',
        choices: [
            {
                text: 'Click to proceed',
                next: 'desination',
            },
        ],
    },
    desination: {
        description: '모브가 레이겐을 돌아보며 미소짓는다.',
        script: '"도착했어요. 이제 여기서 벗어날 수 없어요, 스승님."',
        image: 'images/pattern/image.png',
        choices: [
            {
                text: 'Click to proceed',
                next: 'desination',
            },
        ],
    },
    keep_following: {
        description:
            '달빛 한 줄기 비치지 않는 곳에 도착한다. 한참 말 없이 걷던 모브가 갑자기 우뚝 멈춰선다.',
        script: '모브...?',
        image: 'images/pattern/image.png',
        choices: [
            {
                text: 'Ending',
                next: 'ending1',
            },
        ],
    },
    doubt_Mob_2: {
        description:
            '의심스럽다는 생각이 들자 모브의 눈빛이 바뀐다.',
        script: '이건 모브가 아냐... 도망쳐야해!',
        image: 'images/pattern/image.png',
        choices: [
            {
                text: 'Click to proceed',
                next: 'run_from_Mob',
            },
        ],
    },
    doubt_Mob: {
        description:
            '의심스럽다는 생각이 들자 모브의 눈빛이 바뀐다.',
        script: '이건 모브가 아냐... 도망쳐야해!',
        image: 'images/pattern/image.png',
        choices: [
            {
                text: 'Click to proceed',
                next: 'run_from_Mob',
            },
        ],
    },
    run_from_Mob: {
        description:
            '뒤돌아 달리기 시작하자, 모브가 뒤쫒아온다. ',
        image: 'images/pattern/image.png',
        choices: [
            {
                text: 'Click to proceed',
                next: 'no_sound_of_Mob',
            },
        ],
    },
    no_sound_of_Mob: {
        description:
            '숨이 턱 끝까지 차오른다. 어느새 쫒아오던 모브의 발소리가 들리지 않는다. ',
        image: 'images/pattern/image.png',
        choices: [
            {
                text: '더는 못 뛰겠어... 숨을 곳을 찾아야 해.',
                next: 'nowhere_to_go',
            },
            {
                text: '빠져나갈 길을 찾아야 해...!',
                next: 'find_road',
            },
        ],
    },
    nowhere_to_go: {
        description:
            '주위를 아무리 둘러봐도 숨을 곳이 없다. ',
        script: '이런 젠장...',
        image: 'images/pattern/image.png',
        choices: [
            {
                text: 'Click to proceed',
                next: 'Mob_behind',
            },
        ],
    },
    Mob_behind: {
        description: '등 뒤에서 느껴지는 냉기...',
        script: '찾았네요, 스승님. 같이 가요.',
        image: 'images/pattern/image.png',
        choices: [
            {
                text: 'Ending',
                next: 'ending2',
            },
        ],
    },
    find_road: {
        description:
            '정신없이 계속 달리자, 큰 길이 보인다. 마침 트럭 한 대가 지나간다.',
        image: 'images/pattern/image.png',
        choices: [
            {
                text: 'Click to proceed',
                next: 'back_to_home',
            },
        ],
    },
    back_to_home: {
        description:
            '트럭을 얻어 타고 쵸미시로 돌아왔다. 하지만 두통과 갈증이 멈추지 않는다.',
        image: 'images/pattern/image.png',
        choices: [
            {
                text: 'Ending',
                next: 'ending3',
            },
        ],
    },
    // 대답하지 않는다
    donot_answer: {
        description:
            '모브의 목소리다. 뛰쳐나가려던 레이겐은 수상한 점을 발견하고 멈춘다.',
        script: '...이렇게 늦은 시간에, 모브가 어떻게 여기에...?',
        image: 'images/pattern/image.png',
        choices: [
            {
                text: 'Click to proceed',
                next: 'gakuran',
            },
        ],
    },
    gakuran: {
        description: '모브의 목소리다.',
        script: '게다가 교복 차림... 수상해. 저건 모브가 아니야.',
        image: 'images/pattern/image.png',
        choices: [
            {
                text: '조용히 빠져나가자.',
                next: 'sneak_out',
            },
            {
                text: '저게 사라질 때까지 기다리자.',
                next: 'wait_til_gone',
            },
        ],
    },
    wait_til_gone: {
        description:
            '모브의 모습을 한 무언가가 사라질 때까지 조용히 기다리기로 한다. 하지만 그 때,',
        image: 'images/pattern/image.png',
        choices: [
            {
                text: 'Click to proceed',
                next: 'bell_ringing',
            },
        ],
    },
    bell_ringing: {
        description:
            '레이겐의 주머니 안에서 벨소리가 울린다. 황급히 소리를 꺼 보지만 이미... ',
        image: 'images/pattern/image.png',
        choices: [
            {
                text: 'Ending',
                next: 'ending2',
            },
        ],
    },
    // 뒷문으로 빠져나가기
    sneak_out: {
        description: '엉!',
        image: 'images/pattern/image.png',
        choices: [
            {
                text: 'Click to proceed',
                next: 'run_from_house',
            },
            {
                text: 'Click to proceed',
                next: 'run_from_house_required',
                required: true,
            },
            {
                text: 'Click to proceed',
                next: 'hide_in_warehouse',
                required: true,
            },
        ],
    },
    run_from_house: {
        description:
            '레이겐의 주머니 안에서 벨소리가 울린다. 황급히 소리를 꺼 보지만 이미... ',
        image: 'images/pattern/image.png',
        choices: [
            {
                text: 'Ending',
                next: 'ending2',
            },
        ],
    },
};
