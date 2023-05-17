import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import logo from '../utils/icons/logo.svg';
import useAuthStore from '../store/authStore';
import { IUser } from '../types';
import { createOrGetUser } from '../utils';

const Navbar = () => {
  const [user, setUser] = useState<IUser | null>();
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();
  const { userProfile, addUser, removeUser } = useAuthStore();

  useEffect(() => {
    setUser(userProfile);
  }, [userProfile]);

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (searchValue) {
      router.push(`/search/${searchValue}`);
    }
  };
  const loaderProp = ({ src }: { src: string }) => {
    return src;
  };
  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-3 px-4">
      <Link href="/">
        <div className="w-[100px] md:w-[129px] md:h-[30px] h-[38px] -translate-y-6">
          <Image src={logo} alt="logo" width={80} height={80} />
        </div>
      </Link>

      <div className="relative hidden md:block">
        <form
          onSubmit={handleSearch}
          className="absolute md:static top-10 -left-20 "
        >
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="bg-primary p-3 md:text-md font-medium border-2 border-gray-300 focus:outline-none focus:border-2 focus:border-gray-400 w-[400px] md:w-[450px] rounded-full  md:top-0"
            placeholder="搜索更多视频~"
          />
          <button
            onClick={handleSearch}
            className="absolute md:right-5 right-6 top-4 border-l-2 border-gray-300 pl-4 text-2xl text-gray-400"
          >
            <BiSearch />
          </button>
        </form>
      </div>
      <div>
        {user ? (
          <div className="flex gap-5 md:gap-10 h-12">
            <Link href="/upload">
              <button className="border-2  md:px-4 text-md font-semibold flex items-center gap-2 rounded-md">
                <IoMdAdd className="text-xl" />{' '}
                <span className="hidden md:block">上传 </span>
              </button>
            </Link>
            {user?.image && (
              <Link href={`/profile/${user._id}`}>
                <div>
                  <Image
                    className="rounded-md cursor-pointer"
                    src={user.image}
                    alt="user"
                    width={45}
                    height={45}
                    loader={loaderProp}
                  />
                </div>
              </Link>
            )}
            <button
              type="button"
              className=" border-2 p-2 rounded-md cursor-pointer outline-none shadow-md"
              onClick={() => {
                googleLogout();
                removeUser();
              }}
            >
              <Image src="/logout.png" width={24} height={24} alt="logout" />
            </button>
          </div>
        ) : (
          <GoogleLogin
            onSuccess={(response) => createOrGetUser(response, addUser)}
            onError={() => console.log('Login Failed')}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
