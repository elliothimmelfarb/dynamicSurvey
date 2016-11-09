// Export Constants
export const UPDATE_FIELD = 'UPDATE_FIELD';
export const SELECT_ROOM = 'SELECT_ROOM';

// Export Actions
export const updateField = (fieldName, value) => ({
  fieldName,
  value,
  type: UPDATE_FIELD,
});

export const selectRoom = roomName => ({
  roomName,
  type: SELECT_ROOM,
});
