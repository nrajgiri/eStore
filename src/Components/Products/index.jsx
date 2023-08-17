//import { useSelector } from 'react-redux';
//import productSlice from '../../store/slices/productSlice';
import productImage1 from '../../assets/images/shop/shop-1.jpg';
import productImage2 from '../../assets/images/shop/shop-2.jpg';
import productImage3 from '../../assets/images/shop/shop-3.jpg';
import productImage4 from '../../assets/images/shop/shop-4.jpg';
import productImage5 from '../../assets/images/shop/shop-5.jpg';
import productImage6 from '../../assets/images/shop/shop-6.jpg';
import productImage7 from '../../assets/images/shop/shop-7.jpg';
import productImage8 from '../../assets/images/shop/shop-8.jpg';
import productImage9 from '../../assets/images/shop/shop-9.jpg';

import './_products.scss';

const Products = ()=>{
    const productData = [
        {
            pName:"Jacket",
            price:45,
            img:productImage1
        },
        {
            pName:"Purse",
            price:50,
            img:productImage2
        },
        {
            pName:"Dress",
            price:38,
            img:productImage3
        },
        {
            pName:"Denim",
            price:42,
            img:productImage4
        },
        {
            pName:"Boots",
            price:65,
            img:productImage5
        },
        {
            pName:"Bag",
            price:35,
            img:productImage6
        }
    
    ]

    return(
        <div className='products-container'>
            {
                productData.map((product,key)=>{
                    return(
                        <div  className='mx-5 p-3 product-card'>
                            <div className='product-image-container'>
                            <img src={product.img} alt={product.pName} />
                            </div>
                            <div className='product-info'>
                                <h5> <a href='#'>{product.pName}</a> </h5>
                                <p className='product-price'> ${product.price} </p>
                                <div className='product-rating'>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                    <i className='fa fa-star'/>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products;