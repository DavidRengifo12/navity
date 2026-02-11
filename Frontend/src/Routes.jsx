import {BrowserRouter} from 'react-router-dom'
import Login from './Pages/Login'
import Page from './Page'

export default function Routes() {
  return (
    <>
     <BrowserRouter>
        <Page></Page>
     </BrowserRouter> 
    </>
  )
}
