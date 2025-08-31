import { useState } from "react"
import Popup from 'reactjs-popup'
import { RiArrowLeftWideLine , RiArrowRightWideLine} from "react-icons/ri"
import { CiCircleInfo} from "react-icons/ci"
import { FaHeart, FaDollarSign } from "react-icons/fa"
import { BsArrowClockwise } from "react-icons/bs"

import './index.css'


const productImagesList = [
{
  id: 1,
  imageUrl:"https://res.cloudinary.com/dejfd8kle/image/upload/v1756553233/manuka-honey-nz-umf24-125g-708601_xwpsj9.png",
  altText:"product view 1"
},
{
  id: 2,
  imageUrl: "https://res.cloudinary.com/dejfd8kle/image/upload/v1756561203/200507dc6ca527981f47be16abbf956084e04dbd_1_yybbpb.png", 
  altText:"product view 2"
},
{
  id: 3,
  imageUrl: "https://res.cloudinary.com/dejfd8kle/image/upload/v1756561045/d07b7562a11ef9ede254e5ffddc9a19e57a99608_dnzzsm.png",
  altText: "product view 3"
},
{
  id: 4,
  imageUrl: "https://res.cloudinary.com/dejfd8kle/image/upload/v1756561160/7de1f09601655c832d5893519fdcced0e555d0c4_eigkeu.png",
  altText: "product view 4"
},
{
  id: 5,
  imageUrl: "https://res.cloudinary.com/dejfd8kle/image/upload/v1756561033/f429565081532e5175a5f130ddd6ae84d203fb8c_lkjbvi.png",
  altText: "product view 5"
},
{
  id: 6,
  imageUrl: "https://res.cloudinary.com/dejfd8kle/image/upload/v1756561017/58c66a54fbac705a9aec08ed66696b0281f25e4a_uaoo62.png",
  altText: "product view 6"
},{
  id: 7,
  imageUrl: "https://res.cloudinary.com/dejfd8kle/image/upload/v1756560992/9e1262aea547565b6267d2ade6938b34433af5bb_kizhej.png",
  altText: "product view 7"
}
]

