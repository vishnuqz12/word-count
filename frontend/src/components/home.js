import React,{useState} from "react";
import "./styles/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Img from "./img/cartoon.png";
import axios from "axios";
import {Link} from "react-router-dom";



function Home(){
    
    const [Input,setInput] = useState("");

    function changeInput(event){
         const wordcount = event.target.value.length
        setInput({
            input:event.target.value,
            count:wordcount
        })
    }


    function HandleSubmit(event){
        event.preventDefault()

        const Data = {
            input : Input.input,
            count : Input.count
        }
        axios.post("http://localhost:8000/app/home",Data)
     
    }

//     const navigate = useNavigate();

//     const totalcount=()=>{

//   navigate('/dash',{state:Input});
//     }

    // const history = useHistory();

    // const routeChange = () =>{ 
    //   let path ="/dashboard";
         
    //   history.push(path);
    // }


    

    return(
        <div className="container">
            <div className="header">
                <h2 className="head-name heading">Gl<span>o</span>bex</h2>
                <p className="login">Login</p>
                <div className="button">
                <h4 className="button-name">Signup</h4>
                </div>
              
                </div>
                <div className="details">
                    <h1 className="content">Unable to check your webpage word count?</h1>
                    <p className="content-para">No Worries! <span className="content-globex">Globex</span> Will Guide You!</p>
                </div>

                <div className="img">
                  <img className="image" src={Img} alt="img" ></img>
                </div>

                <div className="footer-title">
                    <p>Check the last time when you checked the webpage word count.</p>
                </div>

                <div className="footer">
                    <form onSubmit={HandleSubmit}>
                        <input className="form-input" name="input" type="text" onChange={changeInput} value={Input.input} placeholder="Put your website URL here." />
                        <Link to={"/dash"}><button type="submit" className="footer-btn" value="submit"   >Get Insight</button></Link>
                        </form>
                </div>

            </div>
         
    )
}



export default Home;
