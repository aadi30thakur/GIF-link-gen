import React from 'react'
import './App.css'
import Random from './components/Random_v1'
import Tag from './components/Tag_v1'

const  App=()=> {
    return (
        <div className="main text-center text-white">
            <h1>GIF Application</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <Random/>
                    </div>
                    <div className="col-6 ">
                        <Tag/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
