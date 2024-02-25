package com.csci5409.a2.product;

import com.csci5409.a2.product.DTO.ProductDTO;
import com.csci5409.a2.product.DTO.ProductListDTO;
import com.csci5409.a2.product.DTO.StoreProductSuccessResponse;

import java.util.List;

public interface ProductService {
    StoreProductSuccessResponse saveProducts(ProductListDTO productListDTO);
    ProductListDTO getAllProducts();
}
