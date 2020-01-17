import Link from 'next/link';

const Header = () => (
    <>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/about">
            <a>About Page</a>
        </Link>
        <Link href="/workhistory">
            <a>Work History</a>
        </Link>
    </>
)

export default Header