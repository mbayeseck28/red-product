"use client";
import React, { useState } from "react";
import { FaArrowLeft, FaImage } from "react-icons/fa";
import axios from "axios";
import styled from "styled-components";

const Form = styled.form``;

// font-family: Roboto;
// background-color: white;
// margin-top: 15px;
// gap: 20px;
// width: 50%;
// padding: 20px;
// border: 1px solid #dddddd;
// border-radius: 10px;

const ContainerInput = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const ImageInput = styled.input`
  display: none;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: 500;
  line-height: 27.79px;
  text-align: left;
`;

const Input = styled.input`
  font-size: 14px;
  font-weight: 500;
  line-height: 21.71px;
  text-align: left;
  padding: 6px;
  border-radius: 8px;
  border: 1px solid #dddddd;
  outline: none;
`;

const Select = styled.select`
  font-size: 16px;
  font-weight: 500;
  line-height: 21.71px;
  text-align: left;
  padding: 6px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #dddddd;
`;

const DivImage = styled.div`
  margin-top: 1rem;
  width: 100%;
`;

const FileInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #dddddd;
  padding: 2rem;
  border-radius: 12px;
  flex-direction: column;

  justify-content: center;
`;

const ImageWrapper = styled.label`
  margin-left: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  color: #dddddd;
`;

const ImageDefault = styled.span`
  margin-left: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  color: #dddddd;
`;

const ImageText = styled.p`
  margin-left: 0.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const SubmitButton = styled.button`
  background-color: #555555;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100px;
`;

const FormAjout = ({ onClose }) => {
  const [formData, setFormData] = useState({
    nom: "",
    adresse: "",
    email: "",
    telephone: "",
    prix: "",
    devise: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   setFormData({
  //     ...formData,
  //     image: file,
  //   });
  // };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/hotels",
        formDataToSend
      );
      console.log(response.data);
      alert("Hotel ajouté avec succès");
      setSelectedImage(null);
      onClose();
    } catch (error) {
      console.error("Erreur lors de l'envoi des données :", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ContainerInput>
        <InputWrapper>
          <Label htmlFor="nom">Nom de l'hôtel:</Label>
          <Input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            placeholder="Nom de l'hôtel"
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="nom">Adresse:</Label>
          <Input
            type="text"
            name="adresse"
            value={formData.adresse}
            onChange={handleChange}
            placeholder="Adresse de l'hôtel"
            required
          />
        </InputWrapper>
      </ContainerInput>
      <ContainerInput>
        <InputWrapper>
          <Label htmlFor="nom">Email:</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email de l'hôtel"
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="nom">Telephone:</Label>
          <Input
            type="number"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            placeholder="Téléphone de l'hôtel"
            required
          />
        </InputWrapper>
      </ContainerInput>
      <ContainerInput>
        <InputWrapper>
          <Label htmlFor="nom">prix par nuit:</Label>
          <Input
            type="number"
            name="prix"
            value={formData.prix}
            onChange={handleChange}
            placeholder="Prix de l'hôtel"
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="nom">Devise:</Label>
          <Select
            name="devise"
            value={formData.devise}
            onChange={handleChange}
            required
          >
            <option value="XOF">F CFA</option>
            <option value="EUR">Euro</option>
            <option value="USD">Dollar</option>
          </Select>
        </InputWrapper>
      </ContainerInput>
      {/* <DivImage>
        <Label htmlFor="nom">Ajouter une photo:</Label>
        <FileInputContainer>
          <ImageWrapper>
            <FaImage size={40} />
            <ImageText>Ajouter une photo</ImageText>
            <ImageInput
              type="file"
              name="image"
              onChange={handleImageChange}
              required
            />
          </ImageWrapper>
        </FileInputContainer>
      </DivImage> */}
      <DivImage>
        <Label htmlFor="nom">Ajouter une photo:</Label>
        <FileInputContainer>
          <ImageWrapper>
            <ImageText>
              {selectedImage ? (
                <Image
                  src={URL.createObjectURL(selectedImage)}
                  alt="selected-img"
                />
              ) : (
                // selectedImage.name
                <ImageDefault>
                  <FaImage size={40} />
                  <ImageText>Ajouter une photo</ImageText>
                </ImageDefault>
              )}
            </ImageText>
            <ImageInput
              type="file"
              name="image"
              onChange={handleImageChange}
              required
            />
          </ImageWrapper>
        </FileInputContainer>
      </DivImage>
      <ButtonContainer>
        <SubmitButton type="submit">Ajouter l'hôtel</SubmitButton>
      </ButtonContainer>
    </Form>
  );
};

export default FormAjout;
