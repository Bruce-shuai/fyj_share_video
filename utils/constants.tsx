import { GiSunRadiations } from 'react-icons/gi';
import { GiCakeSlice } from 'react-icons/gi';
import { FaDog } from 'react-icons/fa';
import { MdOutlineSportsSoccer } from 'react-icons/md';
import { BiLaugh } from 'react-icons/bi';
import { CgGames } from 'react-icons/cg';
import { IoIosMusicalNote } from 'react-icons/io';
import { BsCupFill } from 'react-icons/bs';
import { MdFace } from 'react-icons/md';

export const topics = [
  {
    name: '热点',
    category: 'hot',
    icon: <GiSunRadiations />,
  },
  {
    name: '搞笑',
    category: 'funny',
    icon: <BiLaugh />,
  },
  {
    name: '科学',
    category: 'science',
    icon: <CgGames />,
  },
  {
    name: '美食',
    category: 'food',
    icon: <GiCakeSlice />,
  },
  {
    name: '音乐',
    category: 'music',
    icon: <IoIosMusicalNote />,
  },
  {
    name: '美妆',
    category: 'makeup',
    icon: <MdFace />,
  },
  {
    name: '动物',
    category: 'animal',
    icon: <FaDog />,
  },
  {
    name: '运动',
    category: 'sport',
    icon: <MdOutlineSportsSoccer />,
  },
  {
    name: '生活',
    category: 'life',
    icon: <BsCupFill />,
  },
];
