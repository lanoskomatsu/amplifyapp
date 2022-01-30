import Link from "next/link";

function Home() {
  return (
    <div>
      Hello world.
      <br />
      <Link href="/about">About</Link>
    </div>
  );
}

export default Home;
