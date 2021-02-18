const HOVER_CONTAINER = 'Cliker/HOVER_CONTAINER' as const;
const HOVER_ITEMBOX = 'Cliker/ITEMBOX' as const;

export const onHoverContainer = () => ({
  type: HOVER_CONTAINER,
});

export const onHoverItemBox = () => ({
  type: HOVER_ITEMBOX,
});

type ClikerActions =
  | ReturnType<typeof onHoverContainer>
  | ReturnType<typeof onHoverItemBox>;

type ClikerStates = {
  container: boolean;
  itembox: boolean;
};

const initialStates: ClikerStates = {
  container: false,
  itembox: false,
};

function Cliker(
  state: ClikerStates = initialStates,
  action: ClikerActions,
): ClikerStates {
  switch (action.type) {
    case HOVER_CONTAINER:
      return { container: true, itembox: false };

    case HOVER_ITEMBOX:
      return { container: false, itembox: true };

    default:
      return state;
  }
}

export default Cliker;
