import React from 'react'
import './Plans.css'
import { useNavigate } from "react-router-dom";

function Plans() {
    const navigate = useNavigate();
    const handlePricing = () => {
        navigate('/member')
    }
    const pricingData = [
        {

            title: 'Regular Member',
            price: '$0',
            duration: '/month',
            color: '#fff',
            features: [
                'Unlimited access to the Courses',
                'Customer Support',
                'Personal Mentor',
                'Standard Options',
                '5 Classes per Week'
            ]
        },

        {

            title: 'Premium Member',
            price: '$100',
            duration: '/month',
            color: '#c3bddd',
            features: [
                'Unlimited access to the Courses',
                'Customer Support',
                'Personal Mentor',
                'Standard Options',
                '5 Classes per Week'
            ]
        },

        {

            title: 'Standard Member',
            price: '$10',
            duration: '/month',
            color: '#fff',
            features: [
                'Unlimited access to the Courses',
                'Customer Support',
                'Personal Mentor',
                'Standard Options',
                '5 Classes per Week'
            ]
        },

    ];

    return (
        <div className='container'>
            <div className='pricing_top'>
                <h2 className='section_title'>
                    Premium Pricing Plan
                </h2>
                <p>Unlock elite tech services with our premium pricing plan and soar ahead of the competition</p>
            </div>
            <div className='pricing_wrapper'>
                {
                    pricingData.map((pricingItem, index) => (
                        <div className='pricing_item' key={index}>
                            <div className='pricing_card-top' style={{ background: pricingItem.color }}>
                                <h2 className='section_title'>
                                    {pricingItem.title}
                                </h2>
                                <h2 className='pricing_section_title'>
                                    {pricingItem.price}
                                    <span>{pricingItem.duration}</span>
                                </h2>

                            </div>
                            <div className='services'>
                                <ul>
                                    {
                                        pricingItem.features.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))
                                    }
                                </ul>
                                <button className='register-btn' onClick={handlePricing}>
                                    Join
                                </button>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}


export default Plans
