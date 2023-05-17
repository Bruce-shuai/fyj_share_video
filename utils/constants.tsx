import Image from 'next/image';
// svg
import hot from './icons/hot.svg';
import funny from './icons/funny.svg';
import science from './icons/science.svg';
import food from './icons/food.svg';
import music from './icons/music.svg';
import makeup from './icons/makeup.svg';
import animal from './icons/animal.svg';
import sport from './icons/sport.svg';
import life from './icons/life.svg';

export const topics = [
  {
    name: '热点',
    category: 'hot',
    icon: <Image src={hot} alt="hot" width="18" height="18" />,
  },
  {
    name: '搞笑',
    category: 'funny',
    icon: <Image src={funny} alt="hot" width="18" height="18" />,
  },
  {
    name: '科学',
    category: 'science',
    icon: <Image src={science} alt="hot" width="18" height="18" />,
  },
  {
    name: '美食',
    category: 'food',
    icon: <Image src={food} alt="hot" width="18" height="18" />,
  },
  {
    name: '音乐',
    category: 'music',
    icon: <Image src={music} alt="hot" width="18" height="18" />,
  },
  {
    name: '美妆',
    category: 'makeup',
    icon: <Image src={makeup} alt="hot" width="18" height="18" />,
  },
  {
    name: '动物',
    category: 'animal',
    icon: <Image src={animal} alt="hot" width="18" height="18" />,
  },
  {
    name: '运动',
    category: 'sport',
    icon: <Image src={sport} alt="hot" width="18" height="18" />,
  },
  {
    name: '生活',
    category: 'life',
    icon: <Image src={life} alt="hot" width="18" height="18" />,
  },
];
