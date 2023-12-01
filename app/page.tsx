import { CarCard, CustomFilter, Hero, SearchBar } from "@/components"
import ShowMore from "@/components/ShowMore";
import { fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";

import { fetchCars } from "@/utils"

const Home = async ({ searchParams }: HomeProps) => {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || ""
  })
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main>
      <Hero />
      <div className="mt-20 px-10 md:px-20 py-5 w-full space-y-2" id="discover">
        <div>
          <h1 className="text-2xl font-bold">Car Catalogue</h1>
          <p className="text-lg font-medium">Explore the cars you might like</p>
        </div>
        <div className="md:flex flex-col md:flex-row md:justify-between md:space-x-2 max-sm:space-y-2">
          <SearchBar />
          <div className="flex-1 flex space-x-2 items-center">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        {
          isDataEmpty ? (
            <div>
              <h2 className="text-xl font-bold leading-5">Oops, no results</h2>
            </div>
          ) : (
            <section>
              <div className="md:grid md:grid-cols-3 gap-3">
                {allCars?.map((car,index) => (
                  <CarCard key={index} car={car} />
                ))}
              </div>
              <ShowMore pageNumber={(searchParams.limit || 10) / 10} isNext={(searchParams.limit || 10) < allCars.length} />
            </section>
          )
        }
      </div>
    </main>
  )
}

export default Home
