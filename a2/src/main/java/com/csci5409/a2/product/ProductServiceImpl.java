package com.csci5409.a2.product;

import com.csci5409.a2.product.DTO.ProductDTO;
import com.csci5409.a2.product.DTO.ProductListDTO;
import com.csci5409.a2.product.DTO.StoreProductSuccessResponse;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public StoreProductSuccessResponse saveProducts(ProductListDTO productListDTO) {
        List<Product> productList = productListDTO.getProducts().stream()
                .map(productDTO -> modelMapper.map(productDTO, Product.class))
                .collect(Collectors.toList());
        productRepository.saveAll(productList);
        return new StoreProductSuccessResponse("Success.");
    }

    @Override
    public ProductListDTO getAllProducts() {
        List<Product> productList = productRepository.findAll();
        ProductListDTO response = new ProductListDTO();
        response.setProducts(productList.stream()
                .map(product -> modelMapper.map(product, ProductDTO.class))
                .collect(Collectors.toList()));
        return response;
    }
}
