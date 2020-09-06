import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      dream:'',
      name:'',
      currentItem:{
        text:'',
        dreams:'',
        key:''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleInput1 = this.handleInput1.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !=="" && newItem.dreams!==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      name:'',
      dream:'',
      currentItem:{
        text:'',
        dreams:'',
        key:''
      }
    })
    }
  }
  handleInput(e){
    this.setState({
      name:e.target.value
    })
  }
  handleInput1(e){
    this.setState({
      currentItem:{
        text:this.state.name,
        key:Date.now(),
        dreams:e.target.value
      }
    })
  }
  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })

  }
  setUpdate(text,key){
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        console.log(item.key +"    "+key)
        item.text= text;
      }
    })
    this.setState({
      items: items
    })
    
   
  }
 render(){
  return (
    <div className="App">
      <header>
       <span className='header'> <h3> What did you dream about last Night??</h3></span>
        <form id="to-do-form" onSubmit={this.addItem}>
         <span className='label'>Your Name:- </span><input type="text" placeholder="Enter Name" value= {this.state.name} onChange={this.handleInput}></input>
         <span className='label'>Your Dream:- </span><input type="text" placeholder="Enter Dream" value= {this.state.currentItem.dreams} onChange={this.handleInput1}></input>
          <button type="submit">Add</button>
        </form>
        <p>{this.state.items.text}</p>
        
          <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
        
      </header>
    </div>
  );
 }
}


export default App;
