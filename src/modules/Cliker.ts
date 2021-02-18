const CLICK_CONTAINER = 'Cliker/CLICK_CONTAINER' as const;
const CLICK_ITEMBOX = 'Cliker/CLICK_ITEMBOX' as const;

export const onClickContainer = () => ({
  type: CLICK_CONTAINER,
});

export const onClickItemBox = () => ({
  type: CLICK_ITEMBOX,
});

type ClikerActions =
  | ReturnType<typeof onClickContainer>
  | ReturnType<typeof onClickItemBox>;

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
    case CLICK_CONTAINER:
      return { container: true, itembox: false };

    case CLICK_ITEMBOX:
      return { container: false, itembox: true };

    default:
      return state;
  }
}

export default Cliker;
