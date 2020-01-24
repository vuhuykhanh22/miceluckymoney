import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { Modal, Button, Image } from 'react-bootstrap';
export default class LuckyMoney extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elementID: '',
            addClass: false,
            price: null,
            show: false,
            gallery: null,
            open: false,
            array: ['mickey','rattata','gus','gonzales','rhino', 'tuffy', 'pikachu', 'ratatouille', 'jag', 'jerry', 'perla', 'timothy', 'minie','stuart','white'],
            priceArray: ['500k','200k','200k', '200k','100k','100k', '100k', '100k', '100k','50k', '50k', '50k', '50k', '50k', '50k']
        }
    }

    combineFunction = (index) => {
        this.paragraphAppear(index)
        this.randomPrice()
        this.removeItem(index)
    }
    removeItem = (index) => {
        setTimeout(() => {
            this.setState({
                addClass: false,
                array: this.state.array.filter((_, i) => i !== index)
            });
        }, 3000);
    }

    randomPrice = () => {
        const imageArray = ['1', '2', '3'];
        const random = imageArray[Math.floor(Math.random() * imageArray.length)];
        const rand = this.state.priceArray[Math.floor(Math.random() * this.state.priceArray.length)];
        const index = this.state.priceArray.indexOf(rand);
        this.state.priceArray.splice(index, 1);
        console.log(this.state.priceArray)
        console.log(index)
        this.setState({
            price: rand,
            show: true,
            gallery: random,
            open: true
        });
    }

    paragraphAppear = (elementID) => {
        this.setState({
            addClass: !this.state.addClass,
            elementID: elementID
        });
    };

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }
    render() {
        let images = this.state.array.map((image, index) => {
            return <div className='col-6 col-sm-3 mb-4 mobile'><Image onClick={() => this.combineFunction(index)} src={require(`../Mice/${image}.png`)} alt="info" className={(this.state.addClass && (this.state.elementID === index))
                ? 'mice spinner'
                : 'mice'} /></div>
        });
        return (
            <div className='row ml-4'>
                {images}
                {this.state.show ?  
                    <div className = "ui-notice">  
                            <Modal.Dialog className={this.state.addClass ? " loading" : ''}>
                                <Modal.Body className='text-center'>
                                    <p>Chúc mừng bạn đã nhận được {this.state.price} từ bạn chuột này</p>
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