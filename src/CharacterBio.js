import React, { Component } from 'react';
import './App.css';

// import { render } from '@testing-library/react';
class CharacterBio extends Component {

    state = {
        charName: this.props.characters.name,
        charThumb: this.props.characters.thumbnail,
        // charNumComics: this.props.characters.comics.items.length


    }


  render(){
    console.log('CharacterBio Component')
    // console.log(this.props.characters.name)
    console.log(this.props.characters.thumbnail)
    console.log(this.props.characters.comics.available)


    // const thumbUrl = this.props.characters.thumbnail.map((thumb, index) => {
    //     console.log(thumb)
    //     // return (
    //     //     <>
    //     //     <div className='bio-item'>
    //     //         {`${thumb.path}.${thumb.extension}`}
    //     //     </div>
    //     //     </>
    //     // )
    // })

    return (
        <div>BIO
            <div className="char-name">
                <div className='bio-item'>Name:</div>
                <div className='bio-item'>{this.state.charName}</div>
            </div>
            {/* {thumbUrl} */}
            {/* <div className="char-thumb">
                <img>IMAGE</img>
                <div className='bio-item'>Thumb</div>
                <div className='bio-item'>
                {this.state.characters.thumbnail}
                {`${this.state.characters.thumbnail.path}.${this.state.characters.thumbnail.extension}`}
                </div>
            </div>
            <div className="char-name">
                <img>IMAGE</img>
                <div className='bio-item'>#of Comics:</div>
                <div className='bio-item'>{this.state.characters.comics.items.length}</div>
            </div>
            <div className="char-name">
                <img>IMAGE</img>
                <div className='bio-item'>Name:</div>
                <div className='bio-item'>{this.state.characters.name}</div>
            </div> */}
        </div>
    );
  }
}

export default CharacterBio;
