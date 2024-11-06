import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import React from 'react';

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
        <div className="text-sm rounded-3xl bg-color1 text-color3 flex items-start justify-center text-left p-4">
          <svg
            className="flex-shrink-0 inline w-5 h-5 mr-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 1 1 1 1v4h1a1 1 0 1 1 0 2Z" />
          </svg>
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
