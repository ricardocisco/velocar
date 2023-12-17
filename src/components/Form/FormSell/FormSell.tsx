import React, { ChangeEvent, useState } from 'react'
import { Container, DivForm, FormBox, InputStyled, LabelStyled, Message, RadioInput, TitleBox } from '../../../pages/SellPage/styles';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addCar } from '../../../redux/reducers/itens';
import { BoxImg, ImgStyled, InputImg } from './styles';

interface FormsProps {
  titulo: string
  foto: string | null
  favorito: boolean
  preco: number
  id: string
  categoria: string
  fullName: string
  rg: string
  cpf: string
  email: string
  telefone: string
}


export default function FormSell() {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      // Cria uma URL temporária para a imagem selecionada
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const dispatch = useDispatch();
  const onSubmit = (data: FormsProps) => {
    dispatch(addCar(data))

    console.log(data)
  }

  const { register, handleSubmit, formState: { errors } } = useForm<FormsProps>({
    defaultValues: {
      titulo: '',
      categoria: '',
      preco: 0,
      fullName: '',
      rg: '',
      cpf: '',
      email: '',
      telefone: '',
    }
  });

  console.log(errors)

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DivForm>
          <TitleBox>
            <h1>Informações do Veiculo</h1>
            <p>Passo 1 de 4</p>
          </TitleBox>
          <FormBox>
            <div>
              <LabelStyled>Nome/Modelo Veiculo</LabelStyled>
              <InputStyled {...register("titulo", { required: "Campo Obrigatório" })} placeholder='Nome Veiculo'></InputStyled>
              <Message>{errors.titulo?.message}</Message>

              <LabelStyled>Categoria</LabelStyled>
              <InputStyled {...register("categoria", { required: "Campo Obrigatório" })} placeholder='Categoria'></InputStyled>
              <Message>{errors.categoria?.message}</Message>

              <LabelStyled>Valor</LabelStyled>
              <InputStyled {...register("preco", { required: "Campo Obrigatório " })} placeholder='Valor do Aluguel/Venda'></InputStyled>
              <Message>{errors.preco?.message}</Message>
            </div>
          </FormBox>
        </DivForm>
        <DivForm>
          <TitleBox>
            <h1>Informações do Vendedor</h1>
            <p>Passo 2 de 4</p>
          </TitleBox>
          <FormBox>
            <div>
              <LabelStyled>Nome Completo</LabelStyled>
              <InputStyled {...register("fullName", { required: "Campo Obrigatório" })} placeholder='Nome Completo'></InputStyled>
              <Message>{errors.fullName?.message}</Message>

              <LabelStyled>RG</LabelStyled>
              <InputStyled {...register("rg", { required: "Campo Obrigatório" })} placeholder='Numero do RG'></InputStyled>
              <Message>{errors.rg?.message}</Message>
            </div>
            <div>
              <LabelStyled>Email</LabelStyled>
              <InputStyled {...register("email", { required: "Campo Obrigatório " })} placeholder='Email do vendedor'></InputStyled>
              <Message>{errors.email?.message}</Message>
            </div>
          </FormBox>
          <FormBox>
            <div>
              <LabelStyled>Contato/Telefone</LabelStyled>
              <InputStyled {...register("telefone", { required: "Campo Obrigatório" })} placeholder='Telefone'></InputStyled>
              <Message>{errors.telefone?.message}</Message>

              <LabelStyled>CPF</LabelStyled>
              <InputStyled {...register("cpf", { required: "Campo Obrigatório" })} placeholder='Numero do CPF'></InputStyled>
              <Message>{errors.cpf?.message}</Message>
            </div>
            <div>
              <LabelStyled>Documento do Veiculo</LabelStyled>
              <InputStyled type='file'></InputStyled>
            </div>
          </FormBox>
        </DivForm>
        <DivForm>
          <TitleBox>
            <h1>Foto + Informações do Veiculo</h1>
            <p>Passo 3 de 4</p>
          </TitleBox>
          <BoxImg>
            <div>
              {selectedImage && (
                <div>
                  <h2>Imagem Selecionada</h2>
                  <ImgStyled src={selectedImage} alt="Imagem selecionada" />
                </div>
              )}
              <InputImg type="file" accept='image/*' onChange={handleFileChange} />
            </div>
            <RadioInput>
              <div>
                <input type='checkbox'></input>
                <p>Automatico</p>
              </div>
            </RadioInput>
            <RadioInput>
              <div>
                <input type='checkbox'></input>
                <p>Manual</p>
              </div>
            </RadioInput>
          </BoxImg>
        </DivForm>
        <button type='submit'>Enviar</button>
      </form>
    </Container>
  )
}
