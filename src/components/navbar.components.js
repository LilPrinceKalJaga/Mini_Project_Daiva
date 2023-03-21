import Link from "next/link";

export function Navbar() {
  let i = Math.floor(Math.random() * 100);
  return (
    <nav className="flex items-center flex-wrap bg-green-300 p-3 flex-row">
      <ul className="flex">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li className="ml-4">
          <Link href="/product">Most Wanted Case</Link>
        </li>
        <li className="ml-4">
          <Link href="/List">Help Me</Link>
        </li>
        <li className="ml-4">
          <Link href="/ssr">Top List</Link>
        </li>
        <li className="ml-4">
          <Link href={`/product/${i}`}>Random Agent</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;