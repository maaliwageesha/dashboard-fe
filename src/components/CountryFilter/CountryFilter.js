import { useEffect, useState } from 'react';

export const CountryFilter = ({ updateState }) => {
  const [selectedCountry, SetSelectCountry] = useState('australia');

  useEffect(() => {
    updateState(selectedCountry);
  }, [selectedCountry]);

  return (
    <div className="d-flex justify-content-center w-100 align-items-center">
      <p className="pe-2 pt-2">Change Country</p>
      <select
        className="form-control w-25"
        value={selectedCountry}
        onChange={(e) => SetSelectCountry(e.target.value)}
      >
        <option value="all">All</option>
        <option value="australia">Australia</option>
        <option value="india">India</option>
        <option value="singapore">Singapore</option>
        <option value="china">China</option>
      </select>
    </div>
  );
};
