import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"

class App extends React.Component() {
  constructor(props){
    super(props)
    this.state = {
      items: [
          {
            id: 1,
            title: 'Haram',
            img: 'walter_haram.png',
            desc: 'Haram',
            category: 'Breaking_Bad',
            price: 'one halon of super milk'
          },
          {
            id: 2,
            title: 'Super Earth',
            img: 'Super_Earth.jpg',
            desc: 'Our home. Liberty, Prosperity, Democracy - our way of live',
            category: 'Helldivers_2',
            price: 'cup of liber-tea'
          }
      ]
    }
  }
  render() {
    return (
      <div className='wrapper'>
        <Header/>
        <Items items={this.state.items} />
        <Footer/>
      </div>
    )
  }
}

export default App;
