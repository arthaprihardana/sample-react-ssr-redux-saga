import React, { PureComponent } from 'react';

export default class PageDefault extends PureComponent {

    componentDidMount = () => {
        console.log('PageDefault')
    }

    render() {
        return (
            <div>This is for the main page.</div>
        )
    }
}
