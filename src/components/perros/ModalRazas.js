import './Razas.css';

function ModalRazas(props) {
    return (
        <div className="modal fade" id={props.pm1} tabindex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content modal-perros">
                    <div className="modal-header">
                        <h5 className="modal-title title-modal" id="exampleModalLabel">{props.pm3}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body cont-info">
                        <img src={props.pm6} className='card-img-top img-modal' alt={props.pm3}/>
                        <p className='info-acerca'>{props.pm5}<br/>
                        <strong>Pais: </strong> {props.pm7}<br/><strong>Promedio de vida: </strong>{props.pm8}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn fifth" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ModalRazas;