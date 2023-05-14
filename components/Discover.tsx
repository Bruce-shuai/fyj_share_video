import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { topics } from '../utils/constants';

const Discover: NextPage = () => {
  const router = useRouter();
  const { topic } = router.query;

  const activeTopicStyle =
    'xl:border-2 hover:bg-primary xl:border-[#F51997] px-3 py-2 rounded xl:rounded-lg flex items-center gap-2 justify-center cursor-pointer text-[#F51997]';
  const topicStyle =
    'xl:border-2 hover:bg-primary hover:text-black xl:border-gray-300 px-3 py-2 rounded xl:rounded-lg flex items-center gap-2 justify-center cursor-pointer text-white';

  return (
    <div className="xl:border-b-2 xl:border-gray-200 py-6 pl-3 ">
      <div className="flex gap-3 flex-wrap">
        {topics?.map((item) => (
          <Link href={`/?topic=${item.category}`} key={item.name}>
            <div
              className={topic === item.name ? activeTopicStyle : topicStyle}
            >
              <span className="font-bold text-2xl xl:text-md ">
                {item.icon}
              </span>
              <span
                className={`font-medium text-md hidden xl:block capitalize`}
              >
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Discover;