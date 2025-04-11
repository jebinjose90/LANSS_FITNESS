// src/modules/common/hooks/useCustomAlert.tsx
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import React from 'react';
import Icon from '../Icon';
import { prepareAlertContent } from '../../../usecases/alert/useAlertLogic';
import { AlertContent } from '../../../core/types/alert';

const MySwal = withReactContent(Swal);

const useCustomAlert = () => {
  const showAlert = React.useCallback(({ title, message, listItems }: AlertContent) => {
    const { title: alertTitle, message: alertMessage, listItems: alertList } =
      prepareAlertContent({ title, message, listItems });

    MySwal.fire({
      html: (
        <div className="text-sm bg-color1 text-color3 border-2 border-color2 flex items-start justify-center text-left p-4">
          <Icon svgName="info-icon" width='20' height='20' className="flex-shrink-0 inline mr-3"/>
          <div>
            <span className="font-semibold">{alertTitle}</span>
            <p>{alertMessage}</p>
            {alertList.length > 0 && (
              <ul className="mt-1 list-disc list-inside text-sm">
                {alertList.map((item, index) => (
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

  return { showAlert };
};

export default useCustomAlert;
