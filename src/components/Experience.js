import React from 'react'

function Experience() {
    return (
        <div className='experience'>
            <h2>Experience</h2>

            <ul>
                <li>
                    <i>Anna University</i>, 2018-2022
                    <ul>
                        <li>BE. Computer Science and Engineering</li>
                        <li> GPA: 9.0(till 7th Sem) </li>
                    </ul>
                </li>
                <li>
                    <i>The Messengers</i> - <strong>Software Engineer Intern</strong>, June 2021- Aug2021
                    <ul>
                        <li>Developed ShopyBox, was used by around 500+ people in first month of launch</li>
                        <li>Tools used Dart,Flutter,Firebase</li>
                    </ul>
                </li>
                {/* <li>
                    <i>SpiderChain</i> - <strong>Blockchain Developer</strong>, 2019-2022
                    <ul>
                        <li>Contributed to smart contract development on client's platform</li>
                        <li>Peer reviewed &amp; Audited Solidity code</li>
                    </ul>
                </li> */}
            </ul>
        </div>
    )
}

export default Experience