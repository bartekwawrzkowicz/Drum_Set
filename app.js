import Picture from './resources/photo'



class Application extends React.Component {




    render() {
        return (
            <>
                <h1>DRUM SET</h1>
                <img src={Picture} />

            </>
        )
    }
}

ReactDOM.render(<Application />, document.getElementById('root'))