import { createContext, useContext, useEffect, useState } from "react";

// Data
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
  const [categoryShowResponse, setCategoryShowResponse] = useState(null);
  const [productsResponse, setProductsResponse] = useState(null);
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
  // for fillter
//   const [categoryId, setCategoryId] = useState(null);
//   const [tagId, setTagId] = useState('');
//   const [brandId, setBrandId] = useState('');

 // clear


 const handleClear = async (page = 1) => {
    setSelectData(null);
    const productResponse = await productsApi.getProductsApi(page, '', '', '')
    setProductsResponse(productResponse);
 }

 const SelectData = {
    categories: selectedCategories,
    tags: selectedTags,
    brands: selectedBrands
};

 const handleAply = async (page = 1) => {
    setIsOpenFilter(false);
    setCurrentPage(page);
    setSelectData(SelectData);
    const categoryIds = selectedCategories.map(el => el.id);
    const tagIds = selectedTags.map(el => el.id);
    const brandIds = selectedBrands.map(el => el.id);
    const productResponse = await productsApi.getProductsApi(page, categoryIds, tagIds, brandIds);
    setProductsResponse(productResponse);
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

    // useEffect(() => {
    //     const getProductsApi = async () => {
    //         if(selectedCategories.length > 0){
    //             const categoryIds = selectedCategories.map(el => el.id);
    //             const tagIds = selectedTags.map(el => el.id);
    //             const brandIds = selectedBrands.map(el => el.id);
    //             setProductsResponse(response)
    //         }
    //     }
    //     getProductsApi()
    // }, [currentPage, selectedCategories, selectedTags, selectedBrands]);


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
        handleClear,
        setCategorySlug,
        categoryShowResponse,
        productsResponse,
        cataegoriesResponse,
        tagsResponse,
        brandsResponse,
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
        handleAply
    }

    return (
        <Context.Provider value={contextValues}>
            {children}
        </Context.Provider>
    );
};

export const useContextProvider = () => useContext(Context);