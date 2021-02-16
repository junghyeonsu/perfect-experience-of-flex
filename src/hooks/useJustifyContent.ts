import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules';
import { useCallback } from 'react';
import { change } from 'modules/JustifyContent';

export default function useJustifyContent(diff: string) {
  const justifyContent = useSelector(
    (state: RootState) => state.JustifyContent.style,
  );
  const dispatch = useDispatch();

  const onChange = useCallback((diff) => dispatch(change(diff)), [
    dispatch,
    diff,
  ]);

  return { justifyContent, onChange };
}
