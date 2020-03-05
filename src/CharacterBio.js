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
    console.log(this)
    // console.log(this.props.characters.name)
    console.log(this.props.characters) //this one works
    // console.log(this.props.characters.thumbnail.path)// but this one does not work. 
    // console.log(this.props.characters.comics.available)

    // console.log(this.props.characters.thumbnail.path)
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
                <h3 className='bio-item'>{`Name:`}</h3>
                <div className='bio-item'>{this.props.characters.name}</div>
            </div>
            {/* {thumbUrl} */}
            <div className="char-thumb">
                <div className='bio-item'>
                    <img src='http://i.annihil.us/u/prod/marvel/i/mg/e/20/52696868356a0.jpg' alt='' />
                {/* {this.state.characters.thumbnail} */}
                {/* {`${this.state.characters.thumbnail.path}.${this.state.characters.thumbnail.extension}`} */}
                {/* "http://i.annihil.us/u/prod/marvel/i/mg/e/20/52696868356a0.jpg" */}
                </div>
            </div>
            <div className="char-name">
                <h3 className='bio-item'>#of Comics:</h3>
                {/* <div className='bio-item'>{this.state.characters.comics.items.length}</div> */}
                <div className='bio-item'>113</div>
            </div>
            <div className="char-name">
                <h3 className='bio-item'>Wiki:</h3>
                {/* <div className='bio-item'>{this.state.characters.name}</div> */}
                <a className='bio-item' href="http://marvel.com/universe/Ant-Man_(Scott_Lang)?utm_campaign=apiRef&utm_source=5139be72ea6869ccf8846bbbe6b562ea" >Click Here</a>
            </div>
        </div>
    );
  }
}

export default CharacterBio;


// name: "Ant-Man (Scott Lang)"
// thumbnail:
//     path: "http://i.annihil.us/u/prod/marvel/i/mg/e/20/52696868356a0"
//     extension: "jpg"
// available: 113
// urls: Array(3)
// 0: {type: "detail", url: "http://marvel.com/comics/characters/1010801/ant-ma…piRef&utm_source=5139be72ea6869ccf8846bbbe6b562ea"}
// 1: {type: "wiki", url: "http://marvel.com/universe/Ant-Man_(Scott_Lang)?ut…piRef&utm_source=5139be72ea6869ccf8846bbbe6b562ea"}
// 2: {type: "comiclink", url: "http://marvel.com/comics/characters/1010801/ant-ma…piRef&utm_source=5139be72ea6869ccf8846bbbe6b562ea"}