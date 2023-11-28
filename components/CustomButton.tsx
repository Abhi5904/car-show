'use client'

import { CustomButtonProps } from "@/types"
import Image from "next/image"

const CustomButton = ({title,containerStyles,handleClick,btnType,textStyle,rightIcon}:CustomButtonProps) => {
  return (
    <button
    disabled={false}
    type={btnType || 'button'}
    className={`flex justify-between items-center ${containerStyles}`}
    onClick={handleClick}
    >
        <span className={`flex-1 ${textStyle}`}>
            {title}
        </span>
        {rightIcon && (
          <div className="relative w-10 h-10 right-3">
            <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
            />
          </div>
        )}
    </button>
  )
}

export default CustomButton
