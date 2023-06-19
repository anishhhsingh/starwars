
import React, {Component} from 'react';
import List from "C:/Users/Anish/vite-react-app/src/List.jsx"
import axios from 'axios';

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            people: [],
        }
        this.getPeople = this.getPeople.bind(this)
;    }
    getPeople(){
        return axios.get("https://swapi.dev/api/people")
        .then((response) => {
            console.log(response.data.results);
            this.setState( { people: response.data.results } )
        })
    }

    componentDidMount(){
        this.getPeople()
    }

    render() {
        const {people} = this.state;
        return (
            <div className='App'>
                <List people = {people} />
            </div>
        );
    }
}

export default App;
