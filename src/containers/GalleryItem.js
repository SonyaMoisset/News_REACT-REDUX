import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectedGallery, clearSelectedGallery } from '../actions'
import { bindActionCreators } from 'redux'

class GalleryItem extends Component {

    componentDidMount() {
        this.props.selectedGallery(this.props.match.params.id)
    }

    componentWillUnmount() {
        this.props.clearSelectedGallery()
    }

    render() {
        return (
            <div>
                Gallery Item
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        gallery: state.gllery
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectedGallery, clearSelectedGallery }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryItem)