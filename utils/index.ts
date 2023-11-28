import { FilterProps } from "@/types";

export async function fetchCars(filter: FilterProps) {
    const { manufacturer, year, limit, fuel, model } = filter
    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}&make=${manufacturer}&year=${year}&limit=${limit}&fuel_type=${fuel}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c5c8b21fabmsh06b20c1cdd728fbp100c45jsn220c9e5a353e',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
    })
    const result = await response.json()
    return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set(type, value)
    const path = `${window.location.pathname}?${searchParams.toString()}`
    return path
}