import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules';
import { useCallback } from 'react';
import { change } from 'modules/ItemBoxAlignItems';

export default function useItemBoxAlignItems(diff: string) {
  const ItemBoxAlignItems = useSelector(
    (state: RootState) => state.ItemBoxAlignItems.style,
  );
  const dispatch = useDispatch();

  const onChange = useCallback((diff) => dispatch(change(diff)), [
    dispatch,
    diff,
  ]);

  return { ItemBoxAlignItems, onChange };
}
