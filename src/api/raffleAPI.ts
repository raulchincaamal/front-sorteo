import axios from "axios";
import { IGift } from "../interfaces";

const BASE_URL_API = "http://alb-sorteo-api-qa-9491160.us-east-1.elb.amazonaws.com:3000/api";
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