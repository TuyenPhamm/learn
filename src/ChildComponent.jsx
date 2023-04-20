import React from 'react';

class ChildComponent extends React.Component {
    render() {
        return (
            <div>
                {this.props.renderContent()}
            </div>
        );
    }
}

export default ChildComponent;