import React, { Component } from "react";
import "../styles/watches.css";
import axios from "axios";
import ReactPaginate from "react-paginate";

class Watches extends Component {
  constructor(props) {
    super(props)

    this.state = {
      offset: 0,
      tableData:[],
      orgTableData:[],
      perPage:10,
      currentPage:0,
      // persons:[],
    }
  }


    componentDidMount() {
      this.getData();
    }


  getData(){
    axios.get(`https://jsonplaceholder.typicode.com/comments`)
    .then(res => {
      const data = res.data;
      // console.log(data,"datesa")
      let slice=data.slice(this.state.offset,this.state.offset + this.state.perPage)

      this.setState({
        pageCount: Math.ceil(data.length/ this.state.perPage),
        orgTableData: res.data,
        tableData: slice
        // tableData:slice  -amount specified in perPage
        // tableData:res.data -all data
      })
    })
  }

  render() {
    // console.log(this.state.persons, "heerrrrr")
    return (
      <>
        <h1>Hi</h1>

      <table border="1">
        <thead>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Body</th>
      </thead>

      <tbody>
        {this.state.tableData.map((tdata,i)=>{
           return<tr>
            <td>{tdata.id}</td>
            <td>{tdata.name}</td>
            <td>{tdata.email}</td>
            <td>{tdata.body}</td>
          </tr>
        })}
      </tbody>
      </table>

      <ReactPaginate
         previousLabel="< previous"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
     
        renderOnZeroPageCount={null}
      />
      
      </>
    );
  }
}
export default Watches;
