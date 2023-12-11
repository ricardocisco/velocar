import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { CardStyle, DivForm, FormBox, InputStyled, LabelStyled, Message, TitleBox, RadioInput } from '../../pages/PaymentPage/styles';
import bandeiras from '../../images/image_catalogo/cartao.png';
import nubank from '../../images/image_catalogo/nubank.png';
import c6bank from '../../images/image_catalogo/c6bank.png';

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      fullName: '',
      number: '',
      endereco: '',
      cidade: '',
      numberCard: '',
      nameCard: '',
      dateExp: '',
      cvv: '',
    }
  });

  console.log(errors)

  return (
    <div>
      <form onSubmit={handleSubmit((data) => {
        console.log(data)
      })}>
        <DivForm>
          <TitleBox>
            <h1>Informações de Pagamento</h1>
            <p>Passo 1 de 4</p>
          </TitleBox>
          <FormBox>
            <div>
              <LabelStyled>Nome</LabelStyled>
              <InputStyled {...register("fullName", { required: "Campo Obrigatório" })} placeholder='Seu nome completo'></InputStyled>
              <Message>{errors.fullName?.message}</Message>

              <LabelStyled>Telefone</LabelStyled>
              <InputStyled {...register("number", { required: "Campo Obrigatório", minLength: { value: 9, message: 'Minimo 9 digitos' } })} placeholder='Insira seu telefone'></InputStyled>
              <Message>{errors.number?.message}</Message>
            </div>
            <div>
              <LabelStyled>Endereco</LabelStyled>
              <InputStyled {...register("endereco", { required: "Campo Obrigatório " })} name="endereco" placeholder='Digite seu endereço'></InputStyled>
              <Message>{errors.endereco?.message}</Message>

              <LabelStyled>Cidade/Bairro</LabelStyled>
              <InputStyled {...register("cidade", { required: "Campo Obrigatório " })} name="cidade" placeholder='Digite sua cidade'></InputStyled>
              <Message>{errors.cidade?.message}</Message>
            </div>
          </FormBox>
        </DivForm>
        <DivForm>
          <TitleBox>
            <h1>Método de Pagamento</h1>
            <p>Passo 2 de 4</p>
          </TitleBox>
          <TitleBox>
            <h1>Cartão de Crédito</h1>
            <CardStyle src={bandeiras} alt='bandeira cartao'></CardStyle>
          </TitleBox>
          <FormBox>
            <div>
              <LabelStyled>Número do Cartão</LabelStyled>
              <InputStyled {...register("numberCard", { required: "Campo Obrigatório" })} placeholder='Ex:5555-444-3333-2222'></InputStyled>
              <Message>{errors.numberCard?.message}</Message>

              <LabelStyled>Nome no Cartão</LabelStyled>
              <InputStyled {...register("nameCard", { required: "Campo Obrigatório" })} placeholder='Nome no cartão'></InputStyled>
              <Message>{errors.nameCard?.message}</Message>
            </div>
            <div>
              <LabelStyled>Data de expiração</LabelStyled>
              <InputStyled {...register("dateExp", { required: "Campo Obrigatório " })} placeholder='DD/MM/YYYY'></InputStyled>
              <Message>{errors.dateExp?.message}</Message>

              <LabelStyled>CVV</LabelStyled>
              <InputStyled {...register("cvv", { required: "Campo Obrigatório", minLength: { value: 3, message: 'Máximo 3 digitos' } })} placeholder='CVV'></InputStyled>
              <Message>{errors.cvv?.message}</Message>
            </div>
          </FormBox>
          <RadioInput>
            <div>
              <input type='checkbox'></input>
              <p>Nubank(Invista e ganhe limite de crédito)</p>
            </div>
            <CardStyle src={nubank} alt="logo nubank" />
          </RadioInput>
          <RadioInput>
            <div>
              <input type='checkbox'></input>
              <p>C6Bank(Invista e ganhe limite de crédito)</p>
            </div>
            <CardStyle src={c6bank} alt="logo c6bank" />
          </RadioInput>
        </DivForm>
        <input type="submit" />
      </form>
    </div>
  )
}
