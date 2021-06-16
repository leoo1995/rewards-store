import React from "react"
import { ProductCard } from "../../molecules/ProductCard"
import styled from "styled-components"
export const StyledProducts = styled.section`
  min-height: 1200px;
  max-width: 1176px;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  gap: 24px 0;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    justify-content: space-evenly;
  }
`
const products = [
  {
    _id: "5a033eeb364bf301523e9b92",
    name: "Sandalia Pale Gold YSL",
    cost: 200,
    category: "Indumentaria",
    img: {
      url: "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
      hdUrl: "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png"
    }
  },
  {
    _id: "5a033f0f364bf301523e9b93",
    name: "iPhone 7 Case Sea-Blue",
    cost: 200,
    category: "Accesorios",
    img: {
      url: "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
      hdUrl:
        "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png"
    }
  },
  {
    _id: "5a033f0f364bf301523e9b93",
    name: "iPhone 7 Case Sea-Blue",
    cost: 200,
    category: "Accesorios",
    img: {
      url: "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
      hdUrl:
        "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png"
    }
  },
  {
    _id: "5a033f0f364bf301523e9b93",
    name: "iPhone 7 Case Sea-Blue",
    cost: 200,
    category: "Accesorios",
    img: {
      url: "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
      hdUrl:
        "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png"
    }
  },
  {
    _id: "5a033f0f364bf301523e9b93",
    name: "iPhone 7 Case Sea-Blue",
    cost: 200,
    category: "Accesorios",
    img: {
      url: "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
      hdUrl:
        "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png"
    }
  },
  {
    _id: "5a033f0f364bf301523e9b93",
    name: "iPhone 7 Case Sea-Blue",
    cost: 200,
    category: "Accesorios",
    img: {
      url: "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
      hdUrl:
        "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png"
    }
  },
  {
    _id: "5a033f0f364bf301523e9b93",
    name: "iPhone 7 Case Sea-Blue",
    cost: 200,
    category: "Accesorios",
    img: {
      url: "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
      hdUrl:
        "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png"
    }
  },
  {
    _id: "5a033f0f364bf301523e9b93",
    name: "iPhone 7 Case Sea-Blue",
    cost: 200,
    category: "Accesorios",
    img: {
      url: "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
      hdUrl:
        "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png"
    }
  },
  {
    _id: "5a033f0f364bf301523e9b93",
    name: "iPhone 7 Case Sea-Blue",
    cost: 200,
    category: "Accesorios",
    img: {
      url: "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
      hdUrl:
        "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png"
    }
  },
  {
    _id: "5a033f0f364bf301523e9b93",
    name: "iPhone 7 Case Sea-Blue",
    cost: 200,
    category: "Accesorios",
    img: {
      url: "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
      hdUrl:
        "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png"
    }
  },
  {
    _id: "5a033f0f364bf301523e9b93",
    name: "iPhone 7 Case Sea-Blue",
    cost: 200,
    category: "Accesorios",
    img: {
      url: "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
      hdUrl:
        "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png"
    }
  },
  {
    _id: "5a033f0f364bf301523e9b93",
    name: "iPhone 7 Case Sea-Blue",
    cost: 200,
    category: "Accesorios",
    img: {
      url: "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
      hdUrl:
        "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png"
    }
  },
  {
    _id: "5a033f0f364bf301523e9b93",
    name: "iPhone 7 Case Sea-Blue",
    cost: 200,
    category: "Accesorios",
    img: {
      url: "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
      hdUrl:
        "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png"
    }
  },
  {
    _id: "5a033f0f364bf301523e9b93",
    name: "iPhone 7 Case Sea-Blue",
    cost: 200,
    category: "Accesorios",
    img: {
      url: "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
      hdUrl:
        "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png"
    }
  },
  {
    _id: "5a033f0f364bf301523e9b93",
    name: "iPhone 7 Case Sea-Blue",
    cost: 200,
    category: "Accesorios",
    img: {
      url: "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
      hdUrl:
        "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png"
    }
  },
  {
    _id: "5a033f0f364bf301523e9b93",
    name: "iPhone 7 Case Sea-Blue",
    cost: 200,
    category: "Accesorios",
    img: {
      url: "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
      hdUrl:
        "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png"
    }
  }
]
export const Products = () => {
  return (
    <StyledProducts>
      {products.map(product => (
        <ProductCard {...product} />
      ))}
    </StyledProducts>
  )
}
