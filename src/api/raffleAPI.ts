import axios from "axios";
import { IGift } from "../interfaces";

const BASE_URL_API = "http://3.80.182.17:3000/api"; // "https://z20bt3i5pe.execute-api.us-east-1.amazonaws.com/dev/api";
const baseApi = axios.create({
  baseURL: BASE_URL_API,
});

export const getGifts = async(): Promise<IGift[]> => {
  const { data } = await baseApi.post(`/sorteo/regalo`);
  return data.data as IGift[];
}

export const generateWins = ({ id_regalo, nombre, cantidad }: IGift) =>
  baseApi.post(`/sorteo/obtener`, {
    regalo: nombre,
    participantes: `${cantidad}`,
    idregalo: id_regalo
  });

export const exportWinningPeople = `${BASE_URL_API}/sorteo/exportar`;

export const downloadWins = () => baseApi.get('/sorteo/exportar', { responseType: 'blob' })