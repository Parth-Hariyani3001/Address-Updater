/* eslint-disable react/prop-types */
import AddressItem from "./AddressItem";
function AddressList({ address, dispatch, status }) {
  return (
    <div className="my-6 container px-6 mx-auto flex justify-center gap-6 flex-wrap">
      {address.map((el) => {
        return (
          <AddressItem
            status={status}
            name={el.name}
            streetAddress={el.streetAddress}
            addressState={el.addressState}
            city={el.city}
            zipCode={el.zipCode}
            phone={el.phone}
            key={el.id}
            dispatch={dispatch}
            id={el.id}
          />
        );
      })}
    </div>
  );
}

export default AddressList;
