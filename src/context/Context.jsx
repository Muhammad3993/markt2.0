import { createContext, useContext, useEffect, useState } from "react";

// Data
import { footerApi } from "../data/footerApi.js"
import { categoryShowApi } from "../data/categoryShowApi.js";
import { productsApi } from "../data/productsApi.js";
import { categoriesApi } from "../data/categoriesApi.js";
import { tagsApi } from "../data/tagsApi.js";
import { brandsApi } from "../data/brandsApi.js";

const Context = createContext({});

export const ContextProvider = ({ children }) => {
  // Api Response
  const [cataegoriesResponse, setCataegoriesResponse] = useState(null);
  const [tagsResponse, setTagsResponse] = useState(null);
  const [brandsResponse, setBrandsResponse] = useState(null);
  const [footerResponse, setFooterResponse] = useState(null);
  const [categoryShowResponse, setCategoryShowResponse] = useState(null);
  const [productsResponse, setProductsResponse] = useState(null);
  // paginations 
  const [currentPage, setCurrentPage] = useState(1);
  const pages = new Array(productsResponse && productsResponse.meta.last_page).fill(null);

  //filterData
  const [selectData, setSelectData] = useState(null);


  // CategoryComponent 
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  // productCOlumn
  const [productsColumn, setProductsColumn] = useState(true);

  // slugs
  const [slug, setSlug] = useState(null);

  const setCategorySlug = (categorySlug) => {
    setSlug(categorySlug);
  };
  // for fillter
  const [categoryId, setCategoryId] = useState(null);
  const [tagId, setTagId] = useState('');
  const [brandId, setBrandId] = useState('');
  
    useEffect(() => {
        const getFooter = async () => {
            const response = await footerApi.getFooter()
            setFooterResponse(response)
        }
  
        getFooter();
    }, [])

    useEffect(() => {
        const getCategoryShowApi = async () => {
            const response = await categoryShowApi.getCategoryShowApi(slug)
            setCategoryShowResponse(response)
            if (response) {
                const catId = response.item.id;
                setCategoryId(catId);
            }
        }
        
        getCategoryShowApi()
    }, [slug]);

    useEffect(() => {
      const getProductsApi = async () => {
          if(categoryId){
              const response = await productsApi.getProductsApi(currentPage, categoryId, tagId, brandId)
              setProductsResponse(response)
          }
      }
      
      getProductsApi()
    }, [currentPage, categoryId, tagId, brandId]);

    useEffect(() => {
        const getCategoriesApi = async () => {
            const response = await categoriesApi.getCategoriesApi();
            setCataegoriesResponse(response);
        }
        const getTagApi = async () => {
            const response = await tagsApi.getTagApi();
            setTagsResponse(response);
        }
        const getBrandsApi = async () => {
            const response = await brandsApi.getBrandsApi();
            setBrandsResponse(response);
        }
        if (isOpenFilter) {
            getCategoriesApi();
            getTagApi();
            getBrandsApi();     
        }
    }, [isOpenFilter]); 

    const contextValues = {
      setCategorySlug,
      footerResponse,
      categoryShowResponse,
      productsResponse,
      cataegoriesResponse,
      tagsResponse,
      brandsResponse,
      setCategoryId,
      setTagId,
      setBrandId,
      productsColumn,
      setProductsColumn,
      isOpenFilter,
      setIsOpenFilter,
      currentPage,
      setCurrentPage,
      pages,
      selectData,
      setSelectData,
    }

    return (
        <Context.Provider value={contextValues}>
            {children}
        </Context.Provider>
    );
};

export const useContextProvider = () => useContext(Context);