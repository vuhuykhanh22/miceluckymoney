import React, { Component } from 'react'
import { Modal, Button, Image } from 'react-bootstrap'
export default class Envelope extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: '',
            show: false,
            gallery: '',
            open: false
        }
    }
    reloadPage() {
        window.setTimeout(function(){window.location.reload()}, 300);
    }
    randomPrice() {
        const imageArray = ['1', '2', '3'];
        const random = imageArray[Math.floor(Math.random() * imageArray.length)];
        const priceArray = ['500k', '200k', '200k', '100k', '100k', '100k', '100k','50k','50k','50k','50k','50k'];
        const rand = priceArray[Math.floor(Math.random() * priceArray.length)];
        const index = priceArray.indexOf(this);
        priceArray.splice(index,1);

        this.setState({
            price: rand,
            show: true,
            gallery: random,
            open: true

        });
    }

    handleClose() {
        this.setState({ show: false});
        this.reloadPage();
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
             <div className='col-6 col-sm-3 mb-4 mobile'>
                <div className='ui-envelope rounded' onClick={() => this.randomPrice()}>
                    <div className='ui-price'><span>{this.state.price}</span></div>
                </div>
                {this.state.show ?
                    <div className="ui-notice">
                        <Modal.Dialog>
                            <Modal.Body className='text-center'>
                                <p>Chúc mừng bạn đã nhận được {this.state.price} từ bao lì xì</p>
                                <Image src={require('../Images/happy-' + this.state.gallery + '.gif')} height={300} alt="happy-gif" />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button className='ui-close-btn' bsStyle="danger" onClick={() => this.handleClose()}>Đóng</Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </div>
                    : null
                }
            </div>
        

        )
    }
}
