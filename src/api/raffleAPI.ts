import axios from "axios";
import { IGiftForm } from "../interfaces";

const baseApi = axios.create({
  baseURL: "https://z20bt3i5pe.execute-api.us-east-1.amazonaws.com/dev/api",
});

export const generateWins = ({ name, giftsAvailable }: IGiftForm) =>
  baseApi.post(`/sorteo/obtener`, {
    regalo: name,
    participantes: giftsAvailable,
  });

export const downloadWins = () => baseApi.get('/sorteo/exportar', { responseType: 'blob' })