const ProductPage = () => {
    const [quantity, setQuantity] = useState(1);
    const [paymentOption, setPaymentOption] = useState("one-time");
    const [activeItem, setActiveItem] = useState(productImagesList[0])

    return (
    <div className='product-container'>
      <div className="product-images">
      <div className='image-scroll-container'>
        <button type='button' className="scroll-button">
            <RiArrowLeftWideLine className="scroll-icon"/>
        </button>
        <div className="image-background">
          <img
            src={activeItem.imageUrl}
            alt="Manuka Honey"
            className="product-image"
          />
        </div>
        <button type='button' className="scroll-button">
            <RiArrowRightWideLine className="scroll-icon"/>
        </button>
      </div>
      <ul className="scroll-images-list">
        <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1756618056/58ba0e08b79f094a810ba8be738fe894f88476a2_neqfom.png" 
          alt="manuka honey" className="detail-image"/>
        <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1756618041/cec78d557ced4a60a13cf1970145ab31c50a91f5_xjgciw.png" 
          alt="manuka medium" className="detail-image"/>
        <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1756618032/89125da6a431c8638008df0699a0659969008765_jtjsfl.jpg" 
          alt="manuka spoon" className="detail-image detail-image-2"/>
        <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1756618021/fa92b02e035d7f44a3b6c424e8d30e41f82a30ce_seqcwb.png" 
          alt="manuka large" className="detail-image"/>
        <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1756618013/5083dbf10b1310f93fb627c024ace1751e4e1dff_t38etv.png" 
          alt="manuka medium spoon" className="detail-image"/>
        <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1756618006/fe5dbfcfe027ae1e7e36e7d174edd37c3ca0b9d0_vo34pz.png" 
          alt="manuka extra" className="detail-image"/>
        <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1756617999/d625e2acb74e9990ead5626314b86c7ace643f33_kz1dlu.png" 
          alt="manuka soothing drops" className="detail-image"/>
      </ul>
      </div>
      <div className="product-details-container">
        <h1 className="product-name">
           Manuka Honey
        </h1>
        <p className="product-details">
            UMF <span className="details-span-text">24+</span>
        </p>
        <p className="product-details">
            MGO <span className="details-span-text">1122+</span>
        </p>
        

      <Popup
     trigger={
       <button
        type="button"
        className="popup-button">
        <CiCircleInfo className="note-icon"/>
         What is UMF and MGO?
      </button>
     }
     position="bottom center"
   >
     {close => (
       <div className="popup-container">
         <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1756624059/Frame_1484578531_nbqtkf.png"
            alt="UMF" className="popup-image" />
          <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1756624048/Frame_1484578529_eavqug.png"
            alt="MGO" className="popup-image" />
         <button
           type="button"
           className="close-button"
           onClick={() => close()}
         >
           Close
         </button>
       </div>
     )}
    </Popup>

      <div className="text-rating-container">
        <p className="optimiser-text">The Optimiser</p>
        <div className="rating-review-container">
          <ul className="rating-icons">
          <FaHeart className="rating-icon"/>
          <FaHeart className="rating-icon"/>
          <FaHeart className="rating-icon"/>
          <FaHeart className="rating-icon"/>
          <FaHeart className="rating-icon"/>
          </ul>
          <p className="review-count">825
            <span className="reviews-text">Reviews</span>
          </p>
        </div>
      </div>
      <p className="product-description">
        For those times in life when quality comes first. This pure UMF™ 24+ Manuka
        Honey is powerfully active, sourced from wild and rugged locations around
        Aotearoa New Zealand and great for almost all uses. It has a full, delicious
        flavour and your body will love you for it.
      </p>
      <ul className="brands-logos-list">
        <li className="brand-item">
          <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1756561395/091bee2154df16d16ed70217774440bf225f2900_nspe9t.png"
          alt="unique manuka factor"
          className="brand-image" />
        </li>
        <li className="brand-item">
          <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1756561374/783e7711502694fd9e1b70bbd66f02804411f849_uxcz3o.png"
          alt="NON GMO Project"
          className="brand-image" />
        </li>
        <li className="brand-item">
          <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1756561366/b70a6f585ec0a964285e98003337d6ec3752867c_lfcdl8.png"
          alt="Glyphosate residue free"
          className="brand-image" />
        </li>
        <li className="brand-item">
          <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1756561358/8c97517d9ebbd3a76cb0f638e2c795fd65e3a277_tjogq0.png"
          alt="fianz jv halal"
          className="brand-image" />
        </li>
        <li className="brand-item">
          <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1756561353/2c2fd2a45d55be2cd951d8759843038f01211cd5_ktphxj.png"
          alt="newzland"
          className="brand-image" />
        </li>
        <li className="brand-item">
          <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1756561345/4988d44823061da38da9b65e1479dcdbc959917d_g4xlyo.png"
          alt="MGO Certified"
          className="brand-image" />
        </li>
      </ul>
      <p className="size-text">Size (Select One)</p>
      <p className="variant-text">Variant: 125g | 4.4oz</p>
      <ul className="product-images-list">
        {productImagesList.map(each => (
        <li key={each.id} className={
          activeItem.id === each.id ? "product-image-item active-image" : "product-image-item"
        }>
          <button type="button" className="active-image-button"
          onClick={() => setActiveItem(each)}>
            <img src={each.imageUrl}
              alt={each.altText}
              className="item-image" />
          </button>
        </li>
        )
        )}
      </ul>

      <div className="section">
        <h3>PAYMENT OPTIONS (SELECT ONE)</h3>
        <div className="payment-options-container">
          <div className="payment-options">
          <button
            className={`option ${paymentOption === "one-time" ? "active" : ""}`}
            onClick={() => setPaymentOption("one-time")}
          >
            <span>One-time purchase</span>
            <span>$55.88 USD</span>
          </button>
          <button
            className={`option ${paymentOption === "subscribe" ? "active" : ""}`}
            onClick={() => setPaymentOption("subscribe")}
          >
            <span>Subscribe & save 20%</span>
            <span>$44.70 USD</span>
          </button>
          </div>
          <p className="help-text">
            <BsArrowClockwise size={20} style={{color:"#000000", marginRight: '10px' }}/>
            What is a Subscription?</p>
         </div>
      </div>
      <div className="section">
        <h3>SELECT QUANTITY</h3>
        <div className="quantity-cart">
          <div className="quantity">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <button className="add-to-cart">ADD TO CART</button>
        </div>
      </div>
      <div className="bundle">
        <h4>Beauty Bundle</h4>
        <div className="bundle-cart">
        <div className="bundle-items">
          <div className="item">
            <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1756570571/066620652678ace2a8b18d99958799a6750696c0_cyxw9s.png" 
              alt="UMF 20+" />
            <p>UMF 20+</p>
            <select className="quantity-option">
              <option>250g</option>
              <option>500g</option>
            </select>
          </div>
          +
          <div className="item">
            <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1756570563/327394c3fd8ec3ec3d902b06fa874c76353a27e5_xe9rdb.png" 
              alt="UMF 24+" />
            <p>UMF 24+</p>
            <select className="quantity-option">
              <option>250g</option>
              <option>500g</option>
            </select>
          </div>
          +
          <div className="item">
            <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1756570553/999979079a923079d63d37a1077ca3eeb88fd930_ltdeuh.png" 
              alt="Wooden Spoon" />
            <p>Wooden Spoon</p>
          </div>
        </div>
        <div>
        <p className="price">
          <del>$478.75 USD</del> <strong>$430.88 USD</strong>{" "}
          <span className="save">Save 10%</span>
        </p>
        <button className="add-bundle">ADD BUNDLE TO CART</button>
        </div>
        </div>

      </div>  

      <div className="colorclub">
        <img src="https://res.cloudinary.com/dejfd8kle/image/upload/v1756626586/a4ae2eaca1629c3adae1c7714b22764214572002_k8zgbv.png"
          alt="colorclub"
          className="colorclub-image" />
        <p className="colorclub-text">Colourclub members earn up to {" "}
          <span className="colorclub-span">56</span> {" "}
          reward points when buy this item. {" "}Sign up or log in
        </p>

      </div>

      <div className="section delivery">
        <p className="delivery-text">
          DELIVERY 
          <br />
          FREE DELIVERY ON ORDERS OVER $30
        </p>
        <p className="delivery-text">
          ESTIMATED DELIVERY DATE:
          <br /> 
          Jun 9 - Jun 13
        </p>
      </div>
      <hr className="hr-line"/>
      <div className="section">
        <p className="delivery-text">
          AFTER PAY
          <br />
          <span style={{display: 'flex', alignItems: 'center'}}>
          or 4 interest-free payments of $13.97 with{" "} 
          <FaDollarSign className="dollar-icon"/>
          {" "}
          <span className="afterpay">Afterpay 
          </span>
          <CiCircleInfo className="note-icon"/>
          </span>
        </p>
      </div>
      <hr className="hr-line"/>
      <div className="section">
        <h4>UMF™ SCALE</h4>
        <div className="umf-scale">
          {["10+", "15+", "20+", "24+", "26+", "28+", "30+"].map((each, i) => (
            <span key={i} className={`scale scale-${i}`}>
              UMF™ {each}
            </span>
          ))}
        </div>
      </div>
      <div className="section">
        <h4>TASTE PROFILE</h4>
        <div className="divider">
          <span className="circle"></span>
        </div>
        <div className="taste-profile">
          <span>Clean & Intense</span>
          <span>Bold & Intense</span>
        </div>
      </div>

      </div>
    </div>
) 
}

export default ProductPage