import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules';
import { useCallback } from 'react';
import { onHoverContainer, onHoverItemBox } from 'modules/Cliker';

export default function useContainerAlignItems(diff: string) {
  const ClikerStates = useSelector((state: RootState) => state.Cliker);
  const dispatch = useDispatch();

  const HoverContainer = useCallback(() => dispatch(onHoverContainer()), [
    dispatch,
  ]);

  const HoverItemBox = useCallback(() => dispatch(onHoverItemBox()), [
    dispatch,
  ]);

  return { ClikerStates, HoverContainer, HoverItemBox };
}
