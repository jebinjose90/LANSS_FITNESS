import Icon from "../../../modules/common/Icon";
import ImageCropper from "../imageCrop/ImageCropper";


// Define the props type for the Modal component
interface ModalProps {
    updateAvatar: (dataUrl: string) => void;
    closeModal: () => void;
  }
  const Modal: React.FC<ModalProps> = ({ updateAvatar, closeModal }) => {
  return (
    <div
      className="relative z-10"
      aria-labelledby="crop-image-dialog"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-color2 bg-opacity-75 transition-all backdrop-blur-sm"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full justify-center px-2 py-12 text-center ">
          <div className="relative w-[95%] sm:w-[80%] min-h-[60vh] rounded-2xl bg-color1 text-color3 text-left shadow-xl transition-all">
            <div className="px-5 py-4">
              <button
                type="button"
                className="rounded-md p-1 inline-flex items-center justify-center text-color3 hover:bg-color2 focus:outline-none absolute top-2 right-2"
                onClick={closeModal}
              >
                <span className="sr-only">Close menu</span>
                <Icon svgName="close-icon" className="h-4 w-4"/>
              </button>
              <ImageCropper
                updateAvatar={updateAvatar}
                closeModal={closeModal}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
