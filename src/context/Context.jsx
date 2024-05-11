import { createContext, useContext, useEffect, useState } from "react";

// Data
import { categoryShowApi } from "../data/categoryShowApi.js";
import { productsApi } from "../data/productsApi.js";
import { filterApi } from "../data/filtersApi.js";

const Context = createContext({});

export const ContextProvider = ({ children }) => {
const [shouldClearData, setShouldClearData] = useState(false)
  // Api Response
  const [categoryShowResponse, setCategoryShowResponse] = useState(null);
  const [productsResponse, setProductsResponse] = useState(null);
  const [filtersResponse, setFiltersResponse] = useState(null);
  // paginations 
  const [currentPage, setCurrentPage] = useState(1);
  const pages = new Array(productsResponse && productsResponse.meta.last_page).fill(null);

  //filterData
  const [selectData, setSelectData] = useState(null);
  //   
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);


  // CategoryComponent 
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  // productCOlumn
  const [productsColumn, setProductsColumn] = useState(true);

  // slugs
  const [slug, setSlug] = useState(null);

  const setCategorySlug = (categorySlug) => {
    setSlug(categorySlug);
  };


 // clear

 
    const SelectData = {
        categories: selectedCategories,
        tags: selectedTags,
        brands: selectedBrands
    };
    const categoryIds = selectedCategories.map(el => el.id);
    const tagIds = selectedTags.map(el => el.id);
    const brandIds = selectedBrands.map(el => el.id);
    
    const handleClear = async (page = 1) => {
        setSelectData(null);
        setCurrentPage(page);
        const productResponse = await productsApi.getProductsApi(page, '', '', '')
        setProductsResponse(productResponse);
        setShouldClearData(true)
    }

    const handleAply = async () => {
        setIsOpenFilter(false);
        setCurrentPage(1);
        setSelectData(SelectData);
        const productResponse = await productsApi.getProductsApi(1, categoryIds, tagIds, brandIds);
        setProductsResponse(productResponse);
        setShouldClearData(false);
    }

    const handlePagination = async (page = 1) => {
        setCurrentPage(page);
        let productPageResponse;
        if (shouldClearData) {
            productPageResponse = await productsApi.getProductsApi(page, '', '', '');
        } else {
            productPageResponse = await productsApi.getProductsApi(page, categoryIds, tagIds, brandIds);
        }
        setProductsResponse(productPageResponse);
    }

    useEffect(() => {
        const getCategoryShowApi = async () => {
            if (slug) {
                const response = await categoryShowApi.getCategoryShowApi(slug)
                setCategoryShowResponse(response)
                if (response) {
                    setSelectedCategories([response.item]);
                    const productResponse = await productsApi.getProductsApi(1, response.item.id, '', '')
                    setProductsResponse(productResponse)
                }
            }
        }
        
        getCategoryShowApi()
    }, [slug]);

    useEffect(() => {
        const getFilterApi = async () => {
            const response = await filterApi.getFilter();
            setFiltersResponse(response);
        }
        if (isOpenFilter) {
            getFilterApi();
        }
    }, [isOpenFilter]); 

    // Favourite

    const [favourite, setFavourite] = useState([]);
    const [isFavourite, setIsFavourite] = useState(false);


    const addToFavourite = (item) => {
        const newFavourites = [...favourite];

        const existingIndex = favourite.findIndex((favItem) => favItem.id === item.id);
        if (existingIndex !== -1) {
          newFavourites.splice(existingIndex, 1);
        } else {
          newFavourites.push(item);
        };

        setFavourite(newFavourites);
        localStorage.setItem('favourite', JSON.stringify(newFavourites));
    };

    useEffect(() => {
        const storedFavourites = JSON.parse(localStorage.getItem('favourite')) || [];
        setFavourite(storedFavourites);
    }, []);

    

    const contextValues = {
        handleClear,
        setCategorySlug,
        categoryShowResponse,
        productsResponse,
        productsColumn,
        setProductsColumn,
        isOpenFilter,
        setIsOpenFilter,
        currentPage,
        setCurrentPage,
        pages,
        selectData,
        setSelectData,
        selectedCategories,
        setSelectedCategories,
        selectedTags,
        setSelectedTags,
        selectedBrands,
        setSelectedBrands,
        handleAply,
        handlePagination,
        filtersResponse,
        favourite,
        setFavourite,
        addToFavourite,
        isFavourite
    }

    return (
        <Context.Provider value={contextValues}>
            {children}
        </Context.Provider>
    );
};


    


export const useContextProvider = () => useContext(Context);