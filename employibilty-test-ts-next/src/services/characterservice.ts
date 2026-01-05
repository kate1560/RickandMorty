import { ApiResponse, Character } from '@/types/character';

const API_BASE_URL = 'https://rickandmortyapi.com/api';

export const characterService = {
  /**
   * Obtiene todos los personajes de la primera página
   */
  async getAll(): Promise<Character[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/character`);
      
      if (!response.ok) {
        throw new Error(`Error al obtener personajes: ${response.status}`);
      }
      
      const data: ApiResponse = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error fetching characters:', error);
      throw error;
    }
  },

  /**
   * Obtiene un personaje por ID
   */
  async getById(id: number): Promise<Character> {
    try {
      const response = await fetch(`${API_BASE_URL}/character/${id}`);
      
      if (!response.ok) {
        throw new Error(`Error al obtener personaje ${id}: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`Error fetching character ${id}:`, error);
      throw error;
    }
  },

  /**
   * Filtra personajes por nombre
   */
  async searchByName(name: string): Promise<Character[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/character/?name=${name}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          return [];
        }
        throw new Error(`Error en búsqueda: ${response.status}`);
      }
      
      const data: ApiResponse = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error searching characters:', error);
      throw error;
    }
  }
};