import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules';
import { useCallback } from 'react';
import { change } from 'modules/ItemBoxJustifyContent';

export default function useItemBoxJustifyContent(diff: string) {
  const ItemBoxJustifyContent = useSelector(
    (state: RootState) => state.ItemBoxJustifyContent.style,
  );
  const dispatch = useDispatch();

  const onChange = useCallback((diff) => dispatch(change(diff)), [
    dispatch,
    diff,
  ]);

  return { ItemBoxJustifyContent, onChange };
}
