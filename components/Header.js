import Link from "next/link";

export default function Header(props) {
  return (
    <header>
      <Link href="/">
        <div>Logo</div>
      </Link>
      <div>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About Me</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </header>
  );
}
