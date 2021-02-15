// 액션 타입 생성
const CHANGE = 'justifyContent/CHANGE' as const;

// 액션 함수 생성
export const change = (diff: string) => ({
  type: CHANGE,
  payload: diff,
});

// 액션 타입스크립트 타입 생성
type JustifyContentActions = ReturnType<typeof change>;

// 상태 타입스크립트 타입 생성
type JustifyContentStates = {
  justifyContent: string;
};

// 초깃값 생성
const initialState: JustifyContentStates = {
  justifyContent: 'normal',
};

// 리듀서 생성
function justifyContent(
  state: JustifyContentStates = initialState,
  action: JustifyContentActions,
): JustifyContentStates {
  switch (action.type) {
    case CHANGE:
      return { justifyContent: action.payload };

    default:
      return state;
  }
}

export default justifyContent;
