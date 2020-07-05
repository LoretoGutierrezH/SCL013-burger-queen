import React, { Component } from 'react';
import Product from './Product';

import DataMenu from '../DataMenu.json';


import { Table } from 'reactstrap';
class Menu extends Component {
    state = {
    }
    render(){
      let menuBreakfast = null;
      let menuLunchDinner = null;
      let menuArray = null;
      if (window.location.href === "http://localhost:3000/mesero/menu-desayuno"){
        menuArray = Object.entries(DataMenu[0])[0][1].products;
        menuBreakfast = menuArray.map(product => {
            return (
              <React.Fragment key={product.id}>
                  <Product name={product.nombre} price={product.valor} qty="2"/>
                   {/*  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{product.valor}</span> */}
              </React.Fragment>
            )
        })
      }
       /*este es el comentario de carla*/
        return (
          <React.Fragment>
            <Table borderless>
                  <thead>
                    <tr>
                      <th>Producto</th>
                      <th>Valor</th>
                      <th>cantidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {console.log(menuBreakfast)}
                    {menuArray}
                  </tbody>
          </Table>
          </React.Fragment>
        );
    }
}
export default Menu;
