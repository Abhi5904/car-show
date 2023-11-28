import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    btnType?: "button" | "submit";
    handleClick?: MouseEventHandler<HTMLButtonElement>
    textStyle?:string
    rightIcon?:string
    isDisabled?:boolean
}
export interface SearchBarManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
    city_mpg: number
    class: string
    combination_mpg: number
    cylinders: number
    displacement: number
    drive: string
    fuel_type: string
    highway_mpg: number
    make: string
    model: string
    transmission: string
    year: number
}

export interface CarDetailProps {
    car: CarProps,
    handleClsoeButton : ()=>void
    isOpen :boolean
}

export interface FilterProps{
    manufacturer:string,
    year:number,
    fuel:string,
    limit:number,
    model:string
}

export interface HomeProps{
    searchParams:FilterProps
}

export interface OptionProps{
    title:string,
    value:string
}

export interface CustomFilterProps{
    title:string,
    options:OptionProps[]
}