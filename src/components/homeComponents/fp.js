import '../../styles/Fp.css';



function Fp() {
    return (
        <div className="Fp-Section">
            <h1><a href="#" className="fp-text"> Featured Products </a></h1>
            <div className="images">

                <img src="https://images.unsplash.com/photo-1580910530751-a4d68d339cb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGxhZGllcyUyMGNsb3RoZXN8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="image1" className="fpimg1" />
                <img src="https://images.unsplash.com/photo-1564742191034-961da6c0e088?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGhhaXJ8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="fpimg2"/>
                <img src="https://images.unsplash.com/photo-1600102427329-d5b2cde7e162?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRyZXNzfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="image3" className="fpimg3" />

            </div>
        </div>
    );
}


export default Fp;