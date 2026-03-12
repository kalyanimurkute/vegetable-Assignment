const BUTTON_VARIANTS = {
    primary: 'rounded-full bg-[#F39F9F] text-blacK hover:bg-[#FFC29B] cursor-pointer',
    secondary: 'rounded-full bg-[#B95E82] text-white  hover:bg-[#F39F9F] cursor-pointer',
    tertiary: 'rounded-full bg-transparent border-2 border-[#B95E82] text-[#B95E82]  hover:bg-[#B95E82] hover:text-white cursor-pointer'
}

const BUTTON_SIZES = {
    small: 'text-sm py-1 px-3',
    medium: 'text-md py-2 px-6',
    large: 'text-lg py-3 px-8'
}

function Button({title, onclick, variant = 'primary', size = 'medium'}){
    return(
        <button onClick={onclick} className={`${BUTTON_VARIANTS[variant]} ${BUTTON_SIZES[size]}`}>
            {title}
        </button>
    )
}

export default Button;