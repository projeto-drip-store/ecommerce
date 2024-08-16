import "../InputForms/InputForms.css"

// eslint-disable-next-line react/prop-types
function InputForms({ titulo, nome, type, descricao,value, onchange }) {

  return (
    <>
      <div className="divisoria-label-input">
        <label className="label-input-forms" htmlFor={nome}>
          {titulo}
          <input className="input-forms" name={nome} type={type} placeholder={descricao} value={value} onChange={onchange} />
        </label>
      </div>
    </>
  );
}

export default InputForms
