import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../Context/FilterContext";

const FilterSection = () => {
  const {
    filters: { text, category, company },
    updateFilterValue,
    all_product,
  } = useFilterContext();
  // console.log(text);

  //get the unique data gor each field.

  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });
    return (newVal = ["ALL", ...new Set(newVal)]);
    // console.log(newVal);
  };

  //we need unique data
  const categoryOnlyData = getUniqueData(all_product, "category");

  return (
    <>
      <Wrapper>
        <div className="filter-search">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              // style={{ textTransform: "lowercase" }}
              type="text"
              name="text"
              value={text.toLowerCase()}
              onChange={updateFilterValue}
              autoComplete="off"
              placeholder="Search Product"
            />
          </form>
        </div>
        <div className="filter-category">
          <h3>Category</h3>
          <div>
            {categoryOnlyData.map((curElem, index) => {
              return (
                <>
                  <button
                    type="button"
                    key={index}
                    name="category"
                    value={curElem}
                    onClick={updateFilterValue}
                    className={curElem === category ? "active" : "null"}
                  >
                    {curElem}
                  </button>
                </>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

export default FilterSection;
