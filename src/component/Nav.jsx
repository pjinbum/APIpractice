import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    const loginList = ['매장찾기' , '고객센터' , '가입하기' , '로그인']
    const menuList = ['New Releases' , 'Men', 'Women' , 'Kid' , 'Sale' , 'SNKRS' , '나이키 앱']
  return (
    <div>
        <div className='login'>
           <ul>
             {
                loginList.map(function(item , i){
                    return <li className='login-item' key={i}>{item}</li>
                })
             }
           </ul>
        </div>
        <div className='nav'>
          <img width={70} src="https://blog.kakaocdn.net/dn/o2k2o/btqwR37aRMc/imACexBUQZJms7mQRkQck1/img.jpg" alt="logo" />
          <ul className='gnb-list'>
            {
                menuList.map(function(menu , i){
                    return <li className='gnb-item' key={i}>{menu}</li>
                })
            }
          </ul>
          <div className='icon-list'>
            <div className='search-box'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" placeholder='          검색' />
            </div>
          </div>
          <div className='font-icon'>
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faCartShopping} />
          </div>
      
        </div>
    </div>
  )
}

export default Nav