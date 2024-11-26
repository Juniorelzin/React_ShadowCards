import api from "../config/axios";
const { login } = useAuth();

 const handleLogin = async () => {
      const loginData = {
        email: "teste@teste.com.br",
        password: "teste123"
      };
      try {
        const response = await api.post('/auth/login', loginData);      
        login(response.data.token);
        navigate("/home");
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    
  };