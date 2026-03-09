const PopupBox = ({
    children,
    stateFrame,
    setStateFrame,
    width = 90,
    height = 70,
    overlayClose = true,
    heightFull = false,
    overflowHidden = true,
    mxHeight = 90,
}) => {

    const handleCloseOverlay = () => {
        if(overlayClose){
            setStateFrame(false);
        }
    }

    return (
        <>
        <div
            className={`fixed inset-0 z-[10000000000000000000000] flex items-center justify-center transition-all ${
            stateFrame ? 'visible' : 'invisible'
            }`}
        >
            <div
            className={`fixed inset-0 bg-black/50 transition-opacity ${
                stateFrame ? 'visible opacity-100' : 'invisible opacity-0'
            }`}
            onClick={() => handleCloseOverlay()}
            />

            <div
            style={{ width: `${width}%`, minHeight: `${height}%`, maxHeight:`${mxHeight}%` }}
            className={`bg-white rounded-xl shadow-2xl min-w-[320px] min-h-[320px] ${ heightFull ? 'h-full' : ''} ${overflowHidden ? 'overflow-hidden' : 'overflow-y-auto'} transform transition-all  ${
                stateFrame ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
            }`}
            >
                {children}
            </div>
        </div>
        </>
    );
};

export default PopupBox;
