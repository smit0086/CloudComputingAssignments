package com.csci5409.a2.product;

import com.csci5409.a2.product.DTO.ProductDTO;
import com.csci5409.a2.product.DTO.ProductListDTO;
import com.csci5409.a2.product.DTO.StoreProductSuccessResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/list-products")
    public ResponseEntity<ProductListDTO> listProducts() {
        return ResponseEntity.ok(productService.getAllProducts());
    }

    @PostMapping("/store-products")
    public ResponseEntity<StoreProductSuccessResponse> storeProduct(@RequestBody ProductListDTO productListDTO) {
        return ResponseEntity.ok(productService.saveProducts(productListDTO));
    }

    @PostMapping("/delete-all-products")
    public ResponseEntity<StoreProductSuccessResponse> deleteAllProducts() {
        return ResponseEntity.ok(productService.deleteAllProducts());
    }
}
