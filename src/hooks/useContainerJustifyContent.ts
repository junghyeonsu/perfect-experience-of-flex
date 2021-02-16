import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules';
import { useCallback } from 'react';
import { change } from 'modules/ContainerJustifyContent';

export default function useContainerJustifyContent(diff: string) {
  const ContainerJustifyContent = useSelector(
    (state: RootState) => state.ContainerJustifyContent.style,
  );
  const dispatch = useDispatch();

  const onChange = useCallback((diff) => dispatch(change(diff)), [
    dispatch,
    diff,
  ]);

  return { ContainerJustifyContent, onChange };
}
