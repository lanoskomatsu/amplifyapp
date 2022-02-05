import Link from "next/link";

function Home() {
  return (
    <div>
      Hello world.
      <br />
      <Link href="/about">About</Link>
      <br />
      <Link href="/1">first</Link>
      <br />
      <Link href="/2">second</Link>
    </div>
  );
}

export default Home;
