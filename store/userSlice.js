import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    clips: [],
  },
  reducers: {
    addClip: (state, action) => {
      const newClip = action.payload;
      state.clips.push(newClip);
    },
    deleteClip: (state, action) => {
      const deleteClip = action.payload;
      const currentClip = state.clips;
      const filtteredClip = currentClip.filter(
        (clip) => clip.url !== deleteClip.url
      );
      state.clips = filtteredClip;
    },
  },
});

export const { addClip, deleteClip } = userSlice.actions;

export default userSlice.reducer;
