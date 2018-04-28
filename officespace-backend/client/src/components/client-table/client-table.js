import React, { Component } from 'react';
import {Card, CardHeader, Label, Input} from 'reactstrap';
import './client-table.css';

class IniTECH extends Component {

    constructor(props){
        super(props);

        this.state = {
            files: [{name: 'b_lumbergh1.gif',
            link: 'https://s3.us-east-2.amazonaws.com/geo-firm/iniTECH/b_lumbergh1.gif'},
           {name: 'initech.jpg',
            link: 'https://s3.us-east-2.amazonaws.com/geo-firm/iniTECH/initech.jpg'},
           {name: 'OfficeSpace-Milton.jpg',
            link: 'https://s3.us-east-2.amazonaws.com/geo-firm/iniTECH/OfficeSpace-Milton.jpg'},
           {name: 'the-bobs.jpg',
            link: 'https://s3.us-east-2.amazonaws.com/geo-firm/iniTECH/the-bobs.jpg'},
           {name: 'Tps_report.png',
            link: 'https://s3.us-east-2.amazonaws.com/geo-firm/iniTECH/Tps_report.png'},
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
            <div className="client-table">
                <div className={'client-file-list'}>
                <h1>iniTECH</h1>
                    <div className={'client-list-header'}>
                        <div className={'client-header-content'}>
                            <div className={'client-header-name'}>File Name</div>
                            <div className={'client-header-link'}>Download</div>
                        </div>
                    </div>
                    <div className={'client-table-content'}>
                    {
                        files.length ?
                            <div>
                            {
                                files.map((file, index)=>{
                                    return <div key={index} className={'client-file-list-element'}>
                                       <div className={'admin-header-checkbox'}><input type="checkbox" className="form-check-input" id="checkbox" /></div>
                                        <div className={'client-file-name'}>{file.name}</div>
                                        <div className={'client-file-link'}>
                                            <a href={file.link} target={'_blank'}>
                                                <img className={'download-icon'} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcvjq0LFSK9kCFyLXrV156UMH00xUKWeEdR-OeY15rIKBix8ez'}/>
                                            </a>
                                        </div>
                                    </div>
                                })
                            }
                            </div>: null
                    }
                    </div>
                </div>
            </div>
            </Card>
        );
    }
}

export default IniTECH;