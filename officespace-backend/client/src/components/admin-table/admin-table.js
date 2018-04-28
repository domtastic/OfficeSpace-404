import React, { Component } from 'react';
import {Card, CardHeader, Label, Input} from 'reactstrap';
import './admin-table.css';

class AdminTable extends Component {

    constructor(props){
        super(props);

        this.state = {
            files: [{name: 'b_lumbergh1.gif',
            company: 'iniTECH',
            link: 'https://s3.us-east-2.amazonaws.com/geo-firm/iniTECH/b_lumbergh1.gif'},
           {name: 'initech.jpg',
           company: 'iniTECH',
            link: 'https://s3.us-east-2.amazonaws.com/geo-firm/iniTECH/initech.jpg'},
           {name: 'OfficeSpace-Milton.jpg',
           company: 'iniTECH',
            link: 'https://s3.us-east-2.amazonaws.com/geo-firm/iniTECH/OfficeSpace-Milton.jpg'},
           {name: 'the-bobs.jpg',
           company: 'iniTECH',
            link: 'https://s3.us-east-2.amazonaws.com/geo-firm/iniTECH/the-bobs.jpg'},
           {name: 'Tps_report.png',
           company: 'iniTECH',
            link: 'https://s3.us-east-2.amazonaws.com/geo-firm/iniTECH/Tps_report.png'},
            {name: 'Chevron_Logo.png',
            company: 'Chevron',
            link: 'https://s3.us-east-2.amazonaws.com/geo-firm/Chevron/Chevron_Logo.png'},
           {name: 'chevron_oil.jpg',
           company: 'Chevron',
            link: 'https://s3.us-east-2.amazonaws.com/geo-firm/Chevron/chevron_oil.jpg'},
           {name: 'chevronconfirms.jpg',
           company: 'Chevron',
            link: 'https://s3.us-east-2.amazonaws.com/geo-firm/Chevron/chevronconfirms.jpg'},
            ],
        };

    }

    // componentDidMount(){
    //     const {files} = this.props;

    //     console.log('files mounted', files);
    //     this.setState({
    //         files: files,
    //     });
    // }

    render() {
        const files = this.state.files;
            return (
                <Card id="cardTable">
                <CardHeader id="clientFiles"><h3 style={{color:"white"}}>Most Recent Files</h3></CardHeader>
                <div className="admin-table">
                <div className={'admin-file-list'}>
                 <div className={'admin-list-header'}>
                  <div className={'admin-header-name'}>File Name</div>
                            <div className={'admin-header-company'}>Company Name</div>
                            <div className={'admin-header-link'}>Download</div>
                        </div>
                        <div className={'admin-table-content'}>
                        {
                            files.length ?
                                <div>
                                {
                                    files.map((file, index)=>{
                                        return <div key={index} className={'admin-file-list-element'}>
                                         <div className={'admin-header-checkbox'}><input type="checkbox" className="form-check-input" id="checkbox" /></div>
                                            <div className={'admin-file-name'}>{file.name}</div>
                                            <div className={'admin-file-company'}>{file.company}</div>
                                            <div className={'admin-file-link'}>
                                                <a href={file.link} target={'_blank'}>
                                                <img className={'download-icon'} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcvjq0LFSK9kCFyLXrV156UMH00xUKWeEdR-OeY15rIKBix8ez'}/>
                                                </a>
                                            </div>
                                        </div>
                                    })
                                }
                                </div>
                             : null
                        }
                        </div>
                    </div>
                </div>
                </Card>
            );
        }
    }
    export default AdminTable;