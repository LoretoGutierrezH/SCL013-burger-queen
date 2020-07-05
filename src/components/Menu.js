import React, { Component } from 'react';
import Product from './Product';
import Contador from './Contador';
import DataMenu from '../DataMenu.json';
import Order from './Order/Order';
import { Route, Redirect } from 'react-router-dom';
import { Table } from 'reactstrap';
class Menu extends Component {
    state = {
      products: [{}],
      total: 0,
      currency: '$'
    }

    newOrder = (event) => {
      let product = {
        ...event.target.value
      };
      let products = [];

      products.push(product);
      console.log(products);
    }


    render(){
      // Uno u otro menú se guarda aquí dependiendo del resultado del if/else if
      let currentMenu = null;
      // Condicional según la propiedad type pasada en App.js al comp. Menu
      if (this.props.type === 'breakfast') {
        let menuArray = Object.entries(DataMenu[0])[0][1].products;
        currentMenu = menuArray.map(product => {
            return (
              <React.Fragment key={product.id}>
                  <Product name={product.nombre} price={product.valor} qty="2"/>
              </React.Fragment>
            )
        })
      } else if (this.props.type === 'lunch-dinner') {
        //Esto es solo de prueba, hay que cambiarlo por el mapeo del menú almuerzo/cena
        currentMenu = (
              <React.Fragment key="alm5">
                  <Product name="almuercito 1" price="$1000" qty="2"/>
              </React.Fragment>
        );
      }

        return (
          <React.Fragment>
          
            <Table borderless>
                  <thead>
                    <tr>
                      <th>Producto</th>
                      <th>Valor</th>
                      <th>Cantidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentMenu}
                  </tbody>
          </Table>
          </React.Fragment>
        );
    }  
}
export default Menu;