import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import React from 'react';
import Icon from '../../modules/common/Icon';

const MySwal = withReactContent(Swal);

// Updated the AlertContent type to reflect that message can be an array of strings or a string
interface AlertContent {
  title: string;
  message?: string;  // Allowing for a single message or empty string
  listItems?: string[];  // This will be used to show the error list
}

const useCustomAlert = () => {
  const showAlert = React.useCallback(({ title, message, listItems }: AlertContent) => {
    // If no message is passed, show the list items only
    const alertMessage = message || "There was an issue with your request.";

    MySwal.fire({
      html: (
        <div className="text-sm bg-color1 text-color3 border-2 border-color2 flex items-start justify-center text-left p-4">
          <Icon svgName="info-icon" width='20' height='20' className="flex-shrink-0 inline mr-3"/>
          <div>
            <span className="font-semibold">{title}</span>
            <p>{alertMessage}</p>
            {listItems && (
              <ul className="mt-1 list-disc list-inside text-sm">
                {listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ),
      position: 'bottom-start',
      timer: 5000,
      showConfirmButton: false,
      customClass: {
        popup: 'p-0 bg-transparent shadow-none border-none',
      },
      backdrop: false,
      didOpen: () => {
        const popup = Swal.getPopup();
        if (popup) {
          popup.style.boxShadow = 'none';
        }
      },
    });
  }, []);

  return { showAlert }; // Changed from showCustomAlert to showAlert
};

export default useCustomAlert;
