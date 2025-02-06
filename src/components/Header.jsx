// import { memo } from 'react';
// import { PersonalInfo } from '../utils/constants';

// // Header component for displaying personal information
// const Header = memo(function Header() {
//   return (
//     <header className="w-full max-w-2xl bg-gradient-to-r from-gray-800 to-gray-900 backdrop-blur-sm text-white p-6 rounded-b-lg shadow-lg mb-4 cursor-default">
//       <div className="flex flex-row items-center justify-start ">
//         <img src={'./assets/initial.png'} alt="J" className="w-24 h-24 shadow-lg" />
//         <h1 className="text-3xl font-bold tracking-tight pl-[-10]">{PersonalInfo.FullName.slice(1)}</h1>
//       </div>
//     </header>
//   );
// });

// export default Header;

import { memo } from 'react';
import { PersonalInfo } from '../utils/constants';

const Header = memo(function Header() {
  return (
    <header className="w-full max-w-2xl bg-gradient-to-r from-gray-800 to-gray-900 backdrop-blur-sm text-white py-2 rounded-b-lg shadow-lg mb-4 cursor-default">
      <div className="flex items-center justify-center">
        <img src={'./assets/initial.png'} alt="J" className="w-12 h:12 md:w-24 md:h-24" />
        <h1 className="font-bold tracking-tight -ml-1 md:text-3xl md:-ml-3">{PersonalInfo.FullName.slice(1)}</h1>
      </div>
    </header>
  );
});

export default Header;
