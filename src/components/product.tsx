// import { Link } from "react-router-dom";

type prodProps= {
  offer: boolean;
  image: string;
  markedPrice: number;
  title: string;
  sellingPrice:number;
}

 function EachProduct ( props:prodProps){
    return(
        <div className="col-md-4 top_brand_left">
        <div className="hover14 column">
          <div className="agile_top_brand_left_grid">
            <div className="agile_top_brand_left_grid_pos">
              <img src={ "../../../assets/images/offer.png"} alt=" "className="img-responsive" />
            </div>
            <div className="agile_top_brand_left_grid1">
              <figure>
                <div className="snipcart-item block">
                  <div className="snipcart-thumb">
                    
                      <img title=" " alt=" " src={props.image} style={{height:'160px', width:"160px"}} />
                    
                    <p>{props.title}</p>
                    <h4>
                      Rs{props.sellingPrice} <span>Rs{props.markedPrice}</span>
                    </h4>
                  </div>
                  <div className="snipcart-details top_brand_home_details">
                    <form  action="#" method="post">
                      <fieldset>
                        <input type="hidden" name="cmd" value="_cart" />
                        <input type="hidden" name="add" value="1" />
                        <input type="hidden" name="business" value=" " />
                        <input type="hidden"name="item_name" value="Fortune Sunflower Oil"/>
                        <input type="hidden" name="amount" value="35.99" />
                        <input type="hidden" name="discount_amount" value="1.00" />
                        <input type="hidden" name="currency_code" value="USD" />
                        <input type="hidden" name="return" value=" " />
                        <input type="hidden" name="cancel_return" value=" " />
                        <input type="submit" name="submit" value="Add to cart" className="button" />
                      </fieldset>
                    </form>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    );
  }
    
  export default EachProduct;
