import Icon from "../../../common/Icon";

interface EditImageComponentProps {
    onClose: () => void; // Callback to close the child
}

const EditImageModal: React.FC<EditImageComponentProps> = ({ onClose }) => {
    return (
        <>
            <div aria-hidden="true" className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-50 backdrop-blur-sm">
                <div role="dialog" aria-modal="true" className="relative my-6 mx-auto max-w-3xl w-[920px] sm:w-[920px] md:w-[920px] lg:w-[1024px] xl:w-[1280px]">
                    {/*content*/}
                    <div className="border-0 shadow-lg relative flex flex-col w-full bg-color1 outline-none focus:outline-none">
                        <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-2/4">
                            <div className="flex sm:items-center justify-between py-3 border-b-2 border-color3">
                                <div className="flex items-center space-x-2">
                                    EDIT IMAGE
                                    <button onClick={onClose} type="button" className="inline-flex items-center justify-center rounded-lg border border-color3 h-10 w-10 transition duration-500 ease-in-out text-color3 hover:bg-color2 focus:outline-none">
                                        <Icon svgName="close-icon" className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
        </>
    );
}

export default EditImageModal