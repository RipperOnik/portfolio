import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import { School, Work } from '@mui/icons-material'

export default function Experience() {
    return (
        <main className='experience' style={{ minHeight: 'calc(100vh - 300px)' }}>
            <VerticalTimeline lineColor='#3e497a'>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='2018 - 2022'
                    iconStyle={{ background: '#3e497a', color: '#fff' }}
                    icon={<School />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        Bauman University
                    </h3>
                    <h4 className='vertical-timeline-element-subtitle'>
                        Moscow, Russia
                    </h4>
                    <p>Bachelor's Degree in Computer Science</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    date='Mar 2021 - Current Date'
                    iconStyle={{ background: '#e9d35b', color: '#fff' }}
                    icon={<Work />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        Frontend Development Intern - Wildberries
                    </h3>
                    <h4 className='vertical-timeline-element-subtitle'>
                        Moscow, Russia
                    </h4>
                    <p>
                        <ul>
                            <li>Developed and maintained the frontend of the retail store's e-commerce website, creating a visually appealing and intuitive user interface that enhanced the overall shopping experience.</li>
                            <li>Implemented client-side form validation to enhance data integrity and user experience, reducing form submission errors by 17% and improving the accuracy of customer information.</li>
                            <li>Optimized frontend performance by compressing assets and utilizing lazy loading techniques, resulting in a 20% decrease in bandwidth usage and faster website loading times.</li>
                            <li>Implemented a user-friendly product filtering system, allowing customers to easily find and purchase products based on their preferences, leading to a 12% increase in average order value.</li>
                            <li>Implemented responsive design principles to ensure seamless user experiences across various devices, leading to a 10% increase in mobile sales.</li>
                            <li>Improved website loading times by optimizing code and leveraging caching techniques by 8%.</li>
                            <li>Leveraged database indexes resulting in 14% speed increase in queries.</li>
                            <li>Implemented a secure authentication system utilizing industry-standard encryption and hashing algorithms, ensuring the protection of customer login credentials and sensitive data.</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>

            </VerticalTimeline>

        </main>
    )
}

