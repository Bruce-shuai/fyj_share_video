import create from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';

import { BASE_URL } from '../utils';

const newVideoStore = (set: any) => ({
  videoList: [],

  fetchVideoList: async () => {
    const response = await axios.get(`${BASE_URL}/api/post`);

    set({ videoList: response.data });
  },
});

const useNewVideoStore = create(
  persist(newVideoStore, {
    name: 'videoList',
  })
);

export default useNewVideoStore;
