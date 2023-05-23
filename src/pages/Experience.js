import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import { School, Work } from '@mui/icons-material'

export default function Experience() {
    return (
        <main className='experience'>
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
                    date='Oct 2022 - Apr 2023'
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
                            <li>Developed the new version of the online cart page, which resulted in a 12% improvement in User Experience.</li>
                            <li>Developed cross-browser/platform solutions in HTML, CSS, JS, React to match design specs with pixel- perfect accuracy.</li>
                            <li>Communicated with backend developers to fix bugs, which resulted in a 10% improvement in Reliability.</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>

            </VerticalTimeline>

        </main>
    )
}
