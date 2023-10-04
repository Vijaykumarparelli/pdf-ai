import { createSlice } from '@reduxjs/toolkit';
import { decodeToken } from '@utls/common';

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    getUserInfoByToken: (state, { payload }) => {
      let user = decodeToken(payload.token);
      return {
        token: payload.token,
        ...user,
      };
    },
  },
});

export const { getUserInfoByToken } = userSlice.actions;
export default userSlice.reducer;
