const ButtonSoft = ({
    children,
    color = 'blue',
    buttonFunction,
    fullWidth = false,
    disable = false // default is not full width
}) => {
    const colorMap = {
        blue: {
            bg: 'bg-blue-500',
            hoverBg: 'hover:bg-blue-700',
            text: 'text-white',
            border: 'border-b-4 border-blue-700 hover:border-blue-800',
            cursor:'cursor-pointer',
        },
        green: {
            bg: 'bg-green-500',
            hoverBg: 'hover:bg-green-700',
            text: 'text-white',
            border: 'border-b-4 border-green-700 hover:border-green-800',
            cursor:'cursor-pointer',
        },
        red: {
            bg: 'bg-red-500',
            hoverBg: 'hover:bg-red-700',
            text: 'text-white',
            border: 'border-b-4 border-red-700 hover:border-red-800',
            cursor:'cursor-pointer',
        },
        orange: {
            bg: 'bg-orange-500',
            hoverBg: 'hover:bg-orange-700',
            text: 'text-white',
            border: 'border-b-4 border-orange-700 hover:border-orange-800',
            cursor:'cursor-pointer', 
        },
        yellow: {
            bg: 'bg-yellow-500',
            hoverBg: 'hover:bg-yellow-700',
            text: 'text-white',
            border: 'border-b-4 border-yellow-700 hover:border-yellow-800',
            cursor:'cursor-pointer', 
        },
        black: {
            bg: 'bg-[#212121]',
            hoverBg: 'hover:bg-[#181818]',
            text: 'text-white',
            border: 'border-b-4 border-[#181818] hover:border-[#171717]',
            cursor:'cursor-pointer', 
        },
        sky: {
            bg: 'bg-sky-500',
            hoverBg: 'hover:bg-sky-700',
            text: 'text-white',
            border: 'border-b-4 border-sky-700 hover:border-sky-800',
            cursor:'cursor-pointer', 
        },
        gray: {
            bg: 'bg-gray-500',
            hoverBg: 'hover:bg-gray-700',
            text: 'text-white',
            border: 'border-b-4 border-gray-700 hover:border-gray-800',
            cursor:'cursor-pointer',
        },
        disable: {
            bg: 'bg-gray-300',
            cursor:'cursor-default',
            text: 'text-white',
            border: 'border-b-4 border-gray-700 hover:border-gray-800',
        }
        // Add more colors as needed
    };

    const { bg, hoverBg, text, border, cursor } = colorMap[color] || colorMap.blue;

    return (
        <button
            onClick={buttonFunction}
            className={`rounded-md p-2 shadow-md transition shadow-black/10 flex space-x-2 justify-center items-center ${cursor} ${text} ${bg} ${hoverBg} ${fullWidth ? 'w-full' : 'w-auto'}`}
            disabled={disable}
        >
            {children}
        </button>
    );
};

export default ButtonSoft;