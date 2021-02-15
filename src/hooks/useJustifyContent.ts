import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { change } from 'modules/justifyContent';

export default function useJustifyContent(diff: string) {
  const dispatch = useDispatch();

  const onChange = useCallback(() => dispatch(change(diff)), [dispatch, diff]);

  return { onChange };
}
