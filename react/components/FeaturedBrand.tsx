
/*import React, {useEffect, useState} from 'react'
import Iframe from './Iframe'
//import { asyncGetCall } from './fetchData'
//import axios from "axios"
const FeaturedBrand = () => {
  interface Properties {
    name:string
  }
  const pathName= window.location.pathname.substring(1)
  //console.log(pathName)

  let [state, setState] = useState([])
  let [info, setInfo] = useState([{
    title:"",
    metaTagDescription:""
  }])

async function asyncGetCall(){
          const response = await fetch('https://landing--repuestodo.myvtex.com/api/catalog_system/pvt/brand/list', {
           method: 'GET',
           headers: {
             'Content-Type': 'application/json',
             'VtexIdclientAutCookie':'eyJhbGciOiJFUzI1NiIsImtpZCI6IjkyNjExNThEN0QzNDJGMDQ3MUNDNjQxNzExQTIzQTBFMDhDNTY3OEIiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiJkaWVnby5jYXJjYXVzdG9AaXRnbG9iZXJzLmNvbSIsImFjY291bnQiOiJyZXB1ZXN0b2RvIiwiYXVkaWVuY2UiOiJhZG1pbiIsInNlc3MiOiJjMzQyZTg3MC0yNjM2LTQ1NmUtYTc0Yy0yZDBlODU0MTMzMGUiLCJleHAiOjE2ODMxNDc1NzEsInVzZXJJZCI6ImU3YTNlMDNlLWJlNDAtNDY4OS05YWVjLTFhZGJhNWNjMDY4ZiIsImlhdCI6MTY4MzA2MTE3MSwiaXNzIjoidG9rZW4tZW1pdHRlciIsImp0aSI6IjU3MTMxMDJiLTFjMjUtNDJmZS1hZDU4LTljMDNhNDI1ZjcxNCJ9.nxc4Hk_ENWK9GqcsYVbmiW49RztbNychSW0GopWZfn3bRTwDHfndx9tKepLhhqFrayKgNCjJd-Ha18ioIUCTYw'
             },
           });
           let data = await response.json();
           setState(data)
           
  }
useEffect(()=>{
  console.log(info)
  asyncGetCall()
},[])
//console.log(state)
// HASTA ACA BIEN


async function asyncFilter(){
  try {
  let estado =  [...state].filter((e:Properties)=>(e.name).toLowerCase()===pathName)
  setInfo(estado)
  } catch(e){
    console.log(e,"error")
  }

}
asyncFilter()

      return (
          <Iframe></Iframe>
      )
    }

export default FeaturedBrand*/
{/*<div>
          {info[0]? 
            info[0].title
                      ?<p>Repuestos para {info[0].title}</p>
                      :<p></p>:<p></p>}

          {info[0]? 
            info[0].title
                      ?<p>{info[0].metaTagDescription}</p>
                      :<p></p>:<p></p>}
          </div>*/}