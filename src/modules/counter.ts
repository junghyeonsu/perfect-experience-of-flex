// 리덕스 공부

// 액션 타입들 선언
//TypeScript의 type을 의미하는게 아니라 리덕스 액션 안에 들어가게 될 type값 입니다.
// as const는 const assertions 라는 typescript 문법
// type이 string이 되지않고, 실제 값이 타입이 된다.
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

// 액션 생성 함수 선언
// 화살표 함수를 쓰면 return 을 생략할 수 있다.
// payload 라는 이름은 FSA 규칙을 따르기 위함. 전송되는 데이터 라는 의미를 가짐.
// 굳이 저걸로 안해줘도 되는데, 통일성을 높이기 위해서 사용!
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff,
});

// 액션 객체들에 대한 type 준비하기
// 이 type은 typescript의 type이다.
// ReturnType은 함수에서 반환하는 타입을 가져올 수 있게 해주는 유틸 타입이다.
// 전에 as const 작업을 해주지 않으면 string으로 처리가 된다.
// 그러면 나중에 리듀서를 제대로 구현 불가능
type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;

// 상태의 타입 선언하기
type CounterState = {
  count: number;
};

// 상태의 초깃값 선언하기
const initialState: CounterState = {
  count: 0,
};

// 리듀서 작성하기
function counter(state: CounterState = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

// 루트 리듀서에서 불러올 수 있게 만들어주면 모듈 완성
export default counter;
