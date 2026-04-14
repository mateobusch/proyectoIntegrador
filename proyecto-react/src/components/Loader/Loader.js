import React, {Component} from "react";

class Loader extends Component {
    render() {
        return (
            <div>
                <p>Cargando...</p>
                <img 
                    src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHd2bXRmN2xmZ3ZpZmh6cG52MGRpdng3bjF3Mm81Z3lydjRzenZraCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/emySgWo0iBKWqni1wR/giphy.gif" 
                    alt="Cargando" 
                    className="img-fluid mb-4" 
                    style={{maxWidth: '300px'}}
                />
            </div>
        );
    }
}
export default Loader;