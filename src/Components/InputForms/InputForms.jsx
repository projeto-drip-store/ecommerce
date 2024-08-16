import "../InputForms/InputForms.css"

// eslint-disable-next-line react/prop-types
function InputForms({ titulo, nome, type, descricao,value, onchange }) {

  return (
    <>
      <div className="divisoria-label-input">
        <label className="label-input-forms" htmlFor={titulo}>
          {nome}
          <input className="input-forms" name={titulo} type={type} placeholder={descricao} value={value} onChange={onchange} />
        </label>
      </div>
    </>
  );
}

export default InputForms
