import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram,FaShareAlt } from "react-icons/fa";


class Coffies extends React.Component{
    constructor(props){
        super(props)
        this.state={
            coffee:[],
            loading:false
        }
    }

    componentDidMount(){
        fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())
        .then(data=> console.log(data.value))
    }
    render(){
        return (
            <>
<section className="mt-5">
          <div className="container">
            <div className="row ">
              <div className="col-md-12">
                <div className="show-area d-flex align-items-center justify-content-center">
                  <div className="show-img d-flex p-2 bg-light">
                    <img
                      className="cats-img"
                      src={this.state.coffee}
                      alt="Loading.."
                    />
                    <button className="mt-5 py-3 btn generate-btn">
                      Get Random Cat Images
                    </button>
                    <div className="share-area row align-items-center justify-content-center">
                      <div className="share-icon twitter">
                        <span>
                          <FaTwitter />
                        </span>
                      </div>
                      <div className="share-icon instagram">
                        <span>
                          <FaInstagram />
                        </span>
                      </div>
                      <div className="share-icon facebook">
                        <span>
                          <FaFacebookF />
                        </span>
                      </div>
                      <div className="share-icon copy-url"><FaShareAlt/></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
        )
    }
}
export default Coffies ;