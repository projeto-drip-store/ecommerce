import HeaderMenor from "../../Components/HeaderMenor/HeaderMenor";
import Footer from "../../Components/Footer/Footer";
import InputForms from "../../Components/InputForms/InputForms";
import "./CriarFormularioPage.css"
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function CriarFormulario() {


  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');
  const [complemento, setComplemento] = useState('');
  const navigate = useNavigate();


  function handleCadastro(e) {
    e.preventDefault();

    if (!nome || !senha || !email || !cpf || !endereco || !cep || !celular || !bairro || !cidade) {
      alert('Por favor, preencha todos os campos.');
      return
    }
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries())

    console.log(data);
    navigate("/Login", { replace: true })
  }

  return (
    <>
      <HeaderMenor />
      <form className="section-criar-forms" onSubmit={handleCadastro}>
        <h1 className="titulo-input-forms">Criar Conta</h1>
        <div className="infomacoes-pessoais">
          <h4>Infomacoes Pessoais</h4>
          <hr />
          <InputForms
            onchange={(e) => setNome(e.target.value)}
            value={nome}
            titulo={'nome'}
            nome={'Nome completo*'}
            type={'text'}
            descricao={'Insira seu nome'}
          />

          <InputForms
            onchange={(e) => setSenha(e.target.value)}
            value={senha}
            titulo={'senha'}
            nome={'Senha*'}
            type={'password'}
            descricao={'Insira sua senha'}
          />
          <InputForms
            onchange={(e) => setCpf(e.target.value)}
            value={cpf}
            titulo={'cpf'}
            nome={'CPF*'}
            type={'text'}
            descricao={'Insira seu CPF'}
          />
          <InputForms
            onchange={(e) => setEmail(e.target.value)}
            value={email}
            titulo={'email'}
            nome={'E-mail*'}
            type={'email'}
            descricao={'Insira seu email'}
          />
          <InputForms
            onchange={(e) => setCelular(e.target.value)}
            value={celular}
            titulo={'celular'}
            nome={'Celular*'}
            type={'text'}
            descricao={'Insira seu celular'}
          />
        </div>
        <div className="infomacoes-entrega">
          <h4>Infomacoes de Entrega</h4>
          <hr />
          <InputForms
            onchange={(e) => setEndereco(e.target.value)}
            value={endereco}
            titulo={'endereco'}
            nome={'Endereco*'}
            type={'text'}
            descricao={'Insira seu endereco'}
          />
          <InputForms
            onchange={(e) => setBairro(e.target.value)}
            value={bairro}
            titulo={'bairro'}
            nome={'Bairro*'}
            type={'text'}
            descricao={'Insira seu bairro'}
          />
          <InputForms
            onchange={(e) => setCidade(e.target.value)}
            value={cidade}
            titulo={'cidade'}
            nome={'Cidade*'}
            type={'text'}
            descricao={'Insira seu cidade'}
          />
          <InputForms
            onchange={(e) => setCep(e.target.value)}
            value={cep}
            titulo={'cep'}
            nome={'CEP*'}
            type={'text'}
            descricao={'Insira seu CEP'}
          />
          <InputForms
            onchange={(e) => setComplemento(e.target.value)}
            value={complemento}
            titulo={'complemento'}
            nome={'Complemento'}
            type={'text'}
            descricao={'Insira seu complemento'}
          />

        </div>
        <div className="criar-conta-forms">
          <div className="input-ofertas-forms">
            <input className="check-input-forms" type='checkbox' />
            <label>Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.</label>
          </div>
          <button >Criar Conta</button>
        </div>
      </form>
      <Footer />
    </>
  );
}

export default CriarFormulario;
