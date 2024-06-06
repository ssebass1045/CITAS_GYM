import CreateCredentialDto from "./CreateCredentialDto";

interface CreateUserDto {
    name: string;
    email: string;
    birthday: string;
    nDni: string;
    credential: CreateCredentialDto;  // Esto puede ser opcional si las credenciales se crean por separado
}

export default CreateUserDto;
