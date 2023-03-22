import React from 'react'

const ProductCard = () => {
  return (
    <div style={{border : '1px solid black' , width : '351px'}}>
        <img style={{width : '349px' , height : '349px'}} src={'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f5ed9fd8-27eb-47e3-9e58-95dd341417c6/%ED%83%84%EC%A4%80-%EB%A6%AC%ED%8B%80%ED%82%A4%EC%A6%88-%EC%8B%A0%EB%B0%9C-icS1BApy.png'} />
        <div style={{color : 'orange' , fontWeight : 'bold'}}>베스트 셀러</div>
        <div style={{fontWeight : 'bold' }}>제품명</div>
        <div style={{color : 'gray'}}>가격</div>
        <div style={{color : 'skyblue'}}>신제품</div>
    </div>
  )
}

export default ProductCard