
export const Types = {
  MORE: '@counter/MORE',
  LESS: '@counter/LESS',
  RESET: '@counter/RESET',
}

const INITIAL_STATE = {
  count: 0,
}

const counterReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case Types.MORE:
      return { ...state, count: state.count + 1 }
    case Types.LESS:
      return { ...state, count: state.count - 1 }
    case Types.RESET:
      return { ...INITIAL_STATE }
    default:
      return { ...state }
  }
}

export const Actions = {
  more: () => ({ type: Types.MORE }),
  less: () => ({ type: Types.LESS }),
  reset: () => ({ type: Types.RESET }),
}

export default counterReducer
