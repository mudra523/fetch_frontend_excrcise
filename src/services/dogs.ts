import axiosClient from "./axiosClient";
import { Dog } from "@/utils/types";

// 3.1 Search dogs by query params
//    - Example usage: searchDogs({ size:10, from:0, breeds:["Hound"], sort:"breed:asc" })
interface SearchParams {
  size?: number;
  from?: number;
  breeds?: string[];  // array of breed strings
  zipCodes?: string[]; // array of zip code strings
  ageMin?: number;
  ageMax?: number;
  sort?: string;      // e.g. "breed:asc" or "age:desc" etc.
}

interface SearchResponse {
  resultIds: string[];
  total: number;
  next?: string; // A query string for next
  prev?: string; // A query string for prev
}

export async function searchDogs(params: SearchParams) {
  const searchParams = new URLSearchParams();

  if (params.size) searchParams.set("size", String(params.size));
  if (typeof params.from === "number") {
    // 'from' is used for paging (like offset)
    searchParams.set("from", String(params.from));
  }
  if (params.breeds && params.breeds.length > 0) {
    // for multiple breeds, we have to do searchParams.append for each
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

  const url = `/dogs/search?${searchParams.toString()}`;
  const res = await axiosClient.get<SearchResponse>(url);
  return res.data; // { resultIds, total, next, prev }
}

// 3.2 Fetch multiple dogs by their IDs
export async function fetchDogsByIds(ids: string[]): Promise<Dog[]> {
  // POST /dogs, body = string[]
  const res = await axiosClient.post<Dog[]>("/dogs", ids);
  return res.data; // an array of dog objects
}
