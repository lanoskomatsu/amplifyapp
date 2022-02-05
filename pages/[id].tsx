import { useRouter } from "next/router";

function Ids() {
  const router = useRouter();
  return <h1>ID: {router.query.id}</h1>
}

export default Ids;