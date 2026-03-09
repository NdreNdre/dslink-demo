import PopupFrame from "./PopupFrame";
import { IoIosWarning } from "react-icons/io";

const PopupConfirm = ({
    state,
    setState,
    buttonFunction,
    confirmMessage
}) => {
    return(
        <PopupFrame stateFrame={state} setStateFrame={setState} width={25} height={30}>
            <div className="rounded-xl p-6 w-full h-full flex flex-col justify-center">
                <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center space-x-2">
                    <IoIosWarning className="text-red-500 w-16 h-16"></IoIosWarning>
                    <span>{confirmMessage}</span>
                </h2>
                <p className="text-gray-600 mb-6">Are you sure you want to <span className="font-semibold underline">{confirmMessage}?</span> This action cannot be undone.</p>
                <div className="flex justify-end space-x-3">
                    <button
                        className="px-4 py-2 rounded-md text-gray-700 border border-gray-300 hover:bg-gray-100 transition"
                        onClick={() => setState(false)}
                    >
                        No
                    </button>
                    <button
                        className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition"
                        onClick={buttonFunction}
                    >
                        Yes!
                    </button>
                </div>
            </div>
        </PopupFrame>
    )
}

export default PopupConfirm;