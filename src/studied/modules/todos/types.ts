import { addTodo, toggleTodo, removeTodo } from 'studied/modules/todos/actions';

// 액션들의 타입스크립트 타입 준비
export type TodosAction =
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
export type TodosState = Todo[]; // Todo 타입으로 된 배열
