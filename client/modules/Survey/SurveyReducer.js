// Import Actions
import { UPDATE_FIELD, SELECT_ROOM } from './SurveyActions';

// Initial State
const initialState = {
  fields: [
    {
      type: 'BasicField',
      name: 'Site ID',
    },
    {
      type: 'BasicField',
      name: 'Address',
    },
    {
      type: 'BasicField',
      name: 'Tenant',
    },
    {
      type: 'BasicField',
      name: 'Room',
    },
  ],
  rooms: {
    kitchen: {
      fields: [
        {
          type: 'BasicField',
          name: 'Square Footage',
        },
      ],
    },
  },
  selectedRoom: '',
};

const SurveyReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FIELD:
      return {
        ...state,
        answers: Object.assign(
          {},
          state.answers,
          { [action.fieldName]: action.value }
        ),
      };
    case SELECT_ROOM: {
      return Object.assign({}, state, { selectRoom: action.roomName })
    }
    default:
      return state;
  }
};

export default SurveyReducer;
