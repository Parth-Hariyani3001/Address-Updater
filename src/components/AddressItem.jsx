/* eslint-disable react/prop-types */

import EditAddressForm from "./EditAddressForm";

function AddressItem({
  dispatch,
  name,
  streetAddress,
  addressState,
  city,
  zipCode,
  phone,
  status,
  id,
}) {
  return (
    <>
      <div className="bg-white overflow-hidden shadow rounded-lg border">
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {name}
              </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Phone number
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {phone}
              </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Address</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {addressState}
                <br />
                {streetAddress}
                <br />
                {city}, {zipCode}
              </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
              <button
                onClick={() => dispatch({ type: "onDelete", payload: id })}
                className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
              >
                Delete
              </button>
              <button
                onClick={() => dispatch({ type: "edit" })}
                className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Edit
              </button>
            </div>
          </dl>
        </div>
      </div>
      {status === "edit" && (
        <EditAddressForm
          fullName={name}
          streetAdd={streetAddress}
          stateAdd={addressState}
          cityAdd={city}
          zipCodeAdd={zipCode}
          phoneNumber={phone}
          dispatch={dispatch}
          id={id}
        />
      )}
    </>
  );
}

export default AddressItem;
