import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules';
import { useCallback } from 'react';
import { change } from 'modules/ContainerAlignItems';

export default function useAlignItems(diff: string) {
  const ContainerAlignItems = useSelector(
    (state: RootState) => state.ContainerAlignItems.style,
  );
  const dispatch = useDispatch();

  const onChange = useCallback((diff) => dispatch(change(diff)), [
    dispatch,
    diff,
  ]);

  return { ContainerAlignItems, onChange };
}
