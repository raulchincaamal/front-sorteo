import axios from "axios";
import { IGiftForm } from "../interfaces";

const baseApi = axios.create({
  baseURL: "http://3.80.182.17:3000/api",
});

export const generateWins = ({ name, giftsAvailable }: IGiftForm) =>
  baseApi.post(`/sorteo/obtener`, {
    regalo: name,
    participantes: giftsAvailable,
  });

export const downloadWins = () => baseApi.get('/sorteo/exportar', { responseType: 'blob' })