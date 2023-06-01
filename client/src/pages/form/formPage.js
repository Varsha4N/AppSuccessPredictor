import React from "react";
import NavbarAuth from "../../components/nav-bar/nav-bar-auth";
import Axios from 'axios'
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './form.css'

function FormPage (){

  const navigate = useNavigate()

    const [loginStatus,setLoginStatus]=useState('')

    const [appName, setAppName] = useState('');
     const [Appcategory, setCategory] = useState('EDUCATIONAL');
     const [appSize, setAppSize] = useState('');
    const [appType, setAppType] = useState('0');
    const [appPrice, setAppPrice] = useState('');
    const [ageRating, setAgeRating] = useState('');
    const [Appdescription, setDescription] = useState('');
    const [error,setError]=useState('')
    //const [score,setScore]=useState(0)


  const predict = ()=>{

    const type = parseInt(appType)
    const size = parseFloat(appSize)
   const price=parseFloat(appPrice)
   const rating = parseInt(ageRating)
   //const score = 10
   const category = Appcategory
   const description = Appdescription.replaceAll(" ","_")

   Axios.get(`http://127.0.0.1:5000/score?size=${size}&category=${category}&type=${type}&price=${price}&rating=${rating}&description=${description}`,{
    withCredentials: true
  }).then((response)=>{
    const score = response.data.score
    if(score){
      console.log(response)
      console.log(score)

      Axios.post(`http://localhost:3001/userquery`,{
          app : appName,
        category: category,
        size:size,
        type : type,
        price : price,
        contentrating : rating,
        description : description,
        score : score
          
        }).then((res)=>{
            console.log(res)
            navigate(`/result/${score}`)

          //navigate('/home')
          // window.location.replace(`http://localhost:3000/result/${score}`)
          // console.log("api call")
        })

    }
    else{
      setError("Something went wrong please try later")
    }
   
  })



    if(appName===''|| appSize==='' || ageRating==='' ||appPrice===''|| Appdescription===''){
      setError("Please enter valid inputs")
     }
     else{
      
      
     
     // description = description.replace(" ", "_")

       console.log({
          appName,
          category,
          size,
          type,
          price,
          rating,
          description
         });
        

       
      }

  }

    const handleSubmit = (e) => {
      e.preventDefault();
    // Perform any desired actions with the form data here
    // For example, send the data to the server or perform local calculations
       if(appName===''|| appSize==='' || ageRating==='' ||appPrice===''|| Appdescription===''){
        setError("Please enter valid inputs")
       }
       else{
        
        
          const type = parseInt(appType)
          const size = parseFloat(appSize)
         const price=parseFloat(appPrice)
         const rating = parseInt(ageRating)
         const score = 10
         const category = Appcategory
         const description = Appdescription
        description = description.replace(" ", "_")

         console.log({
            appName,
            category,
            size,
            type,
            price,
            rating,
            description
           });
         //setScore(10)
        //  navigate(`/result/${score}`)
        // Axios.post(`http://localhost:3001/userquery`,{
        //   app : appName,
        // category: category,
        // size:size,
        // type : type,
        // price : price,
        // contentrating : rating,
        // description : description,
        // score : score
          
        // }).then((res)=>{
        //     console.log(res)

        //   navigate('/home')
        //   // window.location.replace(`http://localhost:3000/result/${score}`)
        //   // console.log("api call")
        // })
        // // window.location.replace(`http://localhost:3000/result/${score}`)
        // Axios.get(`http://127.0.0.1:5000/score?size=12345&category=FOOD&type=1&price=3&rating=12&description=Run_for_your_life_to_escape_the_Evil_Demon_Monkeys`).then((Response)=>{
          
        //   setScore(Response.data.score)
        //   if(score){
        //     Axios.post(`http://localhost:3001/userquery`,{
        //       app : appName,
        //     category: category,
        //     size:size,
        //     type : appType,
        //     price : price,
        //     contentrating : rating,
        //     description : description,
        //     score : score
              
        //     })
             
        //   }
        // })


       }

      };
      const handleAppTypeChange = (e) => {
        setAppType(e.target.value==='paid' ? 1 : 0);
      };

      const handleCategoryChange=(e)=>{
        setCategory(e.target.value);
      }


    

    return (
        <div className="black">
        <NavbarAuth/>
        <div className="align-center">

        

        <div className="form background-box">

            
                <h1>App Details</h1>
                <table>

                <tr>
                
                    <td>

                    
                    <label>App Name</label>
                    </td>
                    <td>
                    <input  type="text"  onChange={(e)=>{ setAppName(e.target.value) }}/>
                    </td>

                
                </tr>
                <tr>
                
                    <td>
                    <label>category</label>
                    </td>
                    <td>
                      <select value={Appcategory} onChange={handleCategoryChange}>
                        <option value="EDUCATION">EDUCATION</option>
                        <option value="MEDICAL">MEDICAL</option>
                        <option value="VIDEO_PLAYERS">VIDEO_PLAYERS</option>
                        <option value="FAMILY">FAMILY</option>
                        <option value="PERSONALIZATION">PERSONALIZATION</option>
                        <option value="PHOTOGRAPHY">PHOTOGRAPHY</option>
                        <option value="TOOLS">TOOLS</option>
                        <option value="GAME">GAME</option>
                        <option value="PRODUCTIVITY">PRODUCTIVITY</option>
                        <option value="BOOKS_AND_REFERENCE">BOOKS_AND_REFERENCE</option>
                        <option value="COMMUNICATION">COMMUNICATION</option>
                        <option value="AUTO_AND_VEHICLES">AUTO_AND_VEHICLES</option>
                        <option value="BUSINESS">BUSINESS</option>
                        <option value="SPORTS">SPORTS</option>
                        <option value="WEATHER">WEATHER</option>
                        <option value="DATING">DATING</option>
                        <option value="FINANCE">FINANCE</option>
                        <option value="NEWS_AND_MAGAZINES">NEWS_AND_MAGAZINES</option>
                        <option value="MAPS_AND_NAVIGATION">MAPS_AND_NAVIGATION</option>
                        <option value="HOUSE_AND_HOME">HOUSE_AND_HOME</option>
                        <option value="LIFESTYLE">LIFESTYLE</option>
                        <option value="FOOD_AND_DRINK">FOOD_AND_DRINK</option>
                        <option value="HEALTH_AND_FITNESS">HEALTH_AND_FITNESS</option>
                        <option value="TRAVEL_AND_LOCAL">TRAVEL_AND_LOCAL</option>
                        <option value="BEAUTY">BEAUTY</option>
                        <option value="SOCIAL">SOCIAL</option>
                        <option value="SHOPPING">SHOPPING</option>
                        <option value="EVENTS">EVENTS</option>
                        <option value="LIBRARIES_AND_DEMO">LIBRARIES_AND_DEMO</option>
                        <option value="COMICS">COMICS</option>
                        <option value="PARENTING">PARENTING</option>
                        <option value="ART_AND_DESIGN">ART_AND_DESIGN</option>
                        <option value="ENTERTAINMENT">ENTERTAINMENT</option>
                      </select>
                    
                    </td>

                
                </tr>
                <tr>
                
                    <td>
                    <label>App Size</label>
                    </td>
                    <td>
                    <input type="text"  onChange={(e)=>{ setAppSize(e.target.value)}}/>
                    </td>
                
                </tr>
                <tr>
                
                    <td>
                    <label>App Type</label>
                    </td>
                    <td>
                    {/* <input type="text"  onChange={(e)=>{ setAppType(e.target.value)}}/> */}
                    <select value={appType} onChange={handleAppTypeChange}>
                      <option value= '0'>Free</option>
                      <option value='1'>Paid</option>
                    </select>
                    </td>
                
                </tr>
                <tr>
                
                    <td>
                    <label>App Price</label>
                    </td>
                    <td>
                    <input type="text"  onChange={(e)=>{ setAppPrice(e.target.value)}}/>
                    </td>
                
                </tr>
                <tr>
                
                    <td>
                    <label>Age Rating</label>
                    </td>
                    <td>
                    <input type="text"  onChange={(e)=>{ setAgeRating(e.target.value)}}/>
                    </td>
                
                </tr>
                <tr>
                
                    <td>
                    <label>App description</label>
                    </td>
                    <td>
                      <textarea onChange={(e)=>{ setDescription(e.target.value)}}/>
                    </td>
                
                </tr>
                </table>
                
                
               

                {(error !== "") ? <div className="error">{error}</div> : ""}
                <button className="login-button button" onClick={predict}>Predict Score</button>

                

            </div>
            </div>

    </div>
    )
}


export default FormPage;