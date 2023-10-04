import { createSlice } from '@reduxjs/toolkit';
import { startLoading, stopLoader } from './loading.slice';
import { chats_list, files_list } from '@utls/dummy';

const docsNchatsSlice = createSlice({
  name: 'docs_n_chats',
  initialState: {},
  reducers: {
    getDocList: (state, { payload }) => {
      return {
        ...state,
        docList: payload.docList,
      };
    },
    getChatList: (state, { payload }) => {
      return {
        ...state,
        chatList: payload.chatList,
      };
    },
  },
});
export const getAllDocs = () => (dispatch) => {
  dispatch(startLoading({ sectionLoader: true }));
  setTimeout(() => {
    dispatch(stopLoader());
    dispatch(getDocList({ docList: files_list }));
  }, 3000);
};
export const getAllChatList = () => (dispatch) => {
  dispatch(startLoading({ sectionLoader: true }));
  setTimeout(() => {
    dispatch(stopLoader());
    dispatch(getChatList({ chatList: chats_list }));
  }, 3000);
};
export const { getDocList, getChatList } = docsNchatsSlice.actions;
export default docsNchatsSlice.reducer;
