// app/components/Header.tsx
import Image from 'next/image';
import dots from '@/public/icons/div.svg';

const users = [
  { id: 1, name: 'Ava', imageUrl: '/images/profile.png' },
  { id: 2, name: 'Liam', imageUrl: '/images/avatart1.png' },
  { id: 3, name: 'Noah', imageUrl: '/images/avatar2.png' },
  { id: 4, name: 'Anas', imageUrl: '/images/avatar3.png' },
  { id: 5, name: 'Zara', imageUrl: '/images/avatar4.png' },
  { id: 6, name: 'Musa', imageUrl: '/images/avatar4.png' },
];

export default function Header() {
  const maxImages = 4;
  const maxNames = 3;

  const visibleUsers = users.slice(0, maxImages);
  const visibleNames = users.slice(0, maxNames);
  const extraNamesCount = users.length - maxNames;

  return (
    <div className="flex items-start justify-between px-6 py-4">
      <div>
        <h1 className="text-xl mb-4 font-bold flex items-center">
          Wallet Ledger{' '}
          <span className="ml-2 text-sm bg-gray-200 text-green-800 px-2 py-1 rounded-full flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-800"></div>
            Active
          </span>
        </h1>

        <div className="flex items-center gap-4">
          {/* User Avatars */}
          <div className="flex -space-x-2">
            {visibleUsers.map(({ id, imageUrl }) => (
              <Image
                key={id}
                src={imageUrl}
                alt="user avatar"
                width={32}
                height={32}
                className="rounded-full border-2 border-white"
              />
            ))}
          </div>

          {/* User Names */}
          <div className="flex text-sm text-gray-500 gap-2">
            {visibleNames.map(({ id, name }) => (
              <p key={id}>{name}</p>
            ))}
            {extraNamesCount > 0 && (
              <p className="text-gray-400">+{extraNamesCount} more</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="bg-[#4B8B9F] px-3 py-1 rounded-full font-semibold">Share</button>

        <div className="w-[36px] h-[36px] flex items-center justify-center bg-gray-200 rounded-full">
          <Image src={dots} alt="dots" width={24} height={24} className="w-[24px]" />
        </div>
      </div>
    </div>
  );
}
