import React, { Component } from 'react';

import {Container, Row, Col, Card, CardTitle, CardBody} from 'reactstrap';
import _ from "lodash";
import {makeData} from "./utils";

import ReactTable from "react-table";
import "react-table/react-table.css";
const rawData = makeData();

const requestData = (pageSize, page, sorted, filtered) => {
  return new Promise((resolve, reject) => {
    let filteredData = rawData;

    if (filtered.length) {
      filteredData = filtered.reduce((filteredSoFar, nextFilter) => {
        return filteredSoFar.filter(row => {
          return (row[nextFilter.id] + "").includes(nextFilter.value);
        });
      }, filteredData);
    }
    const sortedData = _.orderBy(
      filteredData,
      sorted.map(sort => {
        return row => {
          if (row[sort.id] === null || row[sort.id] === undefined) {
            return -Infinity;
          }
          return typeof row[sort.id] === "string"
            ? row[sort.id].toLowerCase()
            : row[sort.id];
        };
      }),
      sorted.map(d => (d.desc ? "desc" : "asc"))
    );

    const res = {
      rows: sortedData.slice(pageSize * page, pageSize * page + pageSize),
      pages: Math.ceil(filteredData.length / pageSize)
    };

    setTimeout(() => resolve(res), 500);
  });
};


class FileTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      pages: null,
      loading: true,

      selected:{},
      selectAll: 0,
     data:[],
       };
       this.toggleRow=this.toggleRow.bind(this);
           this.fetchData = this.fetchData.bind(this);

     
     
    
  }


  toggleRow(companyName){
    const newSelected = Object.assign({}, this.state.selected);
    newSelected[companyName]= !this.state.selected[companyName];
    this.setState({
      selected: newSelected,
      selectAll: 2
    });
  }

  toggleSelectAll(){
    let newSelected ={};

    if(this.state.selectAll === 0){
      this.state.data.forEach(x =>{
        newSelected[x.companyName] = true;
      });
    }
    this.setState({
      selected: newSelected,
      selectAll: this.state.selectAll === 0 ? 1 : 0
    });
  }

toggleSelected(){
  let newSelected={};

  if(this.state.selected === 0){
    this.state.data.forEach(x => {
      newSelected[x.companyName] === true;
    });
  }
}
  
  fetchData(state, instance) {
    this.setState({ loading: true });
    requestData(
      state.pageSize,
      state.page,
      state.sorted,
      state.filtered,

    
    ).then(res => {

      this.setState({
        data: res.rows,
        pages: res.pages,
        loading: false,
        
      });
    });
  }
  render() {


    const { data, pages, loading } = this.state;
    const columns = [
    {

      Header: "",
      columns:[
      {
        id: "checkbox",
              accessor: "",
              Cell: ({ original }) =>{
                return(
                <input
                 type="checkbox" 
                className="checkbox"
                checked={this.state.selected[original. companyName] === true}
                onChange={() => this.toggleRow(original.companyName)}
                />
                );
              },

             
              Header: x =>{
                return(
                  <input 
                  type="checkbox"
                  className="checkbox"
                  checked={this.state.selectAll === 1}
                  ref={input => {
                    if(input) {
                      input.indeterminate = this.state.selectAll === 2;


                    }

                    
                  }}
                  onChange ={() => this.toggleSelectAll()}

                 /> 
                  );
              },
              sortable: false,
              width: 45
            },


     
            {

            
              Header: "Company Name",
              accessor: "companyName"
            },

  
    {
              Header: "File Name",
              id: "fileName",
              accessor: d => d.fileName
            },
      {
        Header: "Date",
        accessor: "Date"
      }
      
    
    ]
  }
  ];


            
           
         
    return (
     <Container fluid>
      <Row gutter={16}>
      <Col md={4} lg={4} xs={4}/>
      <Card style={{height:"100%", width:"60%", marginTop:"-50px", marginBottom:"-150px"}}> 

      <CardTitle>Received Files</CardTitle>
      <CardBody style={{backgroundColor:"#E0DFE9"}}>
      <div style={{width:"100%", backgroundColor:"white"}}>
      
        <ReactTable
        manual
        data={this.state.data}
        columns={columns}
                  defaultPageSize={5}
                   loading={loading} 
          onFetchData={this.fetchData} 
          filterable
          className="-striped -highlight"
        defaultSorted={[{ id: "companyName", desc: false}]}
        />
        </div>
        
        <br />
         
      
      </CardBody>
     </Card>
     </Row>
          <Row gutter={24}>


    <Card style={{height:"100%", width:"60%"}}> 

      <CardTitle>Sent Files</CardTitle>
      <CardBody style={{backgroundColor:"#E0DFE9"}}>
      <div style={{width:"100%", backgroundColor:"white"}}>
      
        <ReactTable

      data={this.state.data}
        columns={columns}
          defaultPageSize={5}
          loading={loading} 
          onFetchData={this.fetchData} 
          filterable
          className="-striped -highlight"
        defaultSorted={[{ id: "companyName", desc: false}]}
        />
         
      </div>
      </CardBody>
     </Card>
    </Row>
    </Container>
    

    );
  }
}



export default FileTable;
