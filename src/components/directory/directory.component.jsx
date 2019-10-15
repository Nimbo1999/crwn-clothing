import React from 'react';

import MenuItem from '../menu-item/menu-item.component'
import DirectoryData from './directory.data'
import './directory.styles.scss'

class Directory extends React.Component {

    constructor(){
        super();
        this.state = {
            sections : DirectoryData
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map( ({ id, ...othersSectionProps }) => (
                    <MenuItem key={ id } {...othersSectionProps} />
                ))}
            </div>
        )
    }

}

export default Directory;
