import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/">
        <a>Go Back</a>
      </Link>
    </div>
  );
}
export default Home;
