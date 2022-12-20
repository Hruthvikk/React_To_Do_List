// StAuth10244: I Hruthvik Chokshi, 000813765 certify that this material is my original work.
//  No other person's work has been used without due acknowledgement.
//  I have not made my work available to anyone else.
import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component
{   

  constructor(props)
  {
    super(props);
    this.state = {
      newItem: "",
      output: "",
      list: [{id: 1, body: "Go to gym at 7am"},
             {id: 2, body: "Go to work at 9am"},
             {id: 3, body: "Buy Grocery list while returning from work"},
             {id: 4, body: "Have doctors appointment on 25th March "},
             {id: 5, body: "Drive test on 1st april."}],
      newList: []
    };
  }
  
  stateChange(event){
    this.setState({newItem: event.target.value})
  }

  addItem(e)
  {
    e.preventDefault();
    let {list} = this.state;

    list.push({
      id: list ? list.length + 1 : 0,
      body: this.state.newItem
    });

    this.setState({
      list,
      newItem: ""
    })
  }

  deleteItem(id) {
    this.setState({
      list: this.state.list.filter( listItem => listItem.id !== id,
        ),
    });
  }

  deleteAll()
  {
    this.setState({
      list: []
    });
  }

  changeBtnText()
  {   
    document.getElementById("addBtn").innerHTML = "Edit";
    
     
  }

 edit(){
    let {list} = this.state;

    list.push({
      id: list ? list.length + 1 : 0,
      body: this.state.newItem
    });

    this.setState({
      list,
      newItem: ""
    })

  } 
  editItem(li)
  {
    
    
    {
      this.setState({newItem: li.body})
      
    }
    this.changeBtnText();
  }

  renderList(listItem){
    return (   
      <li key={listItem.id}>
        {listItem.body}{ '    '} 
        
        <button  onClick={this.editItem.bind(this, listItem)}> Edit </button> { '    '}
        <button onClick={this.deleteItem.bind(this, listItem.id)}> Delete </button>
      </li>
      );
  }

  
  render()
  {
    return(
      <div className='container'>
        
          <h1> MY TO DO LIST </h1>

          <form>
            <input type="text" onChange={this.stateChange.bind(this)} value={this.state.newItem} />
            {'            '}
            
            <button id="addBtn" onClick={this.addItem.bind(this)}> Add to the list </button>
            <br/>
          </form>


          <h2> Your List: </h2>
            <ol>
              {this.state.list.map(this.renderList.bind(this))}
            </ol>
          <br/>

          <button className='btn' onClick={this.deleteAll.bind(this)}> Delete All items </button>
      </div>
    );
  }
}

export default App;
