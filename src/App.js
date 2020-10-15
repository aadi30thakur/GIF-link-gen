import React from 'react'
import './App.css'
import Random from './components/Random_v2'
import Tag from './components/Tag_v2'

const  App=()=> {
    return (
        <div className="main text-center text-white">
            <h1>GIF Application</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 component">
                        <Random/>
                    </div>
                    <div className="col-sm-6  component">
                        <Tag/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
