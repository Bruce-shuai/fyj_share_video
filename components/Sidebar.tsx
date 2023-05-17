import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import Image from 'next/image';
import SuggestedAccounts from './SuggestedAccounts';
import Footer from './Footer';
import useAuthStore from '../store/authStore';
import home from '../utils/icons/home.svg';

const Sidebar: NextPage = () => {
  const [showSidebar, setShowSidebar] = useState<Boolean>(true);
  const { pathname } = useRouter();
  const { fetchAllUsers, allUsers }: any = useAuthStore();

  const activeLink =
    'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold  rounded';

  const normalLink =
    'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold rounded';

  return (
    <div className="border-r-2 h-full">
      <div
        className="justify-center items-center xl:hidden m-2 ml-4 mt-3 text-xl pl-3 cursor-pointer "
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      {showSidebar && (
        <div className="xl:w-[320px] w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 ">
          <div className="xl:border-b-2 border-gray-200 xl:pb-4 text-black ">
            <Link href="/">
              <div className={pathname === '/' ? activeLink : normalLink}>
                <p className="text-2xl">
                  <Image src={home} alt="logo" width={38} height={38} />
                </p>
                <span className="capitalize text-xl hidden xl:block text-orange-300">
                  个人首页
                </span>
              </div>
            </Link>
          </div>

          <SuggestedAccounts
            fetchAllUsers={fetchAllUsers}
            allUsers={allUsers}
          />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
