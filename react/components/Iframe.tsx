import React from 'react'
import { useCssHandles} from "vtex.css-handles"
import { Widget } from '@typeform/embed-react'
import "./styles.css"



const Iframe = () => {
  const CSS_HANDLES = [
    "widget",
    "widget__element"
  ]
  const handles = useCssHandles(CSS_HANDLES)
  return (<div className={handles.widget}>
        <Widget 
          className={handles.widget__element} 
          id="DtUrdO0x" 
          data-tf-opacity="100"
          data-tf-inline-on-mobile 
          data-tf-iframe-props="Solicita una cotización aquí ↓" 
          data-tf-transitive-search-params data-tf-medium="snippet" data-tf-hidden="exponea_cookie=,url=,utm_source=,utm_medium=,utm_campaign=,utm_term=,utm_content=" style={{width:"100%",height:"507px"}}></Widget>  
    </div>
  )
}

export default Iframe

