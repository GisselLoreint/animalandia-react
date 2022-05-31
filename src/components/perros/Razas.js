import './Razas.css';
import ModalRazas from './ModalRazas';

function Razas(props) {
    return (
            <div className='col'>
                <div className='card cont-info'>
                    <img src={props.p2} className='img-card' alt={props.p3} />
                    <div className='card-body'>
                        <h5 className='card-title title-raza'>{props.p3}</h5>
                        <p className='card-text text-d'>{props.p4}</p>
                        <button type="button" class="btn fifth" data-bs-toggle="modal" data-bs-target={`#id${props.p1}`}>
                            Más información
                        </button>
                    </div>
                </div>
                <ModalRazas
                    pm1={`id${props.p1}`}
                    pm2={props.p2}
                    pm3={props.p3}
                    pm4={props.p4}
                    pm5={props.p5}
                    pm6={props.p6}
                    pm7={props.p7}
                    pm8={props.p8} />
            </div>
    );
}

export default Razas;
