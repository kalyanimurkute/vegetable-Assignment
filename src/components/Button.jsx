const BUTTON_VARIANTS = {
    primary: 'rounded-full bg-[#F39F9F] text-blacK hover:bg-[#FFC29B] transition-duration-200 cursor-pointer',
    secondary: 'rounded-full bg-[#B95E82] text-white  hover:bg-[#F39F9F] transition-duration-300 cursor-pointer',
    tertiary: 'rounded-full bg-transparent border-2 border-[#B95E82] text-[#B95E82] font-bold hover:bg-[#B95E82] hover:text-white transition-duration-400 cursor-pointer'
}

const BUTTON_SIZES = {
    small: 'text-sm py-1 px-3 m-3',
    medium: 'text-md py-2 px-6 m-2',
    large: 'text-lg py-3 px-8 m-1'
}

function Button({title, onclick, variant = 'primary', size = 'medium'}){
    return(
        <button onClick={onclick} className={`${BUTTON_VARIANTS[variant]} ${BUTTON_SIZES[size]}`}>
            {title}
        </button>
    )
}

export default Button;