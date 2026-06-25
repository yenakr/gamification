export interface Question {
  id: string;
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

export interface PartData {
  id: number;
  title: string;
  studySlides: string[];
  preQuiz: Question[];
  postQuiz: Question[];
}

export interface RobotCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  parts: PartData[];
}

export const quizData: RobotCategory[] = [
  {
    id: 'excretion',
    name: '배설돌봄로봇',
    icon: '🚽',
    description: '배설 감지 및 자동 세정/건조를 통해 대상자의 위생과 자존감을 지켜줍니다.',
    parts: Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      title: `배설케어 Level ${i + 1}`,
      studySlides: [
        `배설돌봄로봇은 사용자 배설물이 감지되면 즉시 흡입하고, 온수로 깨끗하게 세정한 뒤, 따뜻한 바람으로 건조까지 자동으로 진행하는 로봇입니다.`,
        `주요 주의사항: 배설물의 누수를 막기 위해 밀착형 패드나 기저귀 컵을 사용자의 체형에 맞게 올바르게 밀착시켜야 피부 짓무름을 방지할 수 있습니다.`,
        `센서 관리: 배설 센서에 오염물질이 묻어 있으면 로봇이 잘못 감지하거나 작동하지 않을 수 있으므로 주기적인 세척과 렌즈 청소가 필수적입니다.`
      ],
      preQuiz: [
        {
          id: `excretion-p${i + 1}-pre-1`,
          question: '배설돌봄로봇의 주요 역할로 알맞은 것은 무엇일까요?',
          options: ['휠체어로 환자를 옮긴다', '스스로 밥을 먹여준다', '배설물을 감지하여 자동으로 세정 및 건조한다', '환자의 대화를 분석한다'],
          answerIndex: 2,
          explanation: '배설돌봄로봇은 감지 센서를 통해 배설물을 자동으로 처리(세정/건조)해 주는 로봇입니다.'
        }
      ],
      postQuiz: [
        {
          id: `excretion-p${i + 1}-post-1`,
          question: '배설돌봄로봇 사용 시 피부 짓무름을 예방하기 위해 가장 중요한 행동은?',
          options: ['물을 아주 뜨겁게 맞춘다', '신체 부위와 기저귀 컵을 올바르게 밀착시킨다', '로봇을 하루 종일 꺼둔다', '화장지를 많이 넣어둔다'],
          answerIndex: 1,
          explanation: '피부 밀착이 올바르지 않으면 배설물이 새거나 습기가 차 피부 손상을 입을 수 있습니다.'
        },
        {
          id: `excretion-p${i + 1}-post-2`,
          question: '배설 센서 오작동을 방지하기 위한 올바른 관리법은?',
          options: ['주기적으로 센서 부위를 청소하고 오염을 제거한다', '망가질 때까지 만지지 않는다', '소독약을 듬뿍 뿌려 젖은 채로 둔다', '센서를 청소 필터로 가려버린다'],
          answerIndex: 0,
          explanation: '센서 부위의 주기적인 세척과 물기 제거가 고장과 오작동을 예방하는 첫걸음입니다.'
        }
      ]
    }))
  },
  {
    id: 'meal',
    name: '식사돌봄로봇',
    icon: '🍱',
    description: '식사 시 숟가락과 젓가락질을 보조하거나, 로봇 팔로 음식을 떠서 입 앞까지 배달해줍니다.',
    parts: Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      title: `식사케어 Level ${i + 1}`,
      studySlides: [
        `식사돌봄로봇은 음식을 원하는 크기로 집거나 떠서 사용자의 입 위치에 맞춰 서빙하여 스스로 식사할 수 있도록 돕습니다.`,
        `주요 설정: 사용자의 입 높이와 도달 거리를 정확히 매핑하고 설정해야 음식을 흘리지 않고 입에 쏙 들어갑니다.`,
        `주의사항: 연하곤란(음식을 삼키기 힘든 증상)이 있는 사용자는 음식의 질감과 속도를 아주 천천히 조절해야 기도 흡인을 예방할 수 있습니다.`
      ],
      preQuiz: [
        {
          id: `meal-p${i + 1}-pre-1`,
          question: '식사돌봄로봇을 설정할 때 반드시 맞춰야 하는 신체 기준 위치는?',
          options: ['발가락 위치', '머리카락 길이', '입 높이와 도달 거리', '어깨 넓이'],
          answerIndex: 2,
          explanation: '숟가락이 정확한 입 위치에 도달하기 위해 입 높이와 목 각도를 매핑해야 합니다.'
        }
      ],
      postQuiz: [
        {
          id: `meal-p${i + 1}-post-1`,
          question: '음식을 삼키기 힘든 삼킴 장애(연하곤란) 환자에게 식사로봇을 적용할 때 주의할 점은?',
          options: ['속도를 최대한 빠르게 조절한다', '큰 덩어리 음식을 바로 제공한다', '환자의 삼킴 속도에 맞춰 음식 공급 속도를 늦추고 조절한다', '말을 계속 시키며 먹인다'],
          answerIndex: 2,
          explanation: '삼킴 장애가 있다면 천천히 삼킬 수 있도록 로봇 인터벌 속도를 알맞게 늘려 주어야 안전합니다.'
        },
        {
          id: `meal-p${i + 1}-post-2`,
          question: '식사돌봄로봇 사용 후 위생 관리를 위해 분리 세척해야 하는 부분은?',
          options: ['식기류 및 스푼/포크 보조 도구', '메인 로봇 전원 장치', '바닥 바퀴 휠', '음성 인식 센서 회로'],
          answerIndex: 0,
          explanation: '음식물이 직접 닿는 스푼, 포크 및 고정 식기는 매 식사 후 분리하여 위생적으로 세척해야 합니다.'
        }
      ]
    }))
  },
  {
    id: 'transfer',
    name: '이승돌봄로봇',
    icon: '♿',
    description: '침대에서 휠체어로, 혹은 휠체어에서 변기로 대상자를 안전하게 들어올려 이동을 돕습니다.',
    parts: Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      title: `이승케어 Level ${i + 1}`,
      studySlides: [
        `이승돌봄로봇은 무거운 대상자를 들어 올려 옮길 때 요양보호사의 근골격계 질환을 예방하고 낙상 위험을 크게 낮춰줍니다.`,
        `슬링(Sling) 장착: 환자 몸에 감싸는 시트(슬링)를 꼬임 없이 평평하고 대칭적으로 고정해야 들어 올릴 때 한쪽으로 쏠리지 않습니다.`,
        `이동 시 주의: 로봇으로 환자를 들어 올린 상태로 이동할 때는 바닥의 턱이나 선을 조심하고, 환자의 얼굴과 반응을 지속적으로 확인해야 합니다.`
      ],
      preQuiz: [
        {
          id: `transfer-p${i + 1}-pre-1`,
          question: '이승돌봄로봇을 사용하는 가장 큰 목적은 무엇일까요?',
          options: ['피부 보습 관리', '요양보호사 근골격계 질환 예방 및 안전한 환자 이동', '식사 보조', '환자의 수면 상태 감지'],
          answerIndex: 1,
          explanation: '이승로봇은 무거운 환자를 안전하게 들어 올려 보호자의 허리 부상을 방지합니다.'
        }
      ],
      postQuiz: [
        {
          id: `transfer-p${i + 1}-post-1`,
          question: '이승로봇 슬링(Sling) 시트를 착용시킬 때 올바른 방법은?',
          options: ['대충 한쪽으로 묶는다', '구겨진 상태 그대로 매단다', '좌우 대칭을 맞추고 주름이 없도록 편안히 감싼다', '환자의 목에만 감싼다'],
          answerIndex: 2,
          explanation: '슬링의 균형이 맞아야 낙상을 방지하고 환자가 쏠림 없이 편안함을 느낍니다.'
        },
        {
          id: `transfer-p${i + 1}-post-2`,
          question: '리프트로 환자를 공중에 들어 올린 채 이동할 때 요양보호사의 시선은?',
          options: ['천장만 바라본다', '스마트폰 화면을 본다', '이동 경로의 장애물과 환자의 안색/상태를 주시한다', '눈을 감고 운전한다'],
          answerIndex: 2,
          explanation: '이승 도중 낙상이나 환자 이상 반응(어지러움 등)이 있을 수 있으므로 항상 주의 깊게 관찰해야 합니다.'
        }
      ]
    }))
  },
  {
    id: 'posture',
    name: '자세변경돌봄로봇',
    icon: '🛌',
    description: '침대에 누워 있는 대상자의 자세를 주기적으로 바꾸어 욕창을 예방합니다.',
    parts: Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      title: `자세케어 Level ${i + 1}`,
      studySlides: [
        `자세변경돌봄로봇은 공기압 매트리스나 기계적 프레임을 이용해 누워 있는 환자의 몸을 부드럽게 좌우로 기울여 눕혀줍니다.`,
        `욕창 예방: 일반적으로 2시간마다 체위를 변경해 주어야 뼈가 돌출된 부위의 혈액 순환장애(욕창)를 막을 수 있습니다.`,
        `안전 센서: 자세를 변경하는 동안 침대 난간(사이드 레일)을 반드시 올리고, 신체 끼임이 일어나지 않는지 주시해야 합니다.`
      ],
      preQuiz: [
        {
          id: `posture-p${i + 1}-pre-1`,
          question: '자세변경돌봄로봇이 예방하고자 하는 대표적인 피부 질환은?',
          options: ['아토피', '여드름', '욕창', '무좀'],
          answerIndex: 2,
          explanation: '장시간 같은 자세로 누워 있으면 압박 부위에 혈액 순환이 안 되어 욕창이 생깁니다.'
        }
      ],
      postQuiz: [
        {
          id: `posture-p${i + 1}-post-1`,
          question: '자세변경 로봇 작동 중 환자의 낙상을 방지하기 위해 필수적으로 확인해야 할 시설물은?',
          options: ['침대 난간(사이드 레일) 설치 및 고정', '방 조명 밝기', '창문 개폐 상태', '이불의 색상'],
          answerIndex: 0,
          explanation: '몸이 기울어질 때 침대 밑으로 굴러떨어질 위험이 있으므로 항상 안전 난간이 올라가 있어야 합니다.'
        },
        {
          id: `posture-p${i + 1}-post-2`,
          question: '자세변경 로봇의 추천 작동 주기(체위변경 주기)는 보통 몇 시간 이내인가요?',
          options: ['10시간', '24시간', '2시간', '48시간'],
          answerIndex: 2,
          explanation: '욕창 예방을 위한 표준 체위 변경 권장 시간은 보통 2시간입니다.'
        }
      ]
    }))
  },
  {
    id: 'communication',
    name: '커뮤니케이션돌봄로봇',
    icon: '🤖',
    description: '말벗 기능, 인지 재활 게임, 복약 시간 알림을 통해 정서적 교감과 일상 관리를 수행합니다.',
    parts: Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      title: `정서소통 Level ${i + 1}`,
      studySlides: [
        `커뮤니케이션돌봄로봇은 대화 나누기, 노래 부르기, 복약 일정 알림 등 인지 기능 유지와 우울증 예방을 돕는 로봇입니다.`,
        `정서적 애착: 환자가 로봇을 실제 사람이나 반려동물처럼 느껴 애착을 형성하면 외로움이 경감됩니다.`,
        `개인정보와 카메라: 일부 로봇은 영상 통화나 안면 인식을 수행하므로, 사용자 정보가 유출되지 않도록 보안 설정을 잘 확인해야 합니다.`
      ],
      preQuiz: [
        {
          id: `communication-p${i + 1}-pre-1`,
          question: '커뮤니케이션돌봄로봇의 정서적 효과로 가장 알맞은 것은?',
          options: ['환자의 식사를 직접 떠먹여 준다', '환자의 신체 중심을 이승시켜 준다', '우울감 및 고독감 해소, 인지적 자극 제공', '옷을 자동으로 갈아입혀 준다'],
          answerIndex: 2,
          explanation: '커뮤니케이션 로봇은 감성 대화와 게임을 통해 정서적 지지와 뇌 자극을 줍니다.'
        }
      ],
      postQuiz: [
        {
          id: `communication-p${i + 1}-post-1`,
          question: '커뮤니케이션 로봇이 약 먹을 시간을 알려주는 유용한 기능의 이름은?',
          options: ['자동 조리 기능', '복약 알림 서비스', '자가 비행 모드', '도난 방지 시스템'],
          answerIndex: 1,
          explanation: '정기적인 복약이 필요한 고령층 대상자에게 알람을 주는 복약 알림 기능은 필수적입니다.'
        },
        {
          id: `communication-p${i + 1}-post-2`,
          question: '카메라와 마이크가 달린 커뮤니케이션 로봇 설치 시 사생활 보호를 위해 주의할 점은?',
          options: ['로봇에 옷을 여러 겹 입힌다', '네트워크 보안 비밀번호를 안전하게 설정한다', '로봇의 머리를 때린다', '하루 종일 선을 빼둔다'],
          answerIndex: 1,
          explanation: '안전한 네트워크 설정과 패스워드 관리를 통해 외부 해킹 및 사생활 침해를 방지해야 합니다.'
        }
      ]
    }))
  }
];
