import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules';
import { useCallback } from 'react';
import { change } from 'modules/AlignItems';

export default function useAlignItems(diff: string) {
  const alignItems = useSelector((state: RootState) => state.AlignItems.style);
  const dispatch = useDispatch();

  const onChange = useCallback((diff) => dispatch(change(diff)), [
    dispatch,
    diff,
  ]);

  return { alignItems, onChange };
}
