import HomeLogo from "@/components/home/HomeLogo";
import News from "@/components/home/News";
import Series from "@/components/home/Series";
import Stores from "@/components/home/Stores";
import { getLastSerie } from "@/helpers/RequestProducts";
import { getShopsHome } from "@/helpers/RequestShop";

const url = process.env.URL_API

export default async function Home() {
  const data = await getShopsHome()
  const serie = await getLastSerie()
  return (
    <>
      <div className="flex min-h-screen flex-col pt-24">
        <HomeLogo/>
      </div>
      <News/>
      <Series serie={serie} url={url}/>
      <Stores data={data} url={url}/>
    </>
  );
}
