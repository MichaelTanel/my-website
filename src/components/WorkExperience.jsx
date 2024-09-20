import React from "react";

function WorkExperience() {
    return (
        <div className="content workExperience">
            <div>
                <h3>Team Lead & Software Developer - Business Banking Application</h3>
                <h4>3Pillar Global (previously Jonah Group)</h4>
                <h5>Feb 2022 - Present</h5>
                <ul>
                    <li>Full stack developer & team lead working on client projects in the finance industry.</li>
                    <li>In charge of on-time and high-quality delivery of new features, improvements, and bugfixes, as well as managing the team.</li>
                    <li>Tech stack includes: React, Redux, Java Spring Boot, JPA.</li>
                </ul>
            </div>
            <div>
                <h3>Freelance Software Consultant</h3>
                <h4>Michael Tanel Consulting</h4>
                <h5>May 2020 - March 2022</h5>
                <ul>
                    <li>Performed consulting services in the software and IT space.</li>
                    <li>
                        Managed projects with multiple clients. Worked closely with them to understand their business problems, and then deliver a
                        custom or out-of-box solution to fit their needs.
                    </li>
                    <li>
                        Projects ranged from: software development, server migrations, compliance management, IT infrastructure planning, and customer
                        service.
                    </li>
                </ul>
            </div>
            <div>
                <h3>Software Developer - Online Design Template Website</h3>
                <h4>Venngage Inc.</h4>
                <h5>June 2019 - March 2020</h5>
                <ul>
                    <li>
                        Full stack developer, working with Docker, Express.js for Node.js, React, Redux, CSS to roll out new features, continuous
                        improvements, and bugfixes on a weekly release basis.
                    </li>
                    <li>
                        Large focus on improving processes to follow agile techniques – implementing TDD, proper staging and pre-staging environments,
                        code cleanups, project breakdown & scoping, etc.
                    </li>
                </ul>
            </div>
            <div>
                <h3>Software Developer - Part & Tool Rentals System</h3>
                <h4>Magna</h4>
                <h5>Summers 2016 & 2018</h5>
                <ul>
                    <li>
                        Replaced a paper ticket system used to track part and tool rentals. Roughly 20 hours per week were being wasted managing this
                        paper system.
                    </li>
                    <li>
                        Myself, along with a junior co-op developer, were given the opportunity to design and implement a web solution to manage the
                        parts and tools.
                    </li>
                    <li>
                        I took the lead developer/project manager role. I designed the database schema and setup the servers required for the project
                        which included: database server running MariaDB, Apache server with PHP5, a GitLab server to host our code repository.
                    </li>
                    <li>
                        Using Angular 6 and Google Material Design, we implemented a clean and user friendly website to manage these parts and tools
                        in a more efficient manner.
                    </li>
                </ul>
            </div>
            <div>
                <h3>Software Developer - Invoice & Payment Tracking System</h3>
                <h4>Magna</h4>
                <h5>Summers 2016 & 2018</h5>
                <ul>
                    <li>
                        Collaborated with the Finance team to redesign and implement an MS Access solution to model the data for invoice and payment
                        tracking as the existing solution could not support this.
                    </li>
                    <li>Designed and implemented a relational database model consisting of 23 tables.</li>
                </ul>
            </div>
            <div>
                <h3>Software Developer - Aircraft Mainentance Management Software</h3>
                <h4>IFS</h4>
                <h5>May 2017 - April 2018</h5>
                <ul>
                    <li>Supported an aviation maintenance management software product for the commercial and defense industries.</li>
                    <li>Main responsibilities included: feature design and implementation, bug fixes, code reviews, and documentation.</li>
                    <li>
                        The first project focused on a legacy system, managing parts and tools used for aircraft maintenance and employee scheduling.
                        The second project focused on a separate aircraft maintenance scheduling application.
                    </li>
                    <li>
                        Key technologies and approaches: AWS, PostgreSQL, AngularJS, Java backend, Docker, Shippable, Bit Bucket, Git, agile
                        methodology.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default WorkExperience;
