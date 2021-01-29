import React, { useState, useEffect, useMemo, memo } from "react";
import "./main.css";
function WineCard({ elem }) {
    return (
        <div className="product-card">
            <div className="product-img">
                <img
                    src={elem.image_path}
                    alt="product image"
                    width="210"
                    height="300"
                />
            </div>
            <div className="product-btns">
                <button type="button" className="btn-cart">
                    {" "}
                    Ավելացնել
                    <span>
                        <i className="fas fa-plus"></i>
                    </span>
                </button>
                <button type="button" className="btn-buy">
                    {" "}
                    Գնել հիմա
                    <span>
                        <i className="fas fa-shopping-cart"></i>
                    </span>
                </button>
            </div>
            <div className="product-info">
                <h4>{elem.type}</h4>
                <div className="rating">
                    <span>
                        <i className="fas fa-star"></i>
                    </span>
                    <span>
                        <i className="fas fa-star"></i>
                    </span>
                    <span>
                        <i className="fas fa-star"></i>
                    </span>
                    <span>
                        <i className="fas fa-star"></i>
                    </span>
                    <span>
                        <i className="far fa-star"></i>
                    </span>
                </div>
                <p className="product-price">Արժեքը՝ {elem.price} AMD</p>
            </div>
        </div>
    );
}

export default WineCard = memo(WineCard);
