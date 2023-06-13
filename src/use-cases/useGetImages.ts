"use client";
import { PEXELS_API_KEY } from "@/constants/pexels";
import axios from "axios";
import { useEffect, useState } from "react";

export enum FetchState {
  DEFAULT = "DEFAULT",
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

export function useGetImages(initialData?: any) {
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const [images, setImages] = useState(initialData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setFetchState(FetchState.LOADING);

        const res = await axios.get(
          "https://api.pexels.com/v1/search?query=people",
          {
            headers: {
              Authorization: PEXELS_API_KEY,
            },
          }
        );
        setFetchState(FetchState.SUCCESS);
      } catch (err) {
        setFetchState(FetchState.ERROR);
      }
    };
    fetchData();
  }, []);

  return { images, fetchState };
}
