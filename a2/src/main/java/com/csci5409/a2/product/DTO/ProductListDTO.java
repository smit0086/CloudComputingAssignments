package com.csci5409.a2.product.DTO;

import java.util.List;

public class ProductListDTO {
    private List<ProductDTO> products;

    public List<ProductDTO> getProducts() {
        return products;
    }

    public void setProducts(List<ProductDTO> products) {
        this.products = products;
    }
}
