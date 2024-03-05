import axios from "axios";

const url = 'http://20.20.1.222:8000/api/cat/';

// GET - READ - LER
export async function getCats() {
  try {
    const response = await axios.get(url);
    return response.data.results
  } catch (error) {
    console.log(error);
  }
}

// DELETE - DELETE - DELETAR
export async function deleteCat(id) {
  try {
    const response = await axios.delete(`${url}${id}/`);
    return response.data.results
  } catch (error) {
    console.log(error);
  }
}

// POST - CREATE - CRIAR
export async function createCat(data) {
  try {
    const response = await axios.post(url, data);
    return response.data.results
  } catch (error) {
    console.log(error);
  }
}

// SINGLE GET
export async function getSingleCat(id) {
  try {
    const response = await axios.get(`${url}${id}/`);
    return response.data
  } catch (error) {
    console.log(error);
  }
}
