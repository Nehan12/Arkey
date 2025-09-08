import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-3 transition-opacity duration-300 hover:opacity-80">
      {/* Logo Image */}
      <div className="relative z-10">
        <Image
          src="/logo.png"
          alt="Aarkey International Logo"
          width={48}
          height={48}
          className="w-12 h-12 drop-shadow-lg"
        />
      </div>
      
      {/* Company Name */}
      {/* <div className="flex flex-col">
        <span className="text-xl font-extrabold text-blue-600 leading-tight tracking-wide">
          AARKEY
        </span>
        <span className="text-xs font-medium text-gray-600 leading-tight">
          INTERNATIONAL
        </span>
      </div> */}
    </Link>
  );
} 