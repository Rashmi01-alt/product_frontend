import Link from 'next/link';
import SearchBar from '../components/SearchBar';

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center bg-blue-600 text-white px-8 py-4 shadow-md h-16">
            {/* Left: Logo or Title */}
            <div>
                <Link href="/">
                    <h1 className="text-xl font-bold cursor-pointer">Product Catalog</h1>
                </Link>
            </div>

            {/* Right: Search Bar */}
            <div className="relative w-1/3">
                <SearchBar />
            </div>
        </nav>
    );
}
