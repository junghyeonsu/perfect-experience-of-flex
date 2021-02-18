import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules';
import { useCallback } from 'react';
import { onClickContainer, onClickItemBox } from 'modules/Cliker';

export default function useCliker() {
  const ClikerStates = useSelector((state: RootState) => state.Cliker);
  const dispatch = useDispatch();

  const ClickContainer = useCallback(() => dispatch(onClickContainer()), [
    dispatch,
  ]);

  const ClickItemBox = useCallback(() => dispatch(onClickItemBox()), [
    dispatch,
  ]);

  return { ClikerStates, ClickContainer, ClickItemBox };
}
