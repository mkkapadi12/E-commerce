import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../Context/ProductContext';
import PageNavigation from '../components/PageNavigation';
import MyImage from '../components/MyImage';
import { Container } from '../styles/Container';
import CurrencyFormate from '../Helper/CurrencyFormate';
import { TbTruckDelivery, TbReplace } from 'react-icons/tb';
import { MdSecurity } from 'react-icons/md';
import Rating from '../components/Rating';
import AddToCart from '../components/AddToCart';
import Progress from '../Helper/Progress';

const API = 'https://api.pujakaitem.com/api/products';

const SingleProduct = () => {
  const { getSingleProduct, singleProduct, isSingleLoading } =
    useProductContext();
  // console.log(singleProduct);

  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  const {
    id: alis,
    name,
    company,
    price,
    description,
    image,
    reviews,
    stars,
    stock,
  } = singleProduct;
  // console.log(colors);

  if (isSingleLoading) {
    return (
      <>
        <Progress />
      </>
    );
  }

  return (
    <>
      <Wrapper>
        <PageNavigation title={name} />
        <Container className="container">
          <div className="grid grid-two-column">
            <div className="product-images">
              <MyImage imgs={image} />
            </div>
            <div className="product-data">
              <h2 style={{ textTransform: 'capitalize' }}>{name}</h2>

              <Rating stars={stars} reviews={reviews} />
              <p className="product-data-price">
                MRP:
                <del>
                  <CurrencyFormate price={price + 250000} />
                </del>
              </p>
              <p className="product-data-price product-data-real-price">
                Deal of The Day : <CurrencyFormate price={price} />
              </p>
              <p>{description}</p>
              <div className="product-data-warranty">
                <div className="product-warranty-data">
                  <TbTruckDelivery className="warranty-icon" />
                  <p>Free Delivery</p>
                </div>
                <div className="product-warranty-data">
                  <TbReplace className="warranty-icon" />
                  <p>30 Days Replacement</p>
                </div>
                <div className="product-warranty-data">
                  <TbTruckDelivery className="warranty-icon" />
                  <p>Mayur Delivery</p>
                </div>
                <div className="product-warranty-data">
                  <MdSecurity className="warranty-icon" />
                  <p>2 years warranty</p>
                </div>
              </div>
              <div className="product-data-info">
                <p>
                  Available :
                  <span>{stock > 0 ? 'In Stock' : 'Not Available'} </span>
                </p>
                <p>
                  ID :<span>{alis}</span>
                </p>
                <p>
                  Brand :<span>{company}</span>
                </p>
              </div>
              <hr />
              {stock > 0 && <AddToCart product={singleProduct} />}
            </div>
          </div>
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
