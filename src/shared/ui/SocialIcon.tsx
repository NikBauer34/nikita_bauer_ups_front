import React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
export interface SocialIconProps
  extends React.InputHTMLAttributes<HTMLParagraphElement> {text: 'google'}
  const SocialIcon = React.forwardRef<HTMLParagraphElement, SocialIconProps>(
    ({ className, text, ...props }, ref) => {
      return (
        <>
         {text == 'google' && <div className=' w-full flex justify-center'>
			<div className={cn(className, "h-14 p-3.5 bg-white rounded-[15px] border border-[#e0e0e0] justify-start items-start gap-2.5 inline-flex justify-self-center")} {...props}>
  <div className="w-7 h-7 justify-center items-center flex">
    <div className="w-5 h-5 relative flex-col justify-start items-start flex" />
		<Image src={'/assets/icons/googl.svg'} alt='google' width={30} height={30} />
  </div>
</div>
</div>}
        </>
      )
    }
  )
  SocialIcon.displayName = "Input"
  
  export { SocialIcon }