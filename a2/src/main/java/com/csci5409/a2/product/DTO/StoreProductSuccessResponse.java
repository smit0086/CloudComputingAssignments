package com.csci5409.a2.product.DTO;

public class StoreProductSuccessResponse {
    private String message;

    public StoreProductSuccessResponse(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
