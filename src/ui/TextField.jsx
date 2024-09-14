import Label from "./Label";

function TextField({ features ,onChange,value }) {
  const labelOptions = {
    labelClass: features.labelClass,
    id: features.id,
    label: features.label,
  };
  return (
   
    <div className={features.rootClass}>
      <Label labelOptions={labelOptions} />
      <input
        value={value}
        id={features.id}
        name={features.name}
        className={features.inputClass}
        type={features.type}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
      />
    </div>
  );
}

export default TextField;
