// src/redux/slices/authSlice.ts

import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import api from '../services/axios'; // Importa a instância do Axios
import type { PayloadAction } from '@reduxjs/toolkit';
// --- 1. Tipagem do Estado e Payloads ---

// Tipagem do Objeto de Usuário (ajuste conforme o que seu Backend retorna)
interface User {
  id: number;
  username: string;
  email: string;
  roles: string[];
}

// Tipagem do Estado de Autenticação
interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

// Tipagem do Payload de Retorno (Sucesso)
interface LoginSuccessPayload {
  token: string;
  user: User;
}

// Tipagem do Argumento de Entrada (Requisição)
interface LoginRequestPayload {
  email: string; // ou username
  password: string;
}


// --- 2. Estado Inicial ---

const initialState: AuthState = {
  // Inicializa o estado com o token e o status de autenticação salvos
  token: localStorage.getItem('jwtToken') || null, 
  user: null, 
  isAuthenticated: !!localStorage.getItem('jwtToken'), 
  isLoading: false,
  error: null,
};

// --- 3. Thunk Assíncrono para Login ---

export const loginUser = createAsyncThunk<
  // 1. T_Returned (Sucesso)
  LoginSuccessPayload, 
  // 2. T_Arg (Argumento de entrada)
  LoginRequestPayload, 
  // 3. T_ThunkApiConfig (Definimos o tipo de 'rejectValue' como string)
  { rejectValue: string } 
>(
  'auth/loginUser', 
  async ({ email, password }, thunkAPI) => {
    try {
      // Faz a requisição de login usando a instância configurada do Axios
      const response = await api.post('/auth/login', { email, password }); 

      // O Backend deve retornar o token e dados do usuário.
      const { token, user } = response.data; 
      
      // Persistência do Token
      localStorage.setItem('jwtToken', token);
      
      return { token, user }; 
      
    } catch (error: any) {
      // Captura de Erros e rejeição com a mensagem (CORREÇÃO TS2322)
      const message: string = error.response?.data?.message || 'Falha na autenticação. Verifique as credenciais.';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// --- 4. Criação do Slice ---

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Reducer Síncrono para Logout
    logout: (state) => {
      localStorage.removeItem('jwtToken'); 
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.error = null;
    },
  },
  // Manipulação dos estados do Thunk
  extraReducers: (builder) => {
    builder
      // PENDING
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      // FULFILLED (Sucesso)
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<LoginSuccessPayload>) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token; 
        state.user = action.payload.user;
      })
      // REJECTED (Erro)
      .addCase(loginUser.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.token = null;
        state.user = null;
        // action.payload será a string de erro (ou undefined)
        state.error = action.payload || 'Erro desconhecido.'; 
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;