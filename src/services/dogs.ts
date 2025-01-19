import axiosClient from "./axiosClient";
import { Dog } from "@/utils/types";

interface SearchParams {
  size?: number;
  from?: number;
  breeds?: string[]; 
  zipCodes?: string[]; 
  ageMin?: number;
  ageMax?: number;
  sort?: string; 
}

interface SearchResponse {
  resultIds: string[];
  total: number;
  next?: string; 
  prev?: string; 
}

export async function searchDogs(params: SearchParams) {
  const searchParams = new URLSearchParams();

  if (params.size) {
    searchParams.set("size", String(params.size));
  }
  if (typeof params.from === "number") {
    searchParams.set("from", String(params.from));
  }
  if (params.breeds && params.breeds.length > 0) {
    params.breeds.forEach((breed) => searchParams.append("breeds", breed));
  }
  if (params.zipCodes && params.zipCodes.length > 0) {
    params.zipCodes.forEach((zip) => searchParams.append("zipCodes", zip));
  }
  if (typeof params.ageMin === "number") {
    searchParams.set("ageMin", String(params.ageMin));
  }
  if (typeof params.ageMax === "number") {
    searchParams.set("ageMax", String(params.ageMax));
  }
  if (params.sort) {
    searchParams.set("sort", params.sort);
  }

  // Check if any query parameters have been added
  const queryString = searchParams.toString();
  
  // Build the URL conditionally
  const url = queryString 
    ? `/dogs/search?${queryString}` 
    : `/dogs/search`;

  const res = await axiosClient.get<SearchResponse>(url);
  return res.data;
}

export async function fetchDogsByIds(ids: string[]): Promise<Dog[]> {
  const res = await axiosClient.post<Dog[]>("/dogs", ids);
  return res.data; 
}

export async function getBreeds(): Promise<string[]> {
  const res = await axiosClient.get<string[]>("/dogs/breeds");
  return res.data; 
}

export async function matchDogs(ids: string[]): Promise<string> {
  const res = await axiosClient.post<{ match: string }>("/dogs/match", ids);
  return res.data.match; 
}
