import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ThankYou.module.css';

import ty from '../../assets/Images/thankYouForm.svg';

const ThankYou = () => {
    return (
        <>
            <div className="container">
                <div className="d-grid col-md-8 mx-auto">
                    <div className="card mt-5 border-0">
                        <div className="card-body">
                            <div className={`${styles.row} row`}>
                                <div className="col-md-6 m-auto">
                                    <h1 className='mb-3'>Thank You</h1>
                                    <h5 className='text-secondary'>
                                        The interaction response link is below.
                                    </h5>
                                    <Link to="/question" target="_blank">
                                        <button className='btn btn-dark mt-3'>Check Answer Bot</button>
                                    </Link>
                                </div>
                                <div className="col-md-6 m-auto">
                                    <img className='d-flex justify-content-center mx-auto img-fluid' src={ty} alt="Thank You" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThankYou;