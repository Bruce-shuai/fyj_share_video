import React, { useEffect } from 'react';
import useNewVideoStore from '../store/newVideoList';
import Link from 'next/link';
const Footer = () => {
  const { fetchVideoList, videoList } = useNewVideoStore();
  useEffect(() => {
    fetchVideoList();
  }, []);
  return (
    <div className="mt-6 hidden xl:block ml-3 text-white">
      <div>
        <h1>最新短视频发布</h1>
        <div className="mt-3 flex flex-col gap-1">
          {videoList.map((video: any) => (
            <Link href={`/profile/${video._id}`} key={video._id}>
              <div className="flex flex-row gap-2 text-gray-300 text-sm cursor-pointer">
                <span>{video.postedBy.userName}</span>
                <span>{video.caption}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <p className="text-gray-400 text-sm mt-5">2023 傅益佳 © 短视频分享~</p>
    </div>
  );
};

export default Footer;
