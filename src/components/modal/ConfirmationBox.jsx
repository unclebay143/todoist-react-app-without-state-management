import React from "react";

export const ConfirmationBox = ({
  title,
  brief,
  handleOk,
  okButtonLabel,
  handleCancel,
  cancelButtonLabel,
}) => {
  return (
    <section className='antialiased bg-gray-200 text-gray-900 font-sans overflow-x-hidden'>
      <div className='relative px-4 min-h-screen md:flex md:items-center md:justify-center'>
        <div className='bg-black opacity-25 w-full h-full absolute z-10 inset-0' />
        <div className='bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative'>
          <div className='md:flex items-center'>
            <div className='rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto'>
              <i className='bx bx-error text-3xl' />
            </div>
            <div className='mt-4 md:mt-0 md:ml-6 text-center md:text-left'>
              <p className='font-bold'>{title}</p>
              <p className='text-sm text-gray-700 mt-1'>{brief}</p>
            </div>
          </div>
          <div className='text-center md:text-right mt-4 md:flex md:justify-end'>
            <button
              onClick={handleOk}
              className='block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2'
            >
              {okButtonLabel || "Ok"}
            </button>
            <button
              onClick={handleCancel}
              className='block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
    md:mt-0 md:order-1'
            >
              {cancelButtonLabel || "Cancel"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
