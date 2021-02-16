import { combineReducers } from 'redux';

import JustifyContent from 'modules/JustifyContent';
import AlignItems from 'modules/AlignItems';

// 하나일때는 굳이 만들어줄 필요없지만 나중에 리듀서가 많아질 가능성을 열어둔다.
const rootReducer = combineReducers({
  JustifyContent,
  AlignItems,
});

export default rootReducer;

//RootState 라는 타입을 만들어서 내보내주어야 한다는 것 입니다.
//이 타입은 추후 우리가 컨테이너 컴포넌트를 만들게 될 때
//스토어에서 관리하고 있는 상태를 조회하기 위해서 useSelector를
//사용 할 때 필요로 합니다.
export type RootState = ReturnType<typeof rootReducer>;
