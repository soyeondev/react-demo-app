import React, {Component} from 'react';

class TOC extends Component {
    shouldComponentUpdate(newProps, newState){
      // 성능을 더 높어야하는 상황이 아니라면 shouldComponentUpate를 사용하지 않아도 될것같다(?)
      console.log('===>TOC render shouldComponentUpdate'
      ,newProps.data
      ,this.props.data
      );
      if(this.props.data === newProps){
        return false;
      }
      return true;
    }
    render (){
      console.log('===>TOC render')
      var lists = []
      var data = this.props.data;
      var i = 0;
      while(i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a 
            href={"/content/"+data[i].id}
            data-id={data[i].id}
            onClick={function(e){
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
          >{data[i].title}</a></li>);
        i = i + 1;
      }
      return (
        <nav>
          <ul>
            {lists}    
          </ul>
        </nav>
      );
    }
  }

  export default TOC;