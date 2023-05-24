import MainLanding from '@/Components/MainLanding';
import { currentUser } from '@clerk/nextjs';


export default async function Home() {
  const user = await currentUser();

  return (
    <div>
      <MainLanding />
    </div>
  )
}
