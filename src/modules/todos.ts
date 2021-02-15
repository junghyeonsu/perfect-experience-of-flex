// 액션 type 생성
const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
const REMOVE_TODO = 'todos/REMOVE_TODO' as const;

// 액션 생성 함수
export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: text,
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id,
});

// 액션들의 타입스크립트 타입 준비
type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof removeTodo>;

// 상태 타입 선언
// Todo 타입은 나중에 컴포넌트에서도 사용할거라서 내보내줌
export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

// 이번 모듈의 상태는 배열로 준비
type TodosState = Todo[]; // Todo 타입으로 된 배열

// 상태 초깃값 설정
// 초기값은 빈 배열이어도 상관없음
const initialState: TodosState = [
  {
    id: 1,
    text: '타입스크립트 배우기',
    done: false,
  },
  {
    id: 2,
    text: '타입스크립트와 리덕스 함께 사용해보기',
    done: false,
  },
  {
    id: 3,
    text: '투두리스트 만들기',
    done: false,
  },
];

// 리듀서 구현하기
function todos(
  state: TodosState = initialState,
  action: TodosAction,
): TodosState {
  switch (action.type) {
    case ADD_TODO:
      const nextId = Math.max(...state.map((todo) => todo.id)) + 1;
      return state.concat({
        id: nextId,
        text: action.payload,
        done: false,
      });

    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
      );

    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
}

// 루트 리듀서에서 사용할 수 있도록 export
export default todos;
