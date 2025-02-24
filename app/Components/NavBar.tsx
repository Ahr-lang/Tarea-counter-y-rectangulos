import Link from 'next/link';

const NavBar = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/color-changer">Color Changer</Link>
    </nav>
  );
};

export default NavBar;