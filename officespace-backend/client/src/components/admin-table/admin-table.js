import React, { Component } from 'react';
import './admin-table.css';

class AdminTable extends Component {

    constructor(props){
        super(props);

        this.state = {
            files: [
{name: 'file1',
 link: 'https://www.google.com/',
 company: 'company1'},
{name: 'file2',
 link: 'https://www.google.com/',
 company: 'company1'},
{name: 'file3',
 link: 'https://www.google.com/',
 company: 'company2'},
{name: 'file4',
 link: 'https://www.google.com/',
 company: 'company2'},
{name: 'file5',
 link: 'https://www.google.com/',
 company: 'company3'},
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
            <div className="admin-table">
                <div className={'admin-file-list'}>
                    <div className={'admin-list-header'}>
                        <div className={'admin-header-name'}>File Name</div>
                        <div className={'admin-header-company'}>Company</div>
                        <div className={'admin-header-link'}>Download</div>
                    </div>
                    <div className={'admin-table-content'}>
                    {
                        files.length ?
                            <div>
                            {
                                files.map((file, index)=>{
                                    return <div key={index} className={'admin-file-list-element'}>
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
        );
    }
}

export default AdminTable;