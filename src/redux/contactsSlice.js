import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(item) {
        return {
          payload: {
            id: nanoid(5),
            name: item.name,
            number: item.number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(item => item.id === action.payload);
      state.items.splice(index, 1);
    },
  },
});

//  export action generator
export const { addContact, deleteContact } = contactsSlice.actions;

// export reducer
export default contactsSlice.reducer;

// export selector
export const selectContacts = state => state.contacts.items;