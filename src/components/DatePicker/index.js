import React, { useRef, useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';

import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';

export default function DatePicker({ name }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      <ReactDatePicker
        name={fieldName}
        placeholder="Date/Time"
        selected={selected}
        onChange={date => setSelected(date)}
        showTimeSelect
        className="inputs"
        timeFormat="HH:mm"
        locale="pt-BR"
        dateFormat="d/MM/yyyy HH:mm"
        ref={ref}
      />
      {error && <span>{error}</span>}
    </>
  );
}
