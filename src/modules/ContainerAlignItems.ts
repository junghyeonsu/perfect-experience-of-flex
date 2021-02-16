// 액션 타입 정의
const CHANGE = 'ContainerAlignItems/CHANGE' as const;

// 액션 함수 정의
export const change = (diff: string) => ({
  type: CHANGE,
  payload: diff,
});

// 액션 타입스크립트 타입 정의
type AlignItemsActions = ReturnType<typeof change>;

// 상태 타입스크립트 타입 정의
type AlignItemsStates = {
  style: string;
};

// 초기 상태 정의
const initialState: AlignItemsStates = {
  style: 'normal',
};

// 리듀서 정의
function ContainerAlignItems(
  state: AlignItemsStates = initialState,
  action: AlignItemsActions,
): AlignItemsStates {
  switch (action.type) {
    case CHANGE:
      return { style: action.payload };

    default:
      return state;
  }
}

export default ContainerAlignItems;
