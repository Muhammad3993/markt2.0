import { createContext, useContext, useEffect, useState } from "react";
// Data
import { headerApi } from "../data/headerApi.js"
import { promoApi } from "../data/promoApi.js"
import { topCategoriesApi } from "../data/topCategoriesApi.js"
import { randomProductApi } from "../data/randomProductApi.js"
import { footerApi } from "../data/footerApi.js"

const Context = createContext({});

export const ContextProvider = ({ children }) => {
    const [headerResponse, setHeaderResponse] = useState(null)
    const [promoResponse, setPromoResponse] = useState(null)
    const [topCategoriesResponse, setTopCategoriesResponse] = useState(null)
    const [randomProductResponse, setRandomProductResponse] = useState(null);
    const [footerResponse, setFooterResponse] = useState(null)
  
    useEffect(() => {
      const getHeader = async () => {
        const response = await headerApi.getHeader()
        setHeaderResponse(response)
      }
      
      getHeader();
    }, [])
  
    useEffect(() => {
        const getPromo = async () => {
            const response = await promoApi.getPromo()
            setPromoResponse(response)
        }
  
        getPromo();
    },[])
  
    useEffect(() => {
      const getTopCategories = async () => {
        const response = await topCategoriesApi.getTopCategories();
        setTopCategoriesResponse(response);
      }
  
      getTopCategories()
    },[])
  
    useEffect(() => {
        const getRandomProductApi = async () => {
            const response = await randomProductApi.getRandomProductApi()
            setRandomProductResponse(response)
        }
  
        getRandomProductApi();
    }, []);
  
    useEffect(() => {
        const getFooter = async () => {
            const response = await footerApi.getFooter()
            setFooterResponse(response)
        }
  
        getFooter();
    }, [])
  
  
    const contextValues = {
      headerResponse,
      promoResponse,
      topCategoriesResponse,
      randomProductResponse,
      footerResponse,
    }

    return (
        <Context.Provider value={contextValues}>
            {children}
        </Context.Provider>
    );
};

export const useContextProvider = () => useContext(Context);