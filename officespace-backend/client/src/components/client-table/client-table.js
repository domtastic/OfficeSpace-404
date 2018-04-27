import React, { Component } from 'react';
import './client-table.css';

class ClientTable extends Component {

    constructor(props){
        super(props);

        this.state = {
            files: [{name: 'file1',
            link: 'https://www.google.com/'},
           {name: 'file2',
            link: 'https://www.google.com/'},
           {name: 'file3',
            link: 'https://www.google.com/'},
           {name: 'file4',
            link: 'https://www.google.com/'},
           {name: 'file5',
            link: 'https://www.google.com/'},
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
            <div className="client-table">
                <div className={'client-file-list'}>
                    <div className={'client-list-header'}>
                        <div className={'client-header-content'}>
                            <div className={'client-header-name'}>File Name</div>
                            <div className={'client-spacer-header'}> </div>
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
                                        <div className={'client-file-name'}>{file.name}</div>
                                        <div className={'client-spacer'}> </div>
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
        );
    }
}

export default ClientTable;