import HeaderMenor from "../../Components/HeaderMenor/HeaderMenor";
import Footer from "../../Components/Footer/Footer";
import InputForms from "../../Components/InputForms/InputForms";
import "./CriarFormularioPage.css";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { apiRequest } from "../../Scripts/apiRequest";

function CriarFormulario() {

  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [documentId, setDocumentId] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const navigate = useNavigate();

  const handleCadastro = (e) => {
    e.preventDefault();

    if (!fullName || !password || !userEmail || !documentId || !streetAddress || !postalCode || !phoneNumber || !neighborhood || !city) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const newUser = {
      nome: data.nome,
      senha: data.senha,
      cpf: data.cpf,
      email: data.email,
    };

    apiRequest('/user/register', 'POST', newUser);
    
    const newContact = {
      telefone: data.telefone,
    };

    apiRequest('/telephone/register', 'POST', newContact);
    
    const newAddress = {
      endereco: data.endereco,
      bairro: data.bairro,
      cidade: data.cidade,
      cep: data.cep,
      complemento: data.complemento
    };

    apiRequest('/address/register', 'POST', newAddress);

    navigate("/Login", { replace: true });
  }

  return (
    <>
      <HeaderMenor />
      <form className="section-criar-forms" onSubmit={handleCadastro}>
        <h1 className="titulo-input-forms">Criar Conta</h1>
        <div className="infomacoes-pessoais">
          <h4>Informações Pessoais</h4>
          <hr />
          <InputForms
            onchange={(e) => setFullName(e.target.value)}
            value={fullName}
            nome={'nome'}
            titulo={'Nome completo*'}
            type={'text'}
            descricao={'Insira seu nome'}
          />
          <InputForms
            onchange={(e) => setPassword(e.target.value)}
            value={password}
            nome={'senha'}
            titulo={'Senha*'}
            type={'password'}
            descricao={'Insira sua senha'}
          />
          <InputForms
            onchange={(e) => setDocumentId(e.target.value)}
            value={documentId}
            nome={'cpf'}
            titulo={'CPF*'}
            type={'text'}
            descricao={'Insira seu CPF'}
          />
          <InputForms
            onchange={(e) => setUserEmail(e.target.value)}
            value={userEmail}
            nome={'email'}
            titulo={'E-mail*'}
            type={'email'}
            descricao={'Insira seu email'}
          />
          <InputForms
            onchange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            nome={'telefone'}
            titulo={'Celular*'}
            type={'text'}
            descricao={'Insira seu celular'}
          />
        </div>
        <div className="infomacoes-entrega">
          <h4>Informações de Entrega</h4>
          <hr />
          <InputForms
            onchange={(e) => setStreetAddress(e.target.value)}
            value={streetAddress}
            nome={'endereco'}
            titulo={'Endereço*'}
            type={'text'}
            descricao={'Insira seu endereço'}
          />
          <InputForms
            onchange={(e) => setNeighborhood(e.target.value)}
            value={neighborhood}
            nome={'bairro'}
            titulo={'Bairro*'}
            type={'text'}
            descricao={'Insira seu bairro'}
          />
          <InputForms
            onchange={(e) => setCity(e.target.value)}
            value={city}
            nome={'cidade'}
            titulo={'Cidade*'}
            type={'text'}
            descricao={'Insira sua cidade'}
          />
          <InputForms
            onchange={(e) => setPostalCode(e.target.value)}
            value={postalCode}
            nome={'cep'}
            titulo={'CEP*'}
            type={'text'}
            descricao={'Insira seu CEP'}
          />
          <InputForms
            onchange={(e) => setAdditionalInfo(e.target.value)}
            value={additionalInfo}
            nome={'complemento'}
            titulo={'Complemento'}
            type={'text'}
            descricao={'Insira seu complemento'}
          />
        </div>
        <div className="criar-conta-forms">
          <div className="input-ofertas-forms">
            <input className="check-input-forms" type='checkbox' />
            <label>Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.</label>
          </div>
          <button>Criar Conta</button>
        </div>
      </form>
      <Footer />
    </>
  );
}

export default CriarFormulario;
