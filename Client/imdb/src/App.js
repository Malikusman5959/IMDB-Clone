import { useState } from "react"
import {Navbar} from "./components/Navbar"
import Search from "./components/Search"
import ProductPage from "./components/ProductPage"
import cover from "./imgs/cover.jpg"

function App() {
  
    const [layout, setLayout] = useState ({home:true ,search:false , productPage:false})
    const [searchState, setSearchState] = useState({keyword:"", by:"title"})
    const [productDetails, setProductDetails] = useState({})

  return (
    <div className="App" >
      <Navbar cntlr = {setLayout} searchCntlr = {setSearchState}></Navbar>
      {layout.home && <img style={{width: '100%'}} src={cover} />}
      {layout.search && searchState.keyword.length != 0 && <Search keyword={searchState} cntlr = {setLayout} productCntlr={setProductDetails}></Search>}
      {layout.productPage && <ProductPage details = {productDetails} lytCntlr = {setLayout}></ProductPage> }
    </div>
  );
}

export default App;
