import Label from "./Label";

function TextField({ features,register, error }) {
  const labelOptions = {
    labelClass: features.labelClass,
    id: features.id,
    label: features.label,
  };
 
  return (
    <div className={features.rootClass}>
      <Label labelOptions={labelOptions}  error={error}/>
      <input
      {...register}
        id={features.id}
        className={features.inputClass}
        type={features.type}
        autoComplete="off"
      
      />
       {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default TextField;
