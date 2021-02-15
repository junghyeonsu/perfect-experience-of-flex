import { TodosState, TodosAction } from 'studied/modules/todos/types';
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
} from 'studied/modules/todos/actions';
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

export default todos;